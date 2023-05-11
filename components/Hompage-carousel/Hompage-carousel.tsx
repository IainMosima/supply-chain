'use client'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper";
import ImageContainer from "./image-container";
import Image from "next/image";

import { Images } from "../../constants";
import "./Hompage-carousel.scss";



const HompageCarousel = () => {
  const imagesInfo = [
    {
      name: "carousel-1",
      caption: "Supply Chain Solutions Hub Limited is start up advisory and consulting firm that offers a one stop shop for all your supply chain needs. Our team of experts has a wealth of practical experience acquired over the years of practice which enables us to study a client’s operations to identify gaps and propose customised solutions in the areas of strategy, business processes, digitization and skills. As a partner with us, you are assured of enormous cost savings, efficiency and foresight of what the future holds.",
      image: Images.courosel4
    },
    {
      name: "carousel-2",
      caption: "Supply Chain Solutions Hub Limited is start up advisory and consulting firm that offers a one stop shop for all your supply chain needs. Our team of experts has a wealth of practical experience acquired over the years of practice which enables us to study a client’s operations to identify gaps and propose customised solutions in the areas of strategy, business processes, digitization and skills. As a partner with us, you are assured of enormous cost savings, efficiency and foresight of what the future holds.",
      image: Images.courosel3
    },
    {
      name: "carousel-3",
      caption: "Supply Chain Solutions Hub Limited is start up advisory and consulting firm that offers a one stop shop for all your supply chain needs. Our team of experts has a wealth of practical experience acquired over the years of practice which enables us to study a client’s operations to identify gaps and propose customised solutions in the areas of strategy, business processes, digitization and skills. As a partner with us, you are assured of enormous cost savings, efficiency and foresight of what the future holds.",
      image: Images.courosel1
    },
    {
      name: "carousel-4",
      caption: "Supply Chain Solutions Hub Limited is start up advisory and consulting firm that offers a one stop shop for all your supply chain needs. Our team of experts has a wealth of practical experience acquired over the years of practice which enables us to study a client’s operations to identify gaps and propose customised solutions in the areas of strategy, business processes, digitization and skills. As a partner with us, you are assured of enormous cost savings, efficiency and foresight of what the future holds.",
      image: Images.courosel2
    }


  ]
  return (
    <div className='w-full mt-[7rem]  h-5/6 border rounded-xl '>
      <Swiper
        modules={[Pagination, Autoplay]}
        className="mySwiper relative"
        autoplay={{ 
          delay: 8000,
          disableOnInteraction: false 
        }}
        >
          {/* <Image src={Images.next} alt={'next-icon'} className="sm:w-[10rem] w-[4rem] sm:h-[10rem] absolute bottom-[6rem] sm:bottom-[14rem] hidden sm:block z-20"/> */}

          {imagesInfo.map(info => (
              <SwiperSlide key={info.name} className="w-full">
                <ImageContainer name={info.name} caption={info.caption} image={info.image}/>
              </SwiperSlide>
          ))}
          
          {/* <div className="absolute z-20 bottom-1 bounce flex justify-center w-full ">
            <Image src={Images.downBlue} alt="down-blue" className="bounce w-[4rem] h-[4rem] sm:w-[8rem] sm:h-[8rem]"/>
          </div> */}
      </Swiper>
    </div>
  )
}

export default HompageCarousel;