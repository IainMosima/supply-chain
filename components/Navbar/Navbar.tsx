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


  return (
    <>
      <nav className="w-full fixed flex justify-between z-50 p-4 place-items-center backdrop-blur-md bg-white/30">
        <div className="flex justify-start sm:basis-2/6 cursor-pointer">
          <Image
            src={Images.logo}
            width={40}
            height={40}
            alt="logo"
            className="w-auto h-auto sm:ml-5"
          />

          <h1 className="text-black font-extrabold text-sm">
            SUPPLY CHAIN
            <br className="leading-normal" />
            <span className="text-purple">SOLUTION HUB</span>
            <br className="leading-normal" />
            LIMITED
          </h1>
        </div>

        <div>
          <Countries />
        </div>

        <div className="sm:basis-2/5">
          <Links hubsToggle={hubsToggle} setHubsToggle={setHubsToggle}/>
        </div>

        <Image src={Images.menu} alt="menu-icon" className="sm:hidden" onClick={()=>setMenuToggle(true)}/>

      </nav>

      {/* mobile menu */}
      <div className="fixed z-[50] h-[120vh]">
        <div className="w-full h-full sm:hidden absolute">
        <div className={`w-[15rem] ml-auto  relative h-full`}>
            <div
              className={`flex flex-col ease-out duration-300 translate-y-[-7rem] pt-[10rem] bg-purple w-full pl-[2rem] h-full text-white ${menuToggle ? 'translate-x-[11rem]' : 'translate-x-[26rem]'}`}
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
      </div>
    </>
  );
};

export default Navbar;
