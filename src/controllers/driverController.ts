import { Request, Response } from 'express';
import { getDrivers } from '../services/driverServices';

export const getDriverList = async (req: Request, res: Response) => {
    try {
        const { month, year, page_size = 10, current = 1, driver_code, status, name } = req.query;
        const results = await getDrivers({ month, year, page_size, current, driver_code, status, name });
        res.json(results);
    } catch (error) {
        console.error('Error occurred:', error);
        res.status(500).json({ error: 'Internal Server Error' });
      }
};

