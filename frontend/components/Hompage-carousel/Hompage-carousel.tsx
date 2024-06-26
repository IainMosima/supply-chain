"use client";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/navigation";

import { Autoplay, EffectCards, Navigation } from "swiper";

import { Carousel } from "@/models/Carousel";
import { motion } from "framer-motion";
import Image from "next/image";
import { Images } from "../../constants";
import Loading from "../Loading/Loading";
import "./Hompage-carousel.scss";
import NavigationButtons from "./NavigationButtons";

interface HompageCarouselProps {
  imagesInfo: Carousel[] | []
}
const HompageCarousel = ({ imagesInfo }: HompageCarouselProps) => {
  return (
    <div className="w-full h-5/6 flex mt-5 flex-col md:flex-col mb-[2rem] lg:flex-row sm:place-items-center gap-6 px-5">
      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="place-self-center flex flex-col basis-1/2"
      >
        <h3 className="text-3xl text-center font-bold text-purple">
          Who Are We
        </h3>

        <div className="flex place-items-center">
          <p className="sm:text-left text-center px-2 text-[17px] leading-6">{`
           Supply Chain Solutions Hub Limited is a start-up advisory and consulting firm that offers a one-stop shop for all your supply chain needs. Our team of experts has a wealth of practical experience acquired over years of practice which enables us to study a client’s operations to identify gaps and propose customized solutions in the areas of strategy, business processes, digitization, and skills. As a partner with us, you are assured of enormous cost savings, efficiency, and foresight to what the future holds.
          `}</p>
        </div>
      </motion.div>

      <div className="basis-1/2 w-full flex flex-col sm:ml-8 justify-center place-items-center gap-1">
        {imagesInfo.length > 0 ? (
          <Swiper
            effect={"cards"}
            grabCursor={true}
            rewind={true}
            modules={[Autoplay, EffectCards, Navigation]}
            className="sm:w-[40rem] w-[20rem] rounded-3xl swiper3"
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }} slidesPerView={1} spaceBetween={0}          >
            {imagesInfo.map((image, index) => (
              <SwiperSlide key={index}>
                {process.env.ENVIRONMENT === "development" ? (
                  <div className="border-2 border-black card rounded-3xl">
                    <Image
                      src={Images.courosel1}
                      alt={image.imageName}
                      width={600}
                      height={400}
                      className="rounded-3xl basis-4 object-cover"
                    />
                  </div>
                ) : (
                  <div className="border-2 border-black card rounded-3xl">
                    <Image
                      src={`${process.env.CAROUSELBUCKET}/${image.imageKey}`}
                      alt={image.imageName}
                      width={600}
                      height={400}
                      className="rounded-3xl basis-4 bg-contain"
                    />
                  </div>
                )}
              </SwiperSlide>
            ))}
            <NavigationButtons />
          </Swiper>
        ) : (
          <Loading />
        )}
      </div>
    </div>
  );
};

export default HompageCarousel;