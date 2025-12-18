import React, { useState, useEffect } from 'react'
import axios from 'axios'

const API_URL = import.meta.env.BASE_API_URL || 'http://localhost:3000/api'

const Staff = () => {
  const [staffMembers, setStaffMembers] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchStaff()
  }, [])

  const fetchStaff = async () => {
    try {
      setLoading(true)
      const response = await axios.get(`${API_URL}/staff`)
      if (response.data.success) {
        setStaffMembers(response.data.data)
      }
    } catch (error) {
      console.error('Error fetching staff:', error)
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return <section className="w-full min-h-screen bg-[#FFFFFF] flex items-center justify-center">Loading...</section>
  }

  return (
    <section className="w-full min-h-screen bg-[#FFFFFF] flex items-center justify-center flex-col gap-4 sm:gap-6 py-12 px-4">
        <h4 className='text-[#44A9A5] font-bold bg-gray-100 padding-luxury rounded-md text-xs sm:text-sm'>Fixyland Staff</h4>
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-8 text-center">Expert Staff</h1>
        <div className='flex items-center justify-center gap-4 sm:gap-6 lg:gap-9 flex-wrap'>
            {staffMembers.map((member, index) => (
                <TeamCard key={index} image={member.image} name={member.name} role={member.role} />
            ))}
        </div>

    </section>
  )
}

const TeamCard = ({ image, name, role }) => {
  return (
    <div className="bg-white rounded-xl sm:rounded-2xl shadow-md overflow-hidden group w-full sm:w-auto max-w-xs">
      
      {/* Image */}
      <div className="relative">
        <img
          src={image}
          alt={name}
          className="h-48 sm:h-56 lg:h-72 w-full object-cover"
        />

        {/* Plus Button */}
        <button className="absolute bottom-3 sm:bottom-4 cursor-pointer right-3 sm:right-4 w-8 sm:w-10 h-8 sm:h-10 rounded-md bg-emerald-500 text-white flex items-center justify-center text-lg sm:text-xl font-bold shadow-lg opacity-0 group-hover:opacity-100 transition">
          +
        </button>
      </div>

      {/* Content */}
      <div className="pad-6 p-4 sm:p-6">
        <h3 className="text-base sm:text-lg font-bold text-gray-900">
          {name}
        </h3>
        <div className="flex items-center gap-2 mt-2 text-gray-500 text-xs sm:text-sm">
          <span className="w-5 h-[2px] bg-emerald-500"></span>
          {role}
        </div>
      </div>

    </div>
  );
};

export default Staff
