"use client";

import Image from 'next/image';
import { Images } from '../../constants';
import SearchBar from './SearchBar';
import { useState } from 'react';
import { Services } from '@/models/Services';
import NoResults from '../NoResults/NoResults';

const Services = () => {
  const list = [
    {
      serviceName: 'Supplier prequalification',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim sed faucibus turpis in eu. Nulla facilisi morbi tempus iaculis urna id.',
      serviceImg: Images.serviceMan
    },
    {
      serviceName: 'Spend analysis and category management',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim sed faucibus turpis in eu. Nulla facilisi morbi tempus iaculis urna id.',
      serviceImg: Images.serviceWoman
    },
    {
      serviceName: 'Procurement processes and policies review and re-engineering',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim sed faucibus turpis in eu. Nulla facilisi morbi tempus iaculis urna id.',
      serviceImg: Images.serviceMan
    },
    {
      serviceName: 'Supplier prequalification',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim sed faucibus turpis in eu. Nulla facilisi morbi tempus iaculis urna id.',
      serviceImg: Images.serviceWoman
    },
    {
      serviceName: 'Supplier prequalification',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim sed faucibus turpis in eu. Nulla facilisi morbi tempus iaculis urna id.',
      serviceImg: Images.serviceMan
    },
    {
      serviceName: 'Supplier prequalification',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim sed faucibus turpis in eu. Nulla facilisi morbi tempus iaculis urna id.',
      serviceImg: Images.serviceWoman
    },
    {
      serviceName: 'Supplier prequalification',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim sed faucibus turpis in eu. Nulla facilisi morbi tempus iaculis urna id.',
      serviceImg: Images.serviceMan
    },
  ]

  const [searchValue, setSearchValue] = useState('');
  const [results, setResults] = useState<Services[]>(list || []);
  return (
    <div className='lg:mt-[9rem] md:mt-[9rem] mt-[7.4rem] mb-[2rem] flex flex-col'>
        <h2 className='font-semibold text-xl text-center text-purple'>All Our Services</h2>
        <div className='w-[1.5rem] h-[.2rem] bg-purple mx-auto'/>
        <div className='justify-self-center'>
          <SearchBar services={list} results={results} setResults={setResults} setSearchValue={setSearchValue}/>
        </div>

        {results.length > 0 ? (
          <div className='grid lg:grid-cols-4 grid-cols-2 md:grid-cols-3 sm:gap-5 md:gap-1 gap-1 mt-[2rem]'>
          {results.map((result, index) => 
            <div key={index} className='border-2 h-[30rem] rounded-[10px] w-full border-gray-400 p-1 sm:p-5 flex flex-col sm:gap-2 place-items-start'>
              <div className='flex place-items-center basis-[6rem]'>
                <h3 className='text-[.7rem] sm:text-[1.2rem] text-purple font-bold'>{result.serviceName}</h3>
              </div>
              <div className='w-full sm:h-[17rem] h-[16.5rem]'>
                <Image src={result.serviceImg} className='w-full h-full rounded-[10px] object-cover' alt={result.serviceName}/>
              </div>
              <div>
                <p className='text-sm'>{result.description}</p>
              </div>
            </div>
          )
            
          }
        </div>
        ) : (
          <NoResults query={searchValue}/>
        )
        }
        
    </div>
  )
}

export default Services