import mongoose from 'mongoose';

const hotelSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  guests: {
    type: Number,
    required: true,
  },
  beds: {
    type: Number,
    required: true,
  },
  bath: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model('Hotel', hotelSchema);
