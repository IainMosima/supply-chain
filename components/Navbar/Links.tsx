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

  console.log(menuToggle);
  return (
    <>
      <div className="hidden sm:flex sm:justify-evenly sm:gap-2 sm:place-items-center font-semibold text-center text-white">
        <div>
          
        </div>
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
          className="hover:text-white px-2 py-2 rounded ease-in duration-150 hover:border-2 border-white w-[9rem] "
        >
          CONTACT US
        </Link>

        
      </div>

      
    </>
  );
};

export default links;
