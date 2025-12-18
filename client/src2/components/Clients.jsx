import React from 'react'
import { Hotel, MapPin, Users, Award, Play, Check, Coffee, Utensils } from "lucide-react";

const client_list = [
  { name: "Airbnb", icon: <Hotel className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12" /> },
  { name: "Booking", icon: <MapPin className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12" /> },
  { name: "Expedia", icon: <Users className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12" /> },
  { name: "TripAdvisor", icon: <Award className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12" /> },
  { name: "Hotels.com", icon: <Coffee className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12" /> },
];

const Clients = () => {
  return (
    <section className="py-12 sm:py-16 bg-[#E9F0EC] w-full min-h-[50vh] flex items-center justify-center flex-col gap-2 px-4">

      <h4 className='text-[#44A9A5] font-bold bg-white padding-luxury rounded-md text-xs sm:text-sm'>OUR CLIENTS</h4>
      <div className='flex items-center justify-center flex-col w-full'>
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-lg sm:text-2xl md:text-3xl font-bold text-foreground">
            We Have More Than 180+<br className='block sm:hidden' />Global Clients
          </h2>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-8 md:gap-14 lg:gap-28">
          {client_list.map((client) => (
            <div
              key={client.name}
              className="text-[#929292] hover:text-black transition-colors"
            >
              {client.icon}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Clients
