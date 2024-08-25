-Clone Repository
Salin repositori ke komputer Anda dengan menggunakan perintah Git.

-Masuk ke Direktori Proyek
Arahkan ke folder proyek yang telah Anda clone.

-Instal Dependensi
Install paket yang diperlukan dengan menjalankan perintah npm install.

-Siapkan File Konfigurasi
Buat file .env di root proyek dan tambahkan konfigurasi PostgreSQL Anda.

-Jalankan Migration
Jalankan migration untuk membuat tabel di database menggunakan perintah yang disediakan dalam skrip migration.

-Mulai Server
Jalankan server backend dengan perintah yang disediakan untuk memulai aplikasi.

-Menggunakan API
Untuk mendapatkan daftar gaji driver, gunakan endpoint berikut:
GET http://localhost:5000/v1/salary/driver/list?month=3&year=2024&current=1&page_size=10

Contoh Respons:

[
    {
        "driver_code": "DRIVER001",
        "name": "Driver Name 1",
        "total_pending": "742400000.00",
        "total_confirmed": "128000000.00",
        "total_paid": "508800000.00",
        "count_shipment": "15",
        "total_attendance_salary": "12000000"
    },
    {
        "driver_code": "DRIVER002",
        "name": "Driver Name 2",
        "total_pending": "357000000.00",
        "total_confirmed": "300300000.00",
        "total_paid": "625800000.00",
        "count_shipment": "15",
        "total_attendance_salary": "15750000"
    },
    {
        "driver_code": "DRIVER003",
        "name": "Driver Name 3",
        "total_pending": "366000000.00",
        "total_confirmed": "178800000.00",
        "total_paid": "98400000.00",
        "count_shipment": "13",
        "total_attendance_salary": "7800000"
    },
    {
        "driver_code": "DRIVER004",
        "name": "Driver Name 4",
        "total_pending": "533900000.00",
        "total_confirmed": "233700000.00",
        "total_paid": "695400000.00",
        "count_shipment": "17",
        "total_attendance_salary": "16150000"
    },
    {
        "driver_code": "DRIVER005",
        "name": "Driver Name 5",
        "total_pending": "753100000.00",
        "total_confirmed": "989400000.00",
        "total_paid": "144500000.00",
        "count_shipment": "20",
        "total_attendance_salary": "17000000"
    },
    {
        "driver_code": "DRIVER006",
        "name": "Driver Name 6",
        "total_pending": "397100000.00",
        "total_confirmed": "11400000.00",
        "total_paid": "343900000.00",
        "count_shipment": "11",
        "total_attendance_salary": "10450000"
    },
    {
        "driver_code": "DRIVER007",
        "name": "Driver Name 7",
        "total_pending": "723900000.00",
        "total_confirmed": "133000000.00",
        "total_paid": "323000000.00",
        "count_shipment": "10",
        "total_attendance_salary": "9500000"
    },
    {
        "driver_code": "DRIVER008",
        "name": "Driver Name 8",
        "total_pending": "306800000.00",
        "total_confirmed": "258700000.00",
        "total_paid": "625300000.00",
        "count_shipment": "20",
        "total_attendance_salary": "13000000"
    },
    {
        "driver_code": "DRIVER009",
        "name": "Driver Name 9",
        "total_pending": "360800000.00",
        "total_confirmed": "642400000.00",
        "total_paid": "224400000.00",
        "count_shipment": "10",
        "total_attendance_salary": "11000000"
    },
    {
        "driver_code": "DRIVER010",
        "name": "Driver Name 10",
        "total_pending": "255600000.00",
        "total_confirmed": "304800000.00",
        "total_paid": "435600000.00",
        "count_shipment": "16",
        "total_attendance_salary": "9600000"
    }
]
