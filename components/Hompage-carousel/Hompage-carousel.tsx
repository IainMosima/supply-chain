'use client'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper";
import ImageContainer from "./image-container";


import { Images } from "../../constants"


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
    <div className=''>
        <Swiper
            
            modules={[Pagination, Autoplay]}
            className="mySwiper"
            autoplay={{ 
                delay: 3000,
                disableOnInteraction: false 
            }}
        >
          {imagesInfo.map(info => (
              <SwiperSlide key={info.name} className="w-full">
                <ImageContainer name={info.name} caption={info.caption} image={info.image}/>
              </SwiperSlide>
          ))}
        </Swiper>
    </div>
  )
}

export default HompageCarousel;