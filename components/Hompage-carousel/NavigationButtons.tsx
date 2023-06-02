import React, { ReactNode } from "react";
import { useSwiper } from "swiper/react";
import { Images } from "@/constants";
import Image from "next/image";

const NavigationButtons = () => {
  const swiper = useSwiper();

  return (
    <div className="flex gap-1 text-white font-bold justify-center mt-1">
      <button className="bg-purple  w-[4rem] rounded-full p-1 cursor-pointer" onClick={() => swiper.slidePrev()}>
        Prev
      </button>
      <button className="bg-purple w-[4rem] rounded-full p-1 cursor-pointer" onClick={() => swiper.slideNext()}>
        Next
      </button>
    </div>
  );
};

export default NavigationButtons;
