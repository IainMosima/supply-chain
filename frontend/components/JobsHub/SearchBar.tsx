"use client";
import Image from 'next/image';
import { Images } from '../../constants';
import { Services } from '@/models/Services';
import searchNames from '../../utils/searchFunction';
import IndexItemFetcher from '../../utils/IndexItemFetcher';
import React, { useState } from "react";
import ConvertToTitleCase from '@/utils/ConvertToTitleCase';
import { useRouter } from 'next/navigation';




const SearchBar = () => {
  const [location, setLocation] = useState('');
  const navigation = useRouter();

  function typedLocation(event: React.ChangeEvent<HTMLInputElement>) {
    setLocation(ConvertToTitleCase(event.target.value));
  }

  function handleKeyPress(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === 'Enter') {
      const searchButton = document.getElementById('searchButton') as HTMLButtonElement | null;
      if (searchButton) {
        searchButton.click();
      }

    }
  }
  
  function handleOnClick() {
    console.log('searching...');
    // return navigation.push('/');
  }
  return (
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
        onClick={()=>handleOnClick()}
      >
        <Image width={27} src={Images.searchIcon} alt='search icon'/>
      </button>
    </div>
  )
}

export default SearchBar;
