import React, { ReactNode } from "react";
import { useSwiper } from "swiper/react";
import { Images } from "@/constants";
import Image from "next/image";



const NavigationButtons = () => {
  const swiper = useSwiper();

  return (
    <>
      <Image
        src={Images.nextIcon}
        width={30}
        alt="previous-icon"
        className="rotate-180 cursor-pointer absolute top-[13rem] z-50 left-[.5rem]"
        onClick={() => swiper.slidePrev()}
      />
      <Image
        src={Images.nextIcon}
        width={30}
        alt="previous-icon"
        className="cursor-pointer absolute top-[13rem] z-50 right-[.5rem]"
        onClick={() => swiper.slideNext()}
      />
    </>
  );
};

export default NavigationButtons;
