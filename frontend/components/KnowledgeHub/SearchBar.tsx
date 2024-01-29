import Image from 'next/image';
import { Images } from '../../constants';
import { Services } from '@/models/Services';
import searchNames from '../../utils/searchFunction';
import IndexItemFetcher from '../../utils/IndexItemFetcher';
import React from "react";

// interface searchBarProps {
//   services: Services[],
//   results: Services[],
//   setResults: React.Dispatch<React.SetStateAction<Services[] | []>>,
//   setSearchValue: React.Dispatch<React.SetStateAction<any>>
// }

// const SearchBar = ({services, setResults, setSearchValue}: searchBarProps) => {

const SearchBar = () => {
  // function searchHandler(event: React.ChangeEvent<HTMLInputElement>) {
  //   const value = event.target.value;
  //   const names = services.map((value)=>value.serviceName);
  //   const resultIndex = searchNames(names, value);
  //   const result = IndexItemFetcher(resultIndex, services);
    
  //   setSearchValue(value);
  //   setResults(result);
  // }

  return (
    <div className="flex w-[20rem] mx-auto place-items-center gap-2 mt-3 cursor-pointer">
     <input type='text' className='border-2 h-[2.3rem] p-5 w-[17rem] rounded-full outline-purple' placeholder='Search Topic or Blog'/> 
     {/* <input type='text' className='border-2 h-[2.3rem] p-5 w-[17rem] rounded-full outline-purple' placeholder='Search Topic or Blog' onChange={searchHandler}/>  */}
     <div className='bg-purple rounded-full p-2'>
        <Image width={27} src={Images.searchIcon} alt='search icon'/>
     </div>
    </div>
  )
}

export default SearchBar;