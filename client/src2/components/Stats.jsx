import React from 'react'

const Stats = () => {
  return (
    <section className="w-full bg-[#22906C] py-12 sm:py-14 lg:py-16 h-auto lg:h-48 flex items-center justify-center px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 divide-x-0 sm:divide-x divide-dashed divide-white">

          <div className="text-center px-2 sm:px-4">
            <h2 className="stat-number text-2xl sm:text-3xl lg:text-5xl">10+</h2>
            <p className="text-xs sm:text-sm lg:text-base text-gray-100 mt-2">Luxury Rooms</p>
          </div>
          <div className="text-center px-2 sm:px-4">
            <h2 className="stat-number text-2xl sm:text-3xl lg:text-5xl">50+</h2>
            <p className="text-xs sm:text-sm lg:text-base text-gray-100 mt-2">Regular Guests</p>
          </div>
          <div className="text-center px-2 sm:px-4">
            <h2 className="stat-number text-2xl sm:text-3xl lg:text-5xl">15+</h2>
            <p className="text-xs sm:text-sm lg:text-base text-gray-100 mt-2">Team Members</p>
          </div>
          <div className="text-center px-2 sm:px-4">
            <h2 className="stat-number text-2xl sm:text-3xl lg:text-5xl">35+</h2>
            <p className="text-xs sm:text-sm lg:text-base text-gray-100 mt-2">Beaches</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Stats
