import Appointment from '../models/appointment.model.js';

export const createAppointment = async (req, res) => {
  try {
    const { firstName, lastName, email, phone, roomType, selectedRoom, checkIn, checkOut, message } = req.body;

    const appointment = new Appointment({
      firstName,
      lastName,
      email,
      phone,
      roomType,
      selectedRoom,
      checkIn,
      checkOut,
      message,
    });

    await appointment.save();

    res.status(201).json({
      success: true,
      message: 'Appointment created successfully',
      data: appointment,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export default { createAppointment };
