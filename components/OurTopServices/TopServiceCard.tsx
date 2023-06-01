import Image, { StaticImageData } from "next/image";
import { Images } from "../../constants";
import { useState } from "react";
import "./OurTopServices.scss";

interface TopServiceCardProps {
  serviceName: string;
  description: string;
  serviceImg: StaticImageData;
}

const TopServiceCard = ({
  serviceName,
  description,
  serviceImg,
}: TopServiceCardProps) => {

  return (
    <div className="group w-full h-full cursor-pointer">
      <Image
        src={serviceImg}
        alt={serviceName}
        className="w-full h-full object-cover relative group-hover:transform sm:group-hover:scale-105 ease-in-out duration-300"
      />

      <div className="absolute w-full bottom-[-1px] h-full dark-gradient scale-105 ease-in-out duration-300'" />

      <div
        className={`absolute sm:ml-2 ml-1 top-[-3px] mb-5 h-[12rem] sm:w-[15rem] w-[5rem] flex flex-col justify-end`}
      >
        <h4 className="font-extrabold sm:text-xl text-md text-left text-white">
          {serviceName}
        </h4>

        <div className={`w-[30rem] h-[15rem] absolute lg:translate-y-[32rem] translate-y-[16rem] md:translate-y-[18rem] sm:group-hover:translate-y-[17rem] ease-in duration-500`}>
          <article className="lg:w-[20rem] md:w-[13.5rem] w-[10rem] h-full mr-auto rounded-2xl backdrop-blur-md bg-white/30 sm:p-6 p-3">
            <p className="sm:text-[1.1rem] text-[12px] text-left ">{description}</p>
          </article>

        </div>
      </div>


    </div>
  );
};

export default TopServiceCard;
