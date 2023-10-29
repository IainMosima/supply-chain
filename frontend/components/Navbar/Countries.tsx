'use client';
import { useAppDispatch, useAppSelector } from '@/hooks/reduxHook';
import { Country } from '@/models/Country';
import { setSelectedCountry } from '@/redux/reducers/countryReducer';
import Image from "next/image";
import { useState } from 'react';
import { Images } from "../../constants";
import { usePathname, useRouter } from 'next/navigation';

interface CountriesProps {
  countries: Country[]
}

const Countries = ({ countries }: CountriesProps) => {
  const [countryToggle, setCountryToggle] = useState(false);
  const currentSelectedCountry = useAppSelector(state => state.selectedCountry.selectedCountry) || countries.filter(item => item.countryName === process.env.DEFAULT_COUNTRY)[0];
  const pathname = usePathname();
  const dispatch = useAppDispatch();
  const navigator = useRouter();

  const handleCountryClick = (country: Country) => {
    const splittedPath = pathname.split('/');
    if (splittedPath[1] === 'tenders-hub' || splittedPath[1] === 'jobs-hub') {
      splittedPath[2] = country.countryName
      navigator.push(splittedPath.join('/'));
    }
    dispatch(setSelectedCountry(country));
  };

  return (
    <div
      className={`cursor-pointer flex h-[3rem] place-items-center sm:px-[4px] px-1 py-1 bg-purple rounded-lg text-white ${countryToggle ? 'bg-white' : ''
        }`}
      onClick={() => setCountryToggle((prev) => !prev)}
    >
      <div
        className={`text-sm sm:text-base w-[7rem] sm:w-[10rem] relative ${countryToggle ? 'bg-white text-black' : ''
          }`}
      >
        <div className="flex items-center justify-center">
          <Image
            src={`${process.env.COUNTRIESBUCKET}/${currentSelectedCountry?.countryKey}`}
            alt={currentSelectedCountry?.countryName || ''}
            width={20}
            height={15}
            className="w-auto h-auto"
          />
          <h2 className="ml-2">{currentSelectedCountry?.countryName || ''}</h2>
          <Image
            src={Images.dropDown}
            alt="drop-down"
            className="ml-1"
            height={15}
          />
        </div>

        {countryToggle && (
          <div
            className={`absolute z-30 translate-down bg-purple text-white rounded p-2 flex flex-col text-xs font-normal w-[7rem] sm:w-[10rem] ${countryToggle ? 'translate-down' : ''
              }`}
          >
            {countries.map((country) => (
              <div
                className="flex items-center text-sm sm:text-base py-1"
                key={country.countryName}
                onClick={() => handleCountryClick(country)}
              >
                <Image src={`${process.env.COUNTRIESBUCKET}/${country.countryKey}`} alt={country.countryName} width={20} height={15} className="w-auto h-auto" />
                <h2 className="ml-2">{country.countryName}</h2>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Countries;
