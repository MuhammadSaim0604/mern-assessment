import Hotel from '../models/hotel.model.js';

export const getHotels = async (req, res) => {
  try {
    const hotels = await Hotel.find();
    res.status(200).json({
      success: true,
      data: hotels,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export default { getHotels };
