# Fixyland Hotel Booking System - Setup Guide

## Backend APIs Created.

### 1. **GET /api/staff** - Expert Staff API
- Returns staff data for the About Us page
- Fields: name, role, image
- Source: MongoDB collection `Staff`

### 2. **GET /api/hotels** - Hotels API  
- Returns hotel room listings for the Booking page
- Fields: title, price, image, guests, beds, bath, description
- Source: MongoDB collection `Hotel`

### 3. **POST /api/appointment** - Appointment API
- Saves appointment booking data to MongoDB
- Fields: firstName, lastName, email, phone, roomType, selectedRoom, checkIn, checkOut, message
- Returns: success status and created appointment data

## Project Structure

```
server/
├── models/
│   ├── staff.model.js      # MongoDB Staff schema
│   ├── hotel.model.js      # MongoDB Hotel schema
│   └── appointment.model.js # MongoDB Appointment schema
├── controllers/
│   ├── staff.controller.js     # Staff API logic
│   ├── hotels.controller.js    # Hotels API logic
│   └── appointment.controller.js # Appointment API logic
├── routes/
│   ├── staff.routes.js      # Staff routes
│   ├── hotels.routes.js     # Hotels routes
│   └── appointment.routes.js # Appointment routes
├── index.js                 # Express server setup
├── seedData.js             # Script to seed database
├── package.json
└── .env                    # Environment variables

client/
├── src/
│   ├── components/
│   │   ├── Staff.jsx       # Fetches staff data from API
│   │   ├── Rooms.jsx       # Fetches hotel data from API
│   │   └── Appointment.jsx # Sends appointment form data to API
│   └── pages/
│       ├── About.jsx
│       ├── Booking.jsx
│       └── Not-found.jsx
├── package.json
├── .env.local              # Frontend API URL configuration
└── vite.config.js
```

## How to Run on Your Local Machine

### Prerequisites
- Node.js (v16+)
- MongoDB running locally on `mongodb://localhost:27017/fixyland`

### Backend Setup
```bash
cd server
npm install
node seedData.js          # Seed the database with staff and hotel data
npm run dev  # Start backend server
```

### Frontend Setup (in another terminal)
```bash
cd client
npm install
npm run dev
```

### Access the Application
- Frontend: `http://localhost:5000`
- Backend API: `http://localhost:3000/api`

## API Endpoints

| Method | Endpoint | Purpose | Body |
|--------|----------|---------|------|
| GET | `/api/staff` | Get all staff members | None |
| GET | `/api/hotels` | Get all hotel rooms | None |
| POST | `/api/appointment` | Create new appointment | Form data (see schema) |

## Integration Details

### Frontend to Backend Communication
- **Technology**: Axios HTTP client
- **API Base URL**: `http://localhost:3000/api` (configurable via `.env.local`)
- **Components that call APIs**:
  - `Staff.jsx` → GET `/api/staff`
  - `Rooms.jsx` → GET `/api/hotels`
  - `Appointment.jsx` → POST `/api/appointment`

### CORS Configuration
- CORS is enabled on the backend to allow frontend requests
- Backend runs on port 3000, Frontend on port 5000

## MongoDB Collections

### Staff Collection
```javascript
{
  name: String,
  role: String,
  image: String,
  createdAt: Date
}
```

### Hotel Collection
```javascript
{
  title: String,
  price: String,
  image: String,
  guests: Number,
  beds: Number,
  bath: Number,
  description: String,
  createdAt: Date
}
```

### Appointment Collection
```javascript
{
  firstName: String,
  lastName: String,
  email: String,
  phone: String,
  roomType: String,
  selectedRoom: String,
  checkIn: Date,
  checkOut: Date,
  message: String,
  createdAt: Date
}
```

## Features Implemented

✅ MongoDB schemas for all three models
✅ RESTful API endpoints (GET staff, GET hotels, POST appointment)
✅ Frontend components integrated with axios
✅ Form submission with validation
✅ Loading states on components
✅ Success/error messaging
✅ Environment configuration (.env and .env.local)
✅ CORS enabled for cross-origin requests
✅ Seed data script for initial database population

## Important Notes

- The seed data populates 4 staff members and 3 hotel rooms
- All form fields are required for appointment submission
- Images in the API responses point to public folder paths
- The system uses MongoDB placeholder URI - update in `.env` if using a different database
