"use client";
import Image from "next/image";
import "./Navbar.scss";
import { Images } from "../../constants";
import Link from "next/link";
import Links from "./Links";
import Countries from "./Countries";
import { useState } from "react";
import { useRouter } from 'next/navigation'

const Navbar = () => {
  const [hubsToggle, setHubsToggle] = useState(false);
  const [menuToggle, setMenuToggle] = useState(false);
  const router = useRouter();

  function toggleHandler(option?: string) {
    switch (option) {
      case "hubs":
        setMenuToggle(prev => !prev);
        setHubsToggle(false);

        break;

      case "link":
        setMenuToggle(prev => !prev);
        setHubsToggle(false);
        break;

      default:
        setMenuToggle(false);
        setHubsToggle(false);

        break;
    }
  }

  return (
    <>
      <nav className="w-full fixed flex gap-1 justify-evenly sm:justify-between place-content-between z-50 p-4 place-items-center backdrop-blur-md bg-white/30">
        <div className="flex lg:basis-[30%]">
          <Image
            src={Images.logo}
            alt="logo"
            height={100}
            className="sm:ml-5 cursor-pointer"
            onClick={() => router.push('/')}
          />
        </div>

        <div className="">
          <Countries />
        </div>

        <div className="">
          <Links hubsToggle={hubsToggle} setHubsToggle={setHubsToggle} />
        </div>

        <div className="relative lg:hidden basis-[4rem]">
          <div
            className="bg-purple w-[3rem] md:w-[3.7rem] h-[2.8rem] md:h-[3.7rem] p-2 lg:hidden rounded-full flex flex-col md:gap-[4px] gap-1 justify-center place-items-center z-20 absolute top-[-1.5rem]"
            onClick={() => setMenuToggle((prev) => !prev)}
          >
            <span
              className={`w-[1.2rem] md:w-[1.5rem] md:h-[0.2rem] h-[2px] ease-linear duration-300 bg-white ${
                menuToggle ? "rotate-45 w-[2.4rem] md:w-[3rem] translate-x-[-.1px]" : "rotate-0"
              }`}
            ></span>
            <span
              className={`w-[1.2rem] md:w-[1.5rem] md:h-[0.2rem] h-[2px] ease-linear duration-300 bg-white ${
                menuToggle ? "hidden" : "inline-block"
              }`}
            ></span>
            <span
              className={`w-[1.2rem] md:w-[1.5rem] md:h-[0.2rem] h-[2px] ease-linear duration-300 bg-white ${
                menuToggle ? "-rotate-[50deg] w-[2.4rem] md:w-[3rem] translate-y-[-.5rem]" : "rotate-0"
              }`}
            ></span>
          </div>
          <div
            className={`absolute flex flex-col ease-out duration-300 z-10 pt-[7rem] bg-purple w-[19rem] pl-[2rem] h-[120vh] top-[-5rem] text-white ${
              menuToggle ? "translate-x-[-12rem]" : "translate-x-[12rem]"
            }`}
          >
            <Link
              href="/"
              className="w-full px-2 py-2 rounded ease-in duration-150 mb-[2rem]"
              onClick={()=>toggleHandler('link')}
            >
              HOME
            </Link>

            <Link
              href="/services"
              className="hover:text-white px-2 py-2 rounded ease-in duration-150 mb-[2rem]"
              onClick={()=>toggleHandler('link')}
            >
              SERVICES
            </Link>

            <div
              className={`cursor-pointer px-2 ease-in mb-[2rem]`}
              onClick={()=>setHubsToggle(prev => !prev)}
            >
              <span>HUBS</span>
              {hubsToggle && (
                <div
                  className={`translate-down rounded w-[11rem] flex flex-col text-xs font-normal mb-6`}
                >
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
                      onClick={()=>toggleHandler('hub')}
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
              onClick={()=>toggleHandler('link')}
            >
              CONTACT US
            </Link>
          </div>
        </div>
      </nav>

      <marquee className="text-purple absolute lg:top-[8rem] md:top-[8rem] top-[6.8rem] italic text-sm font-extrabold">
        Your Trusted Supply Chain Solutions Partner
      </marquee>
    </>
  );
};

export default Navbar;
