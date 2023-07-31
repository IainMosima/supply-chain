'use client';
import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { Images } from "../../constants";
import Image from "next/image";
import { Country } from '@/models/Country';

interface CountriesProps {
  selectedCountry: Country,
  countries: Country[]
  setCountries: React.Dispatch<React.SetStateAction<Country[]>>,
}

const Countries = ({ selectedCountry, countries, setCountries }: CountriesProps) => {
  const [countryToggle, setCountryToggle] = useState(false);
  const [currentSelectedCountry, setCurrentSelectedCountry] = useState(selectedCountry);

  const handleCountryClick = (country: Country) => {
    setCountries((prev) => [
      { img: currentSelectedCountry.img, name: currentSelectedCountry.name },
      ...prev.filter((info) => info.name !== country.name)
    ]);
    setCurrentSelectedCountry(country);
  };

  return (
    <div
      className={`cursor-pointer flex h-[3rem] place-items-center sm:px-[4px] px-1 py-1 bg-purple rounded-lg text-white ${
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
            src={currentSelectedCountry.img}
            alt={currentSelectedCountry.name}
            width={20}
            height={15}
            className="w-auto h-auto"
          />
          <h2 className="ml-2">{currentSelectedCountry.name}</h2>
          <Image
            src={Images.dropDown}
            alt="drop-down"
            className="ml-1"
            height={15}
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
                onClick={() => handleCountryClick(country)}
              >
                <Image src={country.img} alt={country.name} width={20} height={15} className="w-auto h-auto" />
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
