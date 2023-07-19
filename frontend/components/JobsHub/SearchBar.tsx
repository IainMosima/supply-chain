"use client";
import Image from 'next/image';
import { Images } from '../../constants';
import { Services } from '@/models/Services';
import searchNames from '../../utils/searchFunction';
import IndexItemFetcher from '../../utils/IndexItemFetcher';
import React, { useState } from "react";



const SearchBar = () => {
  const [Location, setLocation] = useState('');
  function typedLocation(event: React.ChangeEvent<HTMLInputElement>) {
    setLocation(event.target.value);

  }

  return (
    <div className="flex w-[20rem] mx-auto place-items-center gap-2 mt-3 cursor-pointer">
     <input type='text' className='border-2 h-[2.3rem] p-5 w-[17rem] rounded-full outline-purple' placeholder='Search Location' onChange={typedLocation}/>
     <button className='bg-purple rounded-full p-2'>
        <Image width={27} src={Images.searchIcon} alt='search icon'/>
     </button>
    </div>
  )
}

export default SearchBar;