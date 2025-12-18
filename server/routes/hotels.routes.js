import express from 'express';
import { getHotels } from '../controllers/hotels.controller.js';

const router = express.Router();

router.get('/hotels', getHotels);

export default router;
