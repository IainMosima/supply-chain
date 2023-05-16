"use client";

import Image from 'next/image';
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper";
import { Images } from '@/constants';

import "./OurTopServices.scss";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";


const OurTopService = () => {
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
          slidesPerView={3}
          spaceBetween={5}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide className=''>
            <div className='bg-purple'></div>
          </SwiperSlide>

          <SwiperSlide>
            <div className='bg-purple'></div>
          </SwiperSlide>

          <SwiperSlide>
            <div className='bg-purple'></div>
          </SwiperSlide>

          <SwiperSlide>
            <div className='bg-purple'></div>
          </SwiperSlide>

          <SwiperSlide>
            <div className='bg-purple'></div>
          </SwiperSlide>

        </Swiper>
      </div>


    </div>
  )
}

export default OurTopService