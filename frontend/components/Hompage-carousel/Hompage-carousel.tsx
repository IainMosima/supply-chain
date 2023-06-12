"use client";

import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/navigation";

import { EffectCards, Autoplay, Navigation } from "swiper";

import Image from "next/image";
import { Images } from "../../constants";
import "./Hompage-carousel.scss";
import { motion } from "framer-motion";
import NavigationButtons from "./NavigationButtons";
import { Carousel } from "@/models/Carousel";
import { useEffect, useState } from "react";
import { getCarouselImages } from "@/network/Carousel";
import Loading from "../Loading/Loading";

const HompageCarousel = () => {
  const [imagesInfo, setImagesInfo] = useState<Carousel[]>([]);
  useEffect(() => {
    async function fetchCarouselImages() {
      getCarouselImages().then((res) => setImagesInfo(res));
    }
    fetchCarouselImages();
  }, []);
  console.log(imagesInfo);
  
  return (
    <div className="w-full h-5/6 flex mt-5 flex-col md:flex-col mb-[4rem] lg:flex-row sm:place-items-center gap-6">
      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="basis-1/2 place-self-center flex flex-col"
      >
        <h3 className="text-3xl text-center font-bold text-purple">
          Who Are We
        </h3>

        <div className="flex place-items-center">
          {/* <Image
            src={Images.next}
            alt="next-icon"
            height={70}
            className="hidden sm:block md:block"
          /> */}
          <p className="sm:text-left text-center px-2 text-[17px] leading-6">{`
           Supply Chain Solutions Hub Limited is a start-up advisory and consulting firm that offers a one-stop shop for all your supply chain needs. Our team of experts has a wealth of practical experience acquired over years of practice which enables us to study a client’s operations to identify gaps and propose customized solutions in the areas of strategy, business processes, digitization, and skills. As a partner with us, you are assured of enormous cost savings, efficiency, and foresight to what the future holds.
          `}</p>
        </div>
      </motion.div>

      <div className="basis-1/2 w-full flex flex-col sm:ml-8 place-items-center gap-1">
        {imagesInfo.length > 0 ? (
          <Swiper
          effect={"cards"}
          grabCursor={true}
          rewind={true}
          modules={[Autoplay, EffectCards, Navigation]}
          className="sm:w-[40rem] w-[20rem] rounded-3xl"
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
        >
          {imagesInfo.map((image, index) => (
            <SwiperSlide key={index}>
              <div className="w-full h-[20rem] rounded-3xl">
                <Image
                  src={`${process.env.CAROUSELBUCKET}/${image.imageKey}`}
                  alt={image.imageName}
                  width={800}
                  height={600}
                  className="object-fill w-full h-full rounded-3xl basis-4"
                />
              </div>
            </SwiperSlide>
          ))}
         <NavigationButtons/>
        </Swiper>
        ) : (
          <Loading/>
        )}
        
        
      </div>
    </div>
  );
};

export default HompageCarousel;
