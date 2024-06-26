import Image from "next/image";
import "./OurTopServices.scss";
import { Images } from "@/constants";

interface TopServiceCardProps {
  serviceName: string;
  description: string;
  serviceImgKey: string;
}

const TopServiceCard = ({
  serviceName,
  description,
  serviceImgKey,
}: TopServiceCardProps) => {
  return (
    <div className="group w-full h-full cursor-pointer">
      <div className="lg:p-3 md:p-0 translate-y-[4rem] ease-in duration-500 lg:group-hover:translate-y-[2rem]">
        <div className="relative object group-hover:transform ease-in-out duration-300 flex flex-col">
          <h4 className="font-extrabold sm:text-xl text-md text-center text-purple mt-[-2rem]">
            {serviceName}
          </h4>
          <Image
            src={`${process.env.SERVICESBUCKET}/${serviceImgKey}`}
            alt={serviceName}
            width={600}
            height={600}
            className="rounded-2xl"
          />
        </div>
      </div>

      <div className="absolute w-full bottom-[-1px] h-full dark-gradient ease-in-out duration-300'" />

      <div
        className={`absolute sm:ml-2 ml-3 top-[-3px] sm:top-[-60px] mb-5 h-[12rem] sm:w-[15rem] w-[10rem] flex flex-col justify-end`}
      >
        <div
          className={`w-[31rem] h-[15rem] absolute lg:translate-y-[36rem] translate-y-[22rem] md:translate-y-[24rem] lg:group-hover:translate-y-[23rem] ease-in duration-500`}
        >
          <article className="lg:w-[25rem] md:w-[22rem] w-[21rem] h-full mr-auto rounded-2xl backdrop-blur-md bg-white/30 sm:p-6 p-3 ">
            <p className="sm:text-[1.1rem] text-[14px] text-left ">
              {description}
            </p>
          </article>
        </div>
      </div>
    </div>
  );
};

export default TopServiceCard;
