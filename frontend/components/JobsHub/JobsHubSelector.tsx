"use client";
import React, { useEffect } from "react";
import "./JobsHub.scss";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";


const trial = ['All', 'Vegatables', 'Fruits', 'Herbs', 'Meat', 'Vegatables', 'Fruits', 'Herbs', 'Meat', 'Vegatables', 'Fruits', 'Meat', 'Vegatables', 'Fruits', 'Meat', 'Vegatables', 'Fruits']


const JobsHubSelector = () => {
  console.log(trial.length);
  return (
    <div className="w-full z-0 bg-white mt-2]">
      <Swiper
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
        slidesPerView={(trial.length)/2 + 7}
        spaceBetween={0} >
        <div className="flex justify-center gap-2 w-full">
          {trial.map((category, index) => (
            <SwiperSlide key={index}>
              <button
                className={`mt-3 mb-3 border-2 hover:border-purple rounded-[11px] px-3 py-[0.25rem] hover:bg-purple hover:border-1 hover:text-white hover:font-extrabold font-semibold ease-in-out duration-100 mx-auto`}
                >
                {category}
              </button>
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </div>
  );
};

export default JobsHubSelector;
