import mongoose from 'mongoose';
import Staff from './models/staff.model.js';
import Hotel from './models/hotel.model.js';

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/fixyland';

const seedData = async () => {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log('MongoDB connected');

    // Clear existing data
    await Staff.deleteMany({});
    await Hotel.deleteMany({});

    // Seed Staff Data
    const staffData = [
      {
        name: 'Michael Dean',
        role: 'Hotel Manager',
        image: '/generated_images/male_hotel_manager_portrait.png',
      },
      {
        name: 'Arnold Taylor',
        role: 'Senior Receptionist',
        image: '/generated_images/female_receptionist_portrait.png',
      },
      {
        name: 'Michael Dean',
        role: 'Executive Chef',
        image: '/generated_images/male_chef_portrait.png',
      },
      {
        name: 'Michael Dean',
        role: 'Spa Therapist',
        image: '/generated_images/female_spa_therapist_portrait.png',
      },
    ];

    await Staff.insertMany(staffData);
    console.log('Staff data seeded');

    // Seed Hotel Data
    const hotelData = [
      {
        title: 'Deluxe Rooms',
        price: '$800 / Night',
        image: '/hotel-1.jpg',
        guests: 2,
        beds: 2,
        bath: 1,
        description: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
      },
      {
        title: 'Junior Rooms',
        price: '$400 / Night',
        image: '/hotel-2.jpg',
        guests: 2,
        beds: 2,
        bath: 1,
        description: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
      },
      {
        title: 'Family Rooms',
        price: '$600 / Night',
        image: '/hotel-3.jpg',
        guests: 2,
        beds: 2,
        bath: 1,
        description: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
      },
    ];

    await Hotel.insertMany(hotelData);
    console.log('Hotel data seeded');

    await mongoose.connection.close();
    console.log('Database seeding complete');
  } catch (error) {
    console.log('Error seeding database:', error);
    process.exit(1);
  }
};

seedData();
