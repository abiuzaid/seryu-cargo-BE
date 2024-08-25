import { Pool } from 'pg';

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'seryu_cargo_db',
    password: 'yourpassword',
    port: 5432,
});

export const getDrivers = async ({ month, year, page_size, current, driver_code, status, name }: any) => {
    const pageSize = parseInt(page_size, 10) || 10;
    const currentPage = parseInt(current, 10) || 1;
    const offset = (currentPage - 1) * pageSize;

    let query = `
        SELECT
            d.driver_code,
            d.name,
            COALESCE(SUM(CASE WHEN sc.cost_status = 'PENDING' THEN sc.total_costs ELSE 0 END), 0) AS total_pending,
            COALESCE(SUM(CASE WHEN sc.cost_status = 'CONFIRMED' THEN sc.total_costs ELSE 0 END), 0) AS total_confirmed,
            COALESCE(SUM(CASE WHEN sc.cost_status = 'PAID' THEN sc.total_costs ELSE 0 END), 0) AS total_paid,
            COALESCE(COUNT(DISTINCT s.shipment_no), 0) AS count_shipment,
            COALESCE(COUNT(da.driver_code) * vc.value, 0) AS total_attendance_salary
        FROM drivers d
        LEFT JOIN shipment_costs sc ON d.driver_code = sc.driver_code
        LEFT JOIN shipments s ON sc.shipment_no = s.shipment_no AND s.shipment_status != 'CANCELED'
        LEFT JOIN driver_attendances da ON d.driver_code = da.driver_code AND da.attendance_status = TRUE
        CROSS JOIN variable_configs vc
        WHERE EXTRACT(MONTH FROM s.shipment_date) = $1::int
          AND EXTRACT(YEAR FROM s.shipment_date) = $2::int
          AND vc.key = 'DRIVER_MONTHLY_ATTENDANCE_SALARY'
    `;

   
    const params: any[] = [month, year];
    if (driver_code) {
        query += ` AND d.driver_code = $3::varchar`;
        params.push(driver_code);
    }
    if (name) {
        query += ` AND d.name ILIKE $${params.length + 1}::varchar`;
        params.push(`%${name}%`);
    }

    query += `
        GROUP BY d.driver_code, d.name, vc.value
        HAVING SUM(CASE WHEN sc.cost_status IN ('PENDING', 'CONFIRMED', 'PAID') THEN sc.total_costs ELSE 0 END) > 0
        LIMIT $${params.length + 1} OFFSET $${params.length + 2};
    `;

    params.push(pageSize, offset);

    try {
        const result = await pool.query(query, params);
        return result.rows;
    } catch (error) {
        console.error('Database query error:', error);
        throw new Error('Database query error');
    }
};