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
    return <section className="w-full h-screen bg-[#FFFFFF] flex items-center justify-center">Loading...</section>
  }

  return (
    <section className="w-full h-screen bg-[#FFFFFF] flex items-center justify-center flex-col gap-6 py-12 px-4">
        <h4 className='text-[#44A9A5] font-bold bg-gray-100 padding-luxury rounded-md'>Fixyland Staff</h4>
        <h1 className="text-3xl md:text-4xl font-bold mb-8">Expert Staff</h1>
        <div className='flex items-center justify-center gap-9 flex-wrap'>
            {staffMembers.map((member, index) => (
                <TeamCard key={index} image={member.image} name={member.name} role={member.role} />
            ))}
        </div>

    </section>
  )
}

const TeamCard = ({ image, name, role }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden group">
      
      {/* Image */}
      <div className="relative">
        <img
          src={image}
          alt={name}
          className="h-72 w-full object-cover"
        />

        {/* Plus Button */}
        <button className="absolute bottom-4 cursor-pointer right-4 w-10 h-10 rounded-md bg-emerald-500 text-white flex items-center justify-center text-xl font-bold shadow-lg opacity-0 group-hover:opacity-100 transition">
          +
        </button>
      </div>

      {/* Content */}
      <div className="pad-6">
        <h3 className="text-lg font-bold text-gray-900">
          {name}
        </h3>
        <div className="flex items-center gap-2 mt-2 text-gray-500 text-sm">
          <span className="w-5 h-[2px] bg-emerald-500"></span>
          {role}
        </div>
      </div>

    </div>
  );
};

export default Staff
