"use client";

import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Autoplay, Navigation } from "swiper";
import { Images } from "@/constants";

import "./OurTopServices.scss";
import "swiper/css";
import "swiper/css/navigation";

import TopServiceCard from "./TopServiceCard";
import NavigationButtons from "./NavigationButtons";
import { getRandomServices } from "@/network/Services";
import { useEffect, useState } from "react";
import { Services } from "@/models/Services";
import Loading from "../Loading/Loading";

const OurTopService = () => {
  const [services, setServices] = useState<Services[]>([]);
  useEffect(() => {
    async function fetchRandomServices() {
      getRandomServices().then((res) => setServices(res));
    }
    fetchRandomServices();
  }, []);

  return (
    <div className="lg:mt-[9rem] md:mt-[9rem] mt-[7.7rem] flex flex-col z-20">
      {services.length > 0 ? (
        <div>
          <h2 className="font-semibold text-xl text-center text-purple">
            Our Top Services
          </h2>
          <div className="w-[1.2rem] h-[.2rem] bg-purple mx-auto" />
          <div className="w-full flex h-[30rem] justify-between place-items-center gap-1 mt-3">
            <Swiper
              spaceBetween={0}
              observer={true}
              rewind={true}
              breakpoints={{
                375: {
                  slidesPerView: 1,
                },
                768: {
                  slidesPerView: 2,
                },
                1020: {
                  slidesPerView: 3,
                },
              }}
              modules={[Autoplay]}
              autoplay={{
                delay: 8000,
                disableOnInteraction: false,
              }}
              className="mySwiper h-full relative"
            >
              <NavigationButtons />
              {services.map((service, index) => (
                <SwiperSlide key={index} className="custom-cards border-r-2 border-black">
                  <TopServiceCard
                    serviceName={service.serviceName}
                    description={service.serviceDescription}
                    serviceImgKey={service.serviceImageKey}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      ) : (
        <div className="w-full flex h-[30rem] justify-center mb-1 place-items-center">
          <Loading />
        </div>
      )}
    </div>
  );
};

export default OurTopService;
