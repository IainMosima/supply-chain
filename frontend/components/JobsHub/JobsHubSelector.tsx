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

const trial = [
  "Accounting & Finance",
  "Information Technology",
  "Engineering",
  "Quantity Survey",
  "Logistics",
  "Supply Chain",
  "Procurement",
  "Hospitality",
  "Administration",
  "Agriculture",
  "Teaching",
  "Healthcare",
  "Consultancy",
  "Customer Service",
  "Real Estate & Facilities Management",
  "Media",
  "Human Resources",
  "Sales & Marketing",
  "Insurance",
  "Statistics & Data Analysis",
  "Legal Services",
  "Project Management",
  "Design",
];

interface JobsHubSelectorProps {
  selectedCareerType: string;
}

const JobsHubSelector = ({ selectedCareerType }: JobsHubSelectorProps) => {
  return (
    <div className="w-full z-0 bg-white mt-2]">
      <Swiper
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
        breakpoints={{
          375: {
            slidesPerView: 3,
          },
          768: {
            slidesPerView: 5,
          },
          1020: {
            slidesPerView: 9,
          },
        }}
        spaceBetween={80}
      >
        <div className="flex justify-center gap-2 w-full">
          {trial.map((careerType, index) => (
            <SwiperSlide key={index}>
              <button
                className={`mt-3 mb-3 border rounded-[11px] px-3 py-[0.25rem] font-semibold ease-in-out duration-100 mx-auto border-black w-auto h-auto ${
                  careerType === selectedCareerType
                    ? "bg-purple border-purple text-white"
                    : "hover:bg-purple hover:border-purple hover:text-white"
                }`}
              >
                {careerType}
              </button>
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </div>
  );
};

export default JobsHubSelector;
