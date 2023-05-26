import Image from 'next/image';
import { Images } from '../../constants';
import { Services } from '@/models/Services';
import React from "react";

interface searchBarProps {
  results: Services[],
  setResults: React.Dispatch<React.SetStateAction<Services[] | []>>
}

const SearchBar = ({results, setResults}: searchBarProps) => {
  return (
    <div className="flex w-[20rem] mx-auto place-items-center gap-2 mt-3 cursor-pointer">
     <input type='text' className='border-2 h-[2.3rem] p-5 rounded-full outline-purple' placeholder='Search for a service' /> 
     <div className='bg-purple rounded-full p-2'>
        <Image width={33} src={Images.searchIcon} alt='search icon'/>
     </div>
    </div>
  )
}

export default SearchBar