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
import { useRouter } from "next/navigation";

interface JobsHubSelectorProps {
  careerTypes: string[];
  selectedCareerType: string;

  country?: string,
  location?: string,
}

const JobsHubSelector = ({ selectedCareerType, careerTypes, country, location }: JobsHubSelectorProps) => {
  const navigation = useRouter();
  const handleJobsHubSelector = (careerType: string) => {
    if (careerType && !location) {
      navigation.push(`/jobs-hub/${country}?careerType=${careerType}`);
    } else if (careerType && location) {
      navigation.push(`/jobs-hub/${country}?careerType=${careerType}&location=${location}`);
    } else {
      navigation.push(`/jobs-hub/${country}`);
    }
    return window.scrollTo({ top: 0, behavior: 'smooth' });
  }
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
          {careerTypes.map((careerType, index) => (
            <SwiperSlide key={index}>
              <button
                className={`mt-3 mb-3 border rounded-[11px] px-3 py-[0.25rem] font-semibold ease-in-out duration-100 mx-auto border-black w-auto h-auto ${careerType === selectedCareerType
                  ? "bg-purple border-purple text-white"
                  : "sm:hover:bg-purple sm:hover:border-purple sm:hover:text-white"
                  }`}
                onClick={() => handleJobsHubSelector(careerType)}

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
