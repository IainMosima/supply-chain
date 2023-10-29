"use client";
import { TenderResult } from '@/models/Tenders';
import { getTendersResults } from '@/network/Tenders';
import ConvertToTitleCase from '@/utils/ConvertToTitleCase';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { useState } from "react";
import { Images } from '../../constants';

interface SearchBarProps {
  country: string | undefined,
  currentLocation: string,
  setResults: React.Dispatch<React.SetStateAction<TenderResult|null>>,
  intialResults?: TenderResult,
  setSelectedLocation: React.Dispatch<React.SetStateAction<string>>,
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>,
}


const SearchBar = ({ country, currentLocation, setResults, intialResults, setSelectedLocation, setIsLoading }: SearchBarProps) => {
  const [typingLocation, setTypingLoaction] = useState(currentLocation);
  const [showSearchBar, setshowSearchBar] = useState(!currentLocation ? true : false);
  const navigation = useRouter();


  function typedLocation(event: React.ChangeEvent<HTMLInputElement>) {
    setTypingLoaction(ConvertToTitleCase(event.target.value));
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

  async function handleOnClick() {
    setSelectedLocation(typingLocation);
    setshowSearchBar(false);
    // if (typingLocation.length > 0) {
    //   setIsLoading(true);
    //   setResults(null);
    //   try {
    //     const res = await getTendersResults(country, 1, typingLocation);
    //     if (res && res.tenders.length > 0) {
    //       setResults(res);
    //     } else {
    //       setResults(null);
    //     }
    //     setIsLoading(false);
    //   } catch (error) {
    //     alert('Refresh the page to get Tenders Information');

    //   }
    //   return navigation.push(`/tenders-hub/${country}?location=${typingLocation}`);
    // }
    // return navigation.push(`/tenders-hub/${country}`);
  }

  return (
    <>
      {!showSearchBar ? (
        <div className="flex w-[22rem] mx-auto place-items-center gap-2 mt-3 cursor-pointer">
          <h2 className='text-lg font-semibold'>Showing results for: <span className='text-purple text-xl'>{typingLocation}</span></h2>
          <button className='bg-purple p-1 px-2 font-bold rounded-md text-white' onClick={() => { setshowSearchBar(true); setTypingLoaction(''); setSelectedLocation(''); setResults(intialResults || null); navigation.push(`/tenders-hub/${country}`) }}>Change</button>
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
              className='bg-purple rounded-full p-2 cursor-pointer'
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
