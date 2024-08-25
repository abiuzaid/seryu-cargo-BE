import express from 'express';
import dotenv from 'dotenv';
import driverRoutes from './routes/driverRoutes';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use('/v1/salary/driver', driverRoutes);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
