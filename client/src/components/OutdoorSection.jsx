import React from 'react'
import { IoMdCheckmarkCircle } from "react-icons/io";
import { ArrowUpRight } from 'lucide-react';

const OutdoorSection = () => {
  return (
    <section className="w-full h-screen bg-[#E9F0EC] flex gap-14 items-center justify-center">
        <div className='h-3/4 w-2/6 flex flex-col items-start justify-center gap-6'>
        <h4 className='text-[#44A9A5] font-bold bg-white padding-luxury rounded-md'>LUXURY HOTEL</h4>
        <h1 className='text-4xl font-bold'>We Provide Outdoor Activites to all Visitors</h1>
        <h4>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even.</h4>
        <div className='flex items-center justify-center gap-10'>
            <div className='flex items-center justify-center gap-5'>
                <img src="/swiming.png" alt="Swiming pool" />
                <span className='font-bold text-xl'>The Best Swiming pool</span>
            </div>
            <div className='flex items-center justify-center gap-5'>
                <img src="stationary.png" alt="Stationary Bike" />
                <span className='font-bold text-xl'>The Best Stationary Bike</span>
            </div>
        </div>
        <div>
            <ul className='flex flex-col items-baseline gap-3 mt-4 image-marker'>
                <li className='flex items-center justify-center gap-2.5'>
                    <IoMdCheckmarkCircle color='green' size={25}/>
                    <span>It is a long fact that a reader will be distracted by the readable</span>
                </li>

                <li className='flex items-center justify-center gap-2.5'>
                    <IoMdCheckmarkCircle color='green' size={25}/>
                    <span>Lorem Ipsum is simply dummy of the printing and industry</span>
                </li>
                <li className='flex items-center justify-center gap-2.5'>
                    <IoMdCheckmarkCircle color='green' size={25}/>
                    <span>There are many variations of Lorem Ipsum majority</span>
                </li>
            </ul>
        </div>

        <button className='bg-[#1F8F6A] text-white rounded-md flex items-center justify-center h-[50px] gap-2.5 padding-191 hover:scale-105 transition-all cursor-pointer'>
                <span>Discover More</span>
                <ArrowUpRight />
        </button>

        </div>
        <div className='h-3/4 w-2/5 relative'>
            <img src="/hotel-1.jpg" className='rounded-2xl object-cover h-[450px] w-[350px] absolute top-0 right-6 z-5' alt="" />
            <img src="/hotel-2.jpg" className='rounded-2xl object-center h-[320px] w-[250px] absolute bottom-[-10px] left-18 z-6' alt="" />
            <img src="/hotel-3.jpg" className='rounded-2xl object-center h-[200px] w-[200px] absolute bottom-1 left-56 z-7' alt="" />
        </div>
    </section>
  )
}

export default OutdoorSection