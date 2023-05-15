"use client";
import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { Images } from "../../constants";
import Image from "next/image";

const Countries = () => {
  const [countryToggle, setCountryToggle] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState({
    img: Images.kenya,
    name: 'Kenya'
  });

  const [countries, setCountries] = useState([
    {
      img: Images.tanzania,
      name: 'Tanzania'
    },
    {
      img: Images.uganda,
      name: 'Uganda'
    },
    {
      img: Images.rwanda,
      name: 'Rwanda'
    },
    {
      img: Images.burundi,
      name: 'Burundi'
    }
  ]);

  return (
    <div
      className={`cursor-pointer px-1 py-1 bg-purple rounded-lg text-white ${
        countryToggle ? 'bg-white' : ''
      }`}
      onClick={() => setCountryToggle((prev) => !prev)}
    >
      <div
        className={`text-sm sm:text-base w-[7rem] sm:w-[10rem] relative ${
          countryToggle ? 'bg-white text-black' : ''
        }`}
      >
        <div className="flex items-center justify-center">
          <Image
            src={selectedCountry.img}
            alt={selectedCountry.name}
            width={20}
            height={15}
            className="w-auto h-auto"
          />
          <h2 className="ml-2">{selectedCountry.name}</h2>
          <Image
            src={Images.dropDown}
            alt="drop-down"
            className="mt-1 ml-1 w-auto h-auto"
          />
        </div>

          {countryToggle && (
          <div
            className={`absolute z-30 translate-down bg-purple text-white rounded p-2 flex flex-col text-xs font-normal w-[7rem] sm:w-[10rem] ${
              countryToggle ? 'translate-down' : ''
            }`}
          >
            {countries.map((country) => (
              <div
                className="flex items-center text-sm sm:text-base py-1"
                key={country.name}
                onClick={() => {
                  setCountries((prev) => [
                    { img: selectedCountry.img, name: selectedCountry.name },
                    ...prev.filter((info) => info.name !== country.name)
                  ]);
                  setSelectedCountry(country);
                }}
              >
                <Image src={country.img} alt={country.name} width={20} height={15} className="w-auto h-auto"/>
                <h2 className="ml-2">{country.name}</h2>
              </div>
            ))}
          </div>
        )}
      </div>

      
    </div>
  );
};

export default Countries;
