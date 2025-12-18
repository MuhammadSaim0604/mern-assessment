import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();
import staffRoutes from './routes/staff.routes.js';
import hotelRoutes from './routes/hotels.routes.js';
import appointmentRoutes from './routes/appointment.routes.js';

const app = express();
app.use(cors());
app.use(bodyParser.json());

// MongoDB Connection
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/fixyland';

mongoose.connect(MONGODB_URI)
  .then(() => {
    console.log('MongoDB connected successfully');
  })
  .catch((err) => {
    console.log('MongoDB connection error:', err);
  });

// Routes
app.use('/api', staffRoutes);
app.use('/api', hotelRoutes);
app.use('/api', appointmentRoutes);

// Basic health check
app.get('/health', (req, res) => {
  res.status(200).json({ message: 'Server is running' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server is running on port ${PORT}`);
});
