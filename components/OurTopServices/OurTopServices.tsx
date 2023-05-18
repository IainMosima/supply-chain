"use client";

import Image from 'next/image';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import { Images } from '@/constants';

import "./OurTopServices.scss";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import TopServiceCard from './TopServiceCard';
import { useState } from 'react';


const OurTopService = () => {
  const services = [
    {
      serviceName: 'Supplier prequalification',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim sed faucibus turpis in eu. Nulla facilisi morbi tempus iaculis urna id.',
      serviceImg: Images.serviceMan
    },
    {
      serviceName: 'Spend analysis and category management',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim sed faucibus turpis in eu. Nulla facilisi morbi tempus iaculis urna id.',
      serviceImg: Images.serviceWoman
    },
    {
      serviceName: 'Procurement processes and policies review and re-engineering',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim sed faucibus turpis in eu. Nulla facilisi morbi tempus iaculis urna id.',
      serviceImg: Images.serviceMan
    },
    {
      serviceName: 'Supplier prequalification',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim sed faucibus turpis in eu. Nulla facilisi morbi tempus iaculis urna id.',
      serviceImg: Images.serviceWoman
    },
    {
      serviceName: 'Supplier prequalification',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim sed faucibus turpis in eu. Nulla facilisi morbi tempus iaculis urna id.',
      serviceImg: Images.serviceMan
    },
    {
      serviceName: 'Supplier prequalification',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim sed faucibus turpis in eu. Nulla facilisi morbi tempus iaculis urna id.',
      serviceImg: Images.serviceWoman
    },
    {
      serviceName: 'Supplier prequalification',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim sed faucibus turpis in eu. Nulla facilisi morbi tempus iaculis urna id.',
      serviceImg: Images.serviceMan
    },
  ]
  return (
    <div className='mb-5 flex flex-col gap-3'>
      <div className='flex w-full bg-purple text-white place-items-center justify-between p-4'>
          <h2 className='font-semibold text-xl'>Our Top Services</h2>

          <div className='flex place-items-center gap-2'>
            <h3 className='font-bold cursor-pointer'>See All</h3>
            <Image src={Images.nextWhite} alt='next-icon' width={10}/>
          </div>
      </div>

      <div className='w-full flex justify-between'>
        <Swiper
          slidesPerView={4}
          spaceBetween={5}
          modules={[Autoplay, Pagination]}
          className="mySwiper"
          autoplay={{
            delay: 10000,
            disableOnInteraction: false,
          }}
        >
          {services.map((service, index) => 
            <SwiperSlide key={index}>
              <TopServiceCard serviceName={service.serviceName} description={service.description} serviceImg={service.serviceImg} />
            </SwiperSlide>
          )

          }
        </Swiper>
      </div>


    </div>
  )
}

export default OurTopService