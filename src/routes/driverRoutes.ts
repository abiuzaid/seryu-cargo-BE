import express from 'express';
import { getDriverList } from '../controllers/driverController';

const router = express.Router();

router.get('/list', getDriverList);

export default router;
