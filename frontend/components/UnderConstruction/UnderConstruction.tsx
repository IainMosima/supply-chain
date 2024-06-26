import { Images } from '../../constants';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const UnderConstruction = () => {
  return (
    <div className='mt-1 mb-[2rem] flex flex-col place-items-center gap-2'>
        <Image src={Images.underConstruction} alt='underConstruction'/>
        <h2 className='text-center text-xl'>This page is under Construction</h2>
        <h3 className='text-center text-slate-400'>{`We're working on it`}</h3>
        <a href='/'>
          <button className='rounded-full ease-in-out duration-150 hover:bg-white hover:text-purple border-2 border-purple bg-purple text-white font-bold p-4'>Go To Homepage</button>
        </a>
    </div>
  )
}

export default UnderConstruction