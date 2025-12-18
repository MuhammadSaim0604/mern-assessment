import React from 'react'
import poolImage from "/generated_images/resort_pool_area_view.png";
import { Play } from 'lucide-react';
const VSection = () => {
    return (
        <section
            className="relative bg-cover bg-center w-full min-h-[40vh] sm:min-h-[50vh] lg:h-[60vh] px-4"
            style={{ backgroundImage: `url(${poolImage})` }}
        >
            <div className="absolute inset-0 bg-black/60" />

            <div className="relative w-full h-full z-10 padding-4 text-center text-white flex flex-col items-center justify-center gap-6 sm:gap-8 lg:gap-10">
                <h4 className='text-[#44A9A5] font-bold bg-white padding-luxury rounded-md text-xs sm:text-sm'>Amazing Experience</h4>
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 sm:mb-8 max-w-2xl">
                    Relax And Enjoy With Our<br className='hidden sm:block' />Hotel & Resort
                </h2>
                <button className="w-14 sm:w-16 h-14 sm:h-16 cursor-pointer rounded-full bg-white/20 backdrop-blur flex items-center justify-center mx-auto hover:bg-white/30 transition-colors">
                    <Play className="w-6 sm:w-8 h-6 sm:h-8 text-white fill-white" />
                </button>
            </div>
        </section>
    )
}

export default VSection
