"use client";
import Image, { StaticImageData } from "next/image";
import { Images } from "../../constants"
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
    <div className="w-full h-full">
        <Image src={serviceImg} alt={serviceName} className='w-full h-full object-cover relative'/>
        
        
        {/* <div className={`absolute top-[5rem] w-full flex flex-col place-items-center ${infoToggle ?  'translate-y-[10rem]': ''}`}>
          <h4 className="font-bold text-xl text-center">{serviceName}</h4>
          <button className={`py-2 mt-5 ease-out duration-200 font-sembold w-[10rem] bg-purple text-white rounded-full `} onClick={()=>setInfoToggle(prev => !prev)}>More Info</button>
        </div>

        <div className={`w-[25rem] absolute top-5 ${infoToggle ? '' : 'translate-y-[14rem]'}`}>
          <article className="w-[20rem] h-auto mx-auto rounded-2xl backdrop-blur-md bg-white/30 p-6  grid">
            <Image src={Images.closeDescription} alt='close-icon' className="justify-self-end cursor-pointer" onClick={()=>setInfoToggle(false)}/>
            <p className="text-sm text-center">{description}</p>
          </article>

        </div> */}
    </div>
  )
}

export default TopServiceCard;