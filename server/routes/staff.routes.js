import express from 'express';
import { getStaffList } from '../controllers/staff.controller.js';

const router = express.Router();

router.get('/staff', getStaffList);

export default router;
