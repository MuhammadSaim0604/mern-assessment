import Staff from '../models/staff.model.js';

export const getStaffList = async (req, res) => {
  try {
    const staff = await Staff.find();
    res.status(200).json({
      success: true,
      data: staff,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export default { getStaffList };
