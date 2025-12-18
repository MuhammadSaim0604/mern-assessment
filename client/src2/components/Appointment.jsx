import React, { useState, useEffect } from "react";
import { ArrowUpRight } from "lucide-react";
import axios from 'axios'

const API_URL = import.meta.env.BASE_API_URL || 'http://localhost:3000/api'

const Appointment = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    roomType: '',
    selectedRoom: '',
    checkIn: '',
    checkOut: '',
    message: '',
  })
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      setLoading(true)
      setMessage('')
      
      const response = await axios.post(`${API_URL}/appointment`, formData)
      
      if (response.data.success) {
        setMessage('Appointment booked successfully!')
        // Reset form
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          roomType: '',
          selectedRoom: '',
          checkIn: '',
          checkOut: '',
          message: '',
        })
        setTimeout(() => setMessage(''), 3000)
      }
    } catch (error) {
      console.error('Error booking appointment:', error)
      setMessage('Error booking appointment. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="w-full bg-[#E9F0EC] py-12 sm:py-16 lg:py-20 px-4">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-8 sm:mb-12">
          <span className="inline-block mb-3 sm:mb-4 rounded-md bg-white px-3 sm:px-4 py-1 text-xs sm:text-sm font-bold text-[#44A9A5]">
            STAY WITH US
          </span>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
            Make An Appointment
          </h1>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 items-start">

          {/* LEFT FORM */}
          <div className="lg:col-span-2 rounded-lg sm:rounded-2xl bg-white p-6 sm:p-8 shadow-sm">
            {message && (
              <div className={`mb-4 p-4 rounded-md text-sm sm:text-base ${message.includes('successfully') ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                {message}
              </div>
            )}
            <form className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6" onSubmit={handleSubmit}>

              {/* First Name */}
              <div>
                <label className="block text-xs sm:text-sm mb-2 text-gray-600">
                  First Name
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="Ex. first name"
                  className="w-full rounded-md bg-[#F1F6F3] px-3 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm outline-none"
                  required
                />
              </div>

              {/* Last Name */}
              <div>
                <label className="block text-xs sm:text-sm mb-2 text-gray-600">
                  Last Name
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Ex. last name"
                  className="w-full rounded-md bg-[#F1F6F3] px-3 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm outline-none"
                  required
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-xs sm:text-sm mb-2 text-gray-600">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Ex. info@domain.com"
                  className="w-full rounded-md bg-[#F1F6F3] px-3 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm outline-none"
                  required
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-xs sm:text-sm mb-2 text-gray-600">
                  Phone Number
                </label>
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Ex. (+1) 987 654 3210"
                  className="w-full rounded-md bg-[#F1F6F3] px-3 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm outline-none"
                  required
                />
              </div>

              {/* Select Type */}
              <div>
                <label className="block text-xs sm:text-sm mb-2 text-gray-600">
                  Select Type
                </label>
                <select 
                  name="roomType"
                  value={formData.roomType}
                  onChange={handleChange}
                  className="w-full rounded-md bg-[#F1F6F3] px-3 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm outline-none"
                  required
                >
                  <option value="">Select Type</option>
                  <option value="Deluxe">Deluxe</option>
                  <option value="Junior">Junior</option>
                  <option value="Family">Family</option>
                </select>
              </div>

              {/* Select Room */}
              <div>
                <label className="block text-xs sm:text-sm mb-2 text-gray-600">
                  Select Room
                </label>
                <select 
                  name="selectedRoom"
                  value={formData.selectedRoom}
                  onChange={handleChange}
                  className="w-full rounded-md bg-[#F1F6F3] px-3 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm outline-none"
                  required
                >
                  <option value="">Select Room</option>
                  <option value="Deluxe Rooms">Deluxe Rooms</option>
                  <option value="Junior Rooms">Junior Rooms</option>
                  <option value="Family Rooms">Family Rooms</option>
                </select>
              </div>

              {/* Check In */}
              <div>
                <label className="block text-xs sm:text-sm mb-2 text-gray-600">
                  Check In
                </label>
                <input
                  type="date"
                  name="checkIn"
                  value={formData.checkIn}
                  onChange={handleChange}
                  className="w-full rounded-md bg-[#F1F6F3] px-3 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm outline-none"
                  required
                />
              </div>

              {/* Check Out */}
              <div>
                <label className="block text-xs sm:text-sm mb-2 text-gray-600">
                  Check Out
                </label>
                <input
                  type="date"
                  name="checkOut"
                  value={formData.checkOut}
                  onChange={handleChange}
                  className="w-full rounded-md bg-[#F1F6F3] px-3 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm outline-none"
                  required
                />
              </div>

              {/* Message */}
              <div className="sm:col-span-2">
                <label className="block text-xs sm:text-sm mb-2 text-gray-600">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="10"
                  placeholder="Ex. type message"
                  className="w-full rounded-md bg-[#F1F6F3] px-3 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm outline-none resize-none"
                />
              </div>

              {/* Button */}
              <div className="sm:col-span-2">
                <button 
                  type="submit"
                  disabled={loading}
                  className="inline-flex items-center gap-1 sm:gap-2 rounded-md bg-[#2E9C7A] px-4 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm font-semibold text-white hover:bg-[#278a6c] transition disabled:opacity-50"
                >
                  {loading ? 'Booking...' : 'Book Appointment'}
                  <ArrowUpRight size={14} className='sm:w-4' />
                </button>
              </div>

            </form>
          </div>

          {/* RIGHT CARD */}
          <div className="rounded-lg sm:rounded-2xl bg-[#2E9C7A] p-6 text-white">
            <div className="relative mb-6 overflow-hidden rounded-lg sm:rounded-xl">
              <img
                src="/hotel-2.jpg"
                alt="room"
                className="h-48 sm:h-64 lg:h-80 w-full object-cover"
              />
              <div className="absolute inset-0 bg-yellow-400/70 mix-blend-multiply"></div>
            </div>

            <div className="flex flex-col items-center justify-center">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-2">
              (+1) 987 654 3210
            </h3>
            <p className="text-xs sm:text-sm mb-2 text-center">
              Mon-Fri: 7:00 am - 9:00 pm
            </p>
            <p className="text-xs sm:text-sm mb-6 text-center">
              24/7 Service Available
            </p>

            <button className="inline-flex items-center gap-1 sm:gap-2 rounded-md bg-[#E8C45A] px-4 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm font-semibold text-gray-900 hover:bg-[#d6b34f] transition">
              Call Us Now
             <ArrowUpRight size={14} className='sm:w-4' />
            </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Appointment;
