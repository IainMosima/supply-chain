"use client";
import React, { useState } from "react";
import Link from "next/link";
import "./Navbar.scss";
import { motion } from "framer-motion";
import Image from "next/image";
import { Images } from "../../constants";

const links = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [hubsToggle, setHubsToggle] = useState(false);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [menuToggle, setMenuToggle] = useState(false);

  console.log(hubsToggle);
  return (
    <>
      <div className="hidden sm:flex sm:justify-evenly sm:gap-2 sm:place-items-center font-semibold text-center text-white">
        <Link
          href="/"
          className="hover:text-white px-2 py-2 rounded ease-in duration-150 hover:border-2 w-20 "
        >
          HOME
        </Link>

        <Link
          href="/services"
          className="hover:text-white px-2 py-2 rounded ease-in duration-150 hover:border-2 border-white w-[9rem]"
        >
          SERVICES
        </Link>

        <div
          className={`cursor-pointer relative px-2 py-2 rounded hover:text-white ease-in duration-150 hover:border-2 w-20 ${
            hubsToggle ? "text-white border-2 border-white" : ""
          }`}
          onClick={() => setHubsToggle((prev) => !prev)}
        >
          HUBS
          {hubsToggle && (
            <motion.div
              whileInView={{ y: [0, 10] }}
              transition={{ duration: 0.1, ease: "easeOut" }}
              className={`absolute z-1 translate-down z-30 bg-white text-black rounded p-3 w-[11rem] right-1 flex flex-col text-xs font-bold`}
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
                  className="py-2 px-3 hover:text-purple"
                >
                  {hub}
                </Link>
              ))}
            </motion.div>
          )}
        </div>

        <Link
          href="/contact-us"
          className="hover:text-white px-2 py-2 rounded ease-in duration-150 hover:border-2 border-white w-[9rem]"
        >
          CONTACT US
        </Link>
      </div>

      <div>
        <div className="sm:hidden">
          <Image
            src={Images.menu}
            width={40}
            height={40}
            alt="menu"
            className="w-auto h-auto"
            onClick={() => setMenuToggle((prev) => !prev)}
          />
        </div>
        <div className="sm:hidden w-[.9rem]">
          <div
            className={`flex flex-col absolute ease-out duration-300 ${
              menuToggle ? "translate-x-[-9rem]" : "translate-x-[9rem]"
            }  translate-y-[-7rem] pt-[7rem] bg-purple w-full pl-[2rem] h-[120rem] text-white`}
          >
            
            <Image src={Images.close} alt="close-icon" className="ml-[6rem] mb-[3rem]" onClick={()=>setMenuToggle(false)}/>
            <Link
              href="/"
              className="w-full px-2 py-2 rounded ease-in duration-150"
            >
              HOME
            </Link>

            <Link
              href="/services"
              className="hover:text-white px-2 py-2 rounded ease-in duration-150"
            >
              SERVICES
            </Link>

            <div
              className={`cursor-pointer px-2 ease-in duration-150`}
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
    </>
  );
};

export default links;
