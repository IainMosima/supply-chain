"use client";
import Image, { StaticImageData } from "next/image";
import { useState } from "react";
import './OurTopServices.scss';

interface TopServiceCardProps {
  serviceName: string,
  description: string,
  serviceImg: StaticImageData
}

const TopServiceCard = ({serviceName, description, serviceImg}: TopServiceCardProps) => {
  const [infoToggle, setInfoToggle] = useState(false);


  return (
    <div className="w-full">
        <Image src={serviceImg} alt={serviceName} className='object-fill opacity-90 relative'/>
        
        
        <div className="absolute top-[8rem] w-full flex flex-col place-items-center">
          <h4>{serviceName}</h4>
          <button className="py-2 font-sembold w-[10rem] bg-purple text-white rounded-full" onClick={()=>setInfoToggle(prev => !prev)}>More Info</button>
        </div>

        <div className="w-full bottom-[5rem] absolute">
          <article className="bg-black w-[10rem] h-[4rem]"></article>

        </div>
    </div>
  )
}

export default TopServiceCard;