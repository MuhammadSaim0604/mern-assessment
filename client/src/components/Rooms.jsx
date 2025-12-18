import React, { useState, useEffect } from "react";
import { ArrowUpRight, Users, BedDouble, Bath } from "lucide-react";
import axios from 'axios'

const API_URL = import.meta.env.BASE_API_URL || 'http://localhost:3000/api'

const Rooms = () => {
  const [hotels, setHotels] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchHotels()
  }, [])

  const fetchHotels = async () => {
    try {
      setLoading(true)
      const response = await axios.get(`${API_URL}/hotels`)
      if (response.data.success) {
        setHotels(response.data.data)
      }
    } catch (error) {
      console.error('Error fetching hotels:', error)
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return <section className="w-full bg-[#2E9C7A] py-20 flex items-center justify-center">Loading...</section>
  }

  return (
    <section className="w-full bg-[#2E9C7A] py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-14">
          <span className="inline-block mb-4 rounded-md bg-white px-4 py-1 text-sm font-bold text-[#44A9A5]">
            OUR BEST ROOMS
          </span>
          <h2 className="text-4xl font-bold text-white">
            Luxury Rooms and Resort
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

          {hotels.map((hotel) => (
            <RoomCard
              key={hotel._id}
              price={hotel.price}
              title={hotel.title}
              image={hotel.image}
              guests={hotel.guests}
              beds={hotel.beds}
              bath={hotel.bath}
              description={hotel.description}
            />
          ))}

        </div>
      </div>
    </section>
  );
};

const RoomCard = ({ price, title, image, guests, beds, bath, description }) => {
  return (
    <div className="overflow-hidden rounded-2xl bg-white shadow-md">

      {/* Image */}
      <div className="relative">
        <img
          src={image}
          alt={title}
          className="h-64 w-full object-cover"
        />

        {/* Price Badge */}
        <span className="absolute left-4 top-4 rounded-md bg-[#2E9C7A] px-4 py-1 text-sm font-semibold text-white">
          {price}
        </span>
      </div>

      {/* Content */}
      <div className="p-6">

        <h3 className="mb-3 text-xl font-bold text-gray-900">
          {title}
        </h3>

        {/* Info */}
        <div className="mb-4 flex items-center gap-4 text-sm text-gray-600">
          <span className="flex items-center gap-1">
            <Users size={16} className="text-[#2E9C7A]" />
            {guests} Guests
          </span>
          <span className="flex items-center gap-1">
            <BedDouble size={16} className="text-[#2E9C7A]" />
            {beds} Beds
          </span>
          <span className="flex items-center gap-1">
            <Bath size={16} className="text-[#2E9C7A]" />
            {bath} Bath
          </span>
        </div>

        {/* Description */}
        <p className="mb-6 text-sm text-gray-600 leading-relaxed">
          {description}
        </p>

        {/* Button */}
        <button className="inline-flex items-center gap-2 rounded-md bg-[#2E9C7A] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#278a6c] transition">
          Read More
          <ArrowUpRight size={16} />
        </button>

      </div>
    </div>
  );
};

export default Rooms;
