'use client';
import Image from 'next/image';
import { Images } from '../../constants';
import { Services } from '@/models/Services';
import searchNames from '../../utils/searchFunction';
import IndexItemFetcher from '../../utils/IndexItemFetcher';
import React, { useState } from "react";



const SearchBar = () => {
  const [location, setLocation] = useState('');
  function writeLocation(event: React.ChangeEvent<HTMLInputElement>) {
    
  }

  return (
    <div className="flex w-[20rem] mx-auto place-items-center gap-2 mt-3 cursor-pointer">
     <input type='text' className='border-2 h-[2.3rem] p-5 w-[17rem] rounded-full outline-purple' placeholder='Search for a service' onChange={writeLocation}/> 
     <div className='bg-purple rounded-full p-2'>
        <Image width={33} src={Images.searchIcon} alt='search icon'/>
     </div>
    </div>
  )
}

export default SearchBar;