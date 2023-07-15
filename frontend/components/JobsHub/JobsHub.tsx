'use client';
import React from "react";
import "./JobsHub.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import SearchBar from "./SearchBar";




const trial = [
  "All",
  "Vegatables",
  "Fruits",
  "Herbs",
  "Meat",
  "Vegatables",
  "Fruits",
  "Herbs",
  "Meat",
  "Vegatables",
  "Fruits",
  "Herbs",
  "Meat",
  "Vegatables",
  "Fruits",
  "Herbs",
  "Meat",
];

const JobsHub = () => {
  return (
    <div className="mt-1 mb-[2rem]">
      <Swiper
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
        slidesPerView={15}
        spaceBetween={0}
      >
        <div className="flex justify-center gap-2 w-full">
          {trial.map((category, index) => (
            <SwiperSlide key={index}>
              <button
                className={`mt-3 mb-3 border-2 border-green rounded-[11px] px-3 py-[0.25rem] hover:bg-green hover:border-1 hover:text-yellow hover:font-extrabold font-semibold ease-in-out duration-100 mx-auto `}
              >
                {category}
              </button>
            </SwiperSlide>
          ))}
        </div>
      </Swiper>

      <SearchBar/>
    </div>
  );
};

export default JobsHub;
