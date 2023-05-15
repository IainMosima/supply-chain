"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination, Navigation, EffectCards } from "swiper";
import ImageContainer from "./image-container";
import Image from "next/image";
import { Images } from "../../constants";
import "./Hompage-carousel.scss";
import "swiper/css/navigation";
import "swiper/css/effect-cards";

const HompageCarousel = () => {
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
    <div className="w-full mt-[7rem] h-screen flex place-items-center">
      <div className="basis-1/2 place-self-center flex flex-col">
        <h3 className="text-3xl text-center font-bold text-purple">Who Are We</h3>

        <div className="flex place-items-center">
          <Image src={Images.next} alt="next-icon"/>
          <p>Supply Chain Solutions Hub Limited is start up advisory and consulting firm that offers a one stop shop for all your supply chain needs. Our team of experts has a wealth of practical experience acquired over the years of practice which enables us to study a client’s operations to identify gaps and propose customised solutions in the areas of strategy, business processes, digitization and skills. As a partner with us, you are assured of enormous cost savings, efficiency and foresight of what the future holds.</p>
        </div>
      </div>

      <div className="">
        
      </div>
    </div>
  );
};

export default HompageCarousel;
