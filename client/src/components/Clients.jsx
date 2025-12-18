import React from 'react'
import { Hotel, MapPin, Users, Award, Play, Check, Coffee, Utensils } from "lucide-react";

const client_list = [
  { name: "Airbnb", icon: <Hotel className="w-12 h-12" /> },
  { name: "Booking", icon: <MapPin className="w-12 h-12" /> },
  { name: "Expedia", icon: <Users className="w-12 h-12" /> },
  { name: "TripAdvisor", icon: <Award className="w-12 h-12" /> },
  { name: "Hotels.com", icon: <Coffee className="w-12 h-12" /> },
];

const Clients = () => {
  return (
    <section className="py-16 bg-[#E9F0EC] w-full h-[50vh] flex items-center justify-center flex-col gap-2">

      <h4 className='text-[#44A9A5] font-bold bg-white padding-luxury rounded-md'>OUR CLIENTS</h4>
      <div className='flex items-center justify-center flex-col'>
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">
            We Have More Than 180+<br />Global Clients
          </h2>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-28">
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