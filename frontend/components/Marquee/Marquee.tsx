"use client";
import React, { useState } from "react";

const Marquee = () => {
  const [marqueeHovered, setMarqueeHovered] = useState(false);

  const handleMarqueeEnter = () => {
    setMarqueeHovered(true);
  };

  const handleMarqueeLeave = () => {
    setMarqueeHovered(false);
  };
  return (
    <>
    <marquee
      className={`text-purple italic text-sm font-extrabold lg:mt-[5.3rem] md:mt-[9rem] mt-[5rem] ${
        marqueeHovered ? "paused" : ""
      }`}
      onMouseEnter={handleMarqueeEnter}
      onMouseLeave={handleMarqueeLeave}
    >
      Your Trusted Supply Chain Solutions Partner
    </marquee>
    </>
  );
};

export default Marquee;
