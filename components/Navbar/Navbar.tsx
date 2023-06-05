'use client';
import Image from "next/image";
import "./Navbar.scss";
import { Images } from "../../constants";
import Link from "next/link";
import Links from "./Links";
import Countries from "./Countries";
import { useState } from "react";

const Navbar = () => {
  const [hubsToggle, setHubsToggle] = useState(false);
  const [menuToggle, setMenuToggle] = useState(false);

  console.log(menuToggle);
  return (
    <>
      <nav className="w-full fixed flex gap-1 lg:justify-between place-content-between z-50 p-4 place-items-center backdrop-blur-md bg-white/30">
        <div className="flex justify-start lg:basis-2/6 ">
          <Image
            src={Images.logo}
            alt="logo"
            height={100}
            className="sm:ml-5 cursor-pointer"
          />
        </div>

        
        <Countries />
        

        <div className="lg:basis-1/3">
          <Links hubsToggle={hubsToggle} setHubsToggle={setHubsToggle}/>
        </div>

        <div>
          <div className="bg-purple w-[3rem] md:w-[3.7rem] h-[2.3rem] md:h-[3.7rem] p-2 lg:hidden ml-2 rounded-full flex flex-col md:gap-[4px] gap-1 justify-center place-items-center" onClick={()=>setMenuToggle(true)}>
            {/* <Image src={Images.menu} width={37} alt="menu-icon" className=""*/}
            <span className="w-[1rem] md:w-[1.5rem] md:h-[0.2rem] h-[0.15rem] bg-white"></span>
            <span className="w-[1rem] md:w-[1.5rem] md:h-[0.3rem] h-[0.15rem] bg-white"></span>
            <span className="w-[1rem] md:w-[1.5rem] md:h-[0.2rem] h-[0.15rem] bg-white"></span>
          </div>
        </div>



      
      </nav>

      <marquee className='text-purple absolute lg:top-[8rem] md:top-[8rem] top-[6.8rem] italic text-sm sm:text-md font-extrabold'>Your Trusted Supply Chain Solutions Partner</marquee>

      {/* mobile menu */}
      {/* <div className="fixed z-[50] h-[120vh]">
        <div className="w-full h-full lg:hidden absolute">
        <div className={`w-[15rem] ml-auto  relative h-full`}>
            <div
              className={`flex flex-col ease-out duration-300 translate-y-[-7rem] pt-[10rem] bg-purple w-full pl-[2rem] h-full text-white ${menuToggle ? 'translate-x-[11rem] md:translate-x-[36rem]' : 'translate-x-[26rem] md:translate-x-[52rem]'}`}
            >
              <Image src={Images.close} alt="close-icon" className="ml-[7.5rem] mb-[3rem]" onClick={()=>setMenuToggle(false)}/>

              <Link
                href="/"
                className="w-full px-2 py-2 rounded ease-in duration-150 mb-[2rem]"
              >
                HOME
              </Link>

              <Link
                href="/services"
                className="hover:text-white px-2 py-2 rounded ease-in duration-150 mb-[2rem]"
              >
                SERVICES
              </Link>

              <div
                className={`cursor-pointer px-2 ease-in mb-[2rem]`}
                onClick={() => setHubsToggle((prev) => !prev)}
              >
                <span>HUBS</span>
                {hubsToggle && (
                  <div className={`translate-down rounded w-[11rem] flex flex-col text-xs font-normal mb-6`}>
                    {[
                      "KNOWLEDGE HUB",
                      "BUYERS HUB",
                      "CREDITORS HUB",
                      "INVESTORS HUB",
                      "TENDER HUB",
                      "JOBS HUB",
                    ].map((hub) => (
                      <Link
                        href={hub.toLowerCase().replace(" ", "-")}
                        key={hub}
                        className="px-1 pb-5"
                      >
                        {hub}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link
                href="/contact-us"
                className="hover:text-white px-2 py-2 rounded ease-in duration-150"
              >
                CONTACT US
              </Link>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default Navbar;
