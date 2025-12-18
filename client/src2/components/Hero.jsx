import React from "react";
import { useLocation } from "react-router-dom";

const pageData = {
  "/": {
    title: "About Us",
  },
  "/about": {
    title: "About Us",
  },
  "/booking": {
    title: "Booking",
  },
};

const Hero = () => {
  const { pathname } = useLocation();

  // Get page data based on path
  const page = pageData[pathname] || {
    title: "404 Error",
    desc: "Error"
  };

  return (
    <section className="relative mt-24 sm:mt-32 lg:mt-0">
      <div className="relative">
        <img
          className="h-48 sm:h-64 lg:h-80 xl:h-[60vh] w-full object-cover"
          src="/hero.jpg"
          alt={page.title}
        />
        <div className="absolute inset-0 bg-black/70"></div>
      </div>

      <div className="absolute inset-0 flex flex-col justify-center text-white px-4 sm:px-8 lg:px-20">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 sm:mb-4">
          {page.title}
        </h1>
        <h6 className="text-xs sm:text-sm md:text-lg">
          Home &gt; {page.desc || page.title}
        </h6>
      </div>
    </section>
  );
};

export default Hero;
