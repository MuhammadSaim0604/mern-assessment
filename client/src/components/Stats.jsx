import React from 'react'

const Stats = () => {
  return (
    <section className="w-full bg-[#22906C] py-16 h-48 flex items-center justify-center">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 divide-x divide-dashed divide-white">

          <div className="text-center px-4">
            <h2 className="stat-number">10+</h2>
            <p className="text-gray-100">Luxury Rooms</p>
          </div>
          <div className="text-center px-4">
            <h2 className="stat-number">50+</h2>
            <p className="text-gray-100">Regular Guests</p>
          </div>
          <div className="text-center px-4">
            <h2 className="stat-number">15+</h2>
            <p className="text-gray-100">Team Members</p>
          </div>
          <div className="text-center px-4">
            <h2 className="stat-number">35+</h2>
            <p className="text-gray-100">Beaches</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Stats