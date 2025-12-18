import React from 'react'
import poolImage from "/generated_images/resort_pool_area_view.png";
import { Play } from 'lucide-react';
const VSection = () => {
    return (
        <section
            className="relative bg-cover bg-center w-full h-[60vh]"
            style={{ backgroundImage: `url(${poolImage})` }}
        >
            <div className="absolute inset-0 bg-black/60" />

            <div className="relative w-full h-full z-10 padding-4 text-center text-white flex flex-col items-center justify-center gap-10">
                <h4 className='text-[#44A9A5] font-bold bg-white padding-luxury rounded-md'>Amazing Experience</h4>
                <h2 className="text-3xl md:text-4xl font-bold mb-8">
                    Relax And Enjoy With Our<br />Hotel & Resort
                </h2>
                <button className="w-16 h-16 cursor-pointer rounded-full bg-white/20 backdrop-blur flex items-center justify-center mx-auto hover:bg-white/30 transition-colors">
                    <Play className="w-8 h-8 text-white fill-white" />
                </button>
            </div>
        </section>
    )
}

export default VSection