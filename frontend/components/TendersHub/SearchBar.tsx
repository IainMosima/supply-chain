"use client";
import ConvertToTitleCase from '@/utils/ConvertToTitleCase';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { useState } from "react";
import { Images } from '../../constants';

interface SearchBarProps {
  country?: string,

}


const SearchBar = ({ country }: SearchBarProps) => {
  const [selectedLocation, setSelectedLocation] = useState('');
  const [showSearchBar, setshowSearchBar] = useState(true);
  const navigation = useRouter();


  function typedLocation(event: React.ChangeEvent<HTMLInputElement>) {
    setSelectedLocation(ConvertToTitleCase(event.target.value));
  }

  function handleKeyPress(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === 'Enter') {
      const searchButton = document.getElementById('searchButton') as HTMLButtonElement | null;
      if (searchButton) {
        searchButton.click();
        setshowSearchBar(false);
      }

    }
  }

  function handleOnClick() {
    if (selectedLocation.length > 0) {
      return navigation.push(`/tenders-hub/${country}?location=${selectedLocation}`);
    }
    return navigation.push(`/tenders-hub/${country}`);
  }

  return (
    <>
      {!showSearchBar ? (
        <div className="flex w-[22rem] mx-auto place-items-center gap-2 mt-3 cursor-pointer">
          <h2 className='text-lg font-semibold'>Showing results for: <span className='text-purple text-xl'>{selectedLocation}</span></h2>
          <button className='bg-purple p-1 px-2 font-bold rounded-md text-white' onClick={() => { setshowSearchBar(true); setSelectedLocation(''); navigation.push(`/tenders-hub/${country}`) }}>Change</button>
        </div>)
        : (
          <div className="flex w-[20rem] mx-auto place-items-center gap-2 mt-3 cursor-pointer">
            <input
              type='text'
              className='border-2 h-[2.3rem] p-5 w-[17rem] rounded-full outline-purple'
              placeholder='Search Location'
              onChange={typedLocation}
              onKeyDown={handleKeyPress}
            />
            <button
              id='searchButton'
              className='bg-purple rounded-full p-2'
              onClick={() => handleOnClick()}
            >
              <Image width={27} src={Images.searchIcon} alt='search icon' />
            </button>
          </div>
        )}

    </>
  )
}

export default SearchBar;
