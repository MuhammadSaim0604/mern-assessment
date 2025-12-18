import React from 'react'

const WhyUs = () => {
    return (

        <section className="w-full h-screen bg-[#FFFFFF] flex gap-14 items-center justify-center">
            <div className='h-3/4 w-2/6 flex flex-col items-start justify-center gap-6'>
                <h4 className='text-[#44A9A5] font-bold bg-[#E9F0EC] padding-luxury rounded-md'>OUR SKILLS</h4>
                <h1 className='text-4xl font-bold'>Why Choose for us?</h1>
                <h4>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even.</h4>
                <div className='w-full flex flex-col gap-6 mt-4'>
                    <ProgressBar label="Hospitality" percentage={90} />
                    <ProgressBar label="Customer Service" percentage={85} />
                    <ProgressBar label="Cleanliness" percentage={95} />
                    <ProgressBar label="Amenities" percentage={80} />
                </div>
            </div>
            <div className='h-3/4 w-2/5 relative'>
                <img src="/hotel-1.jpg" className='rounded-2xl object-cover h-[420px] w-[350px] absolute top-1/9 right-1/6 z-5' alt="" />
                <img src="/hotel-2.jpg" className='rounded-2xl object-center h-[220px] w-[200px] absolute bottom-1/7 left-1/9 z-6 border-4 border-white' alt="" />
                
            </div>
        </section>
    )
}


export function ProgressBar({ label, percentage }) {
    return (
        <div className="w-full flex flex-col gap-4">
            <div className="flex justify-between text-sm">
                <span className="font-medium text-[#1F8F6A]">{label}</span>
                <span className="text-[#1F8F6A]">{percentage}%</span>
            </div>
            <div className="h-2  bg-[#E9F0EC] rounded-full overflow-hidden">
                <div
                    className="h-full w-full bg-[#1F8F6A] rounded-full transition-all duration-700"
                    style={{ width: `${percentage}%` }}
                />
            </div>
        </div>
    );
}


export default WhyUs