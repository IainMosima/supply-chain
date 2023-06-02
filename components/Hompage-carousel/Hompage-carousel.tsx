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

const HompageCarousel = () => {
  const swiper = useSwiper();
  const imagesInfo = [
    {
      name: "carousel-1",
      image: Images.courosel4,
    },
    {
      name: "carousel-2",
      image: Images.courosel3,
    },
    {
      name: "carousel-3",
      image: Images.courosel1,
    },
    {
      name: "carousel-4",
      image: Images.courosel2,
    },
  ];
  return (
    <div className="w-full h-5/6 flex flex-col md:flex-col mb-[4rem] lg:flex-row sm:place-items-center gap-6">
      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="basis-1/2 place-self-center flex flex-col"
      >
        <h3 className="text-3xl text-center font-bold text-purple">
          Who Are We
        </h3>

        <div className="flex place-items-center">
          <Image
            src={Images.next}
            alt="next-icon"
            className="hidden sm:block md:block"
          />
          <p className="sm:text-left text-center px-2">{`
           Supply Chain Solutions Hub Limited is a start-up advisory and consulting firm that offers a one-stop shop for all your supply chain needs. Our team of experts has a wealth of practical experience acquired over years of practice which enables us to study a client’s operations to identify gaps and propose customized solutions in the areas of strategy, business processes, digitization, and skills. As a partner with us, you are assured of enormous cost savings, efficiency, and foresight to what the future holds.
          `}</p>
        </div>
      </motion.div>

      <div className="basis-1/2 w-full flex flex-col sm:ml-8 place-items-center gap-1">
        <Swiper
          effect={"cards"}
          grabCursor={true}
          modules={[Autoplay, EffectCards, Navigation]}
          // navigation={true}
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
                  src={image.image}
                  alt={image.name}
                  className="object-fill w-full h-full rounded-3xl basis-4"
                />
              </div>
            </SwiperSlide>
          ))}
         <NavigationButtons/>
        </Swiper>
        
      </div>
    </div>
  );
};

export default HompageCarousel;
