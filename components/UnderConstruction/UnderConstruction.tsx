import { Images } from '../../constants';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const UnderConstruction = () => {
  return (
    <div className='lg:mt-[9rem] md:mt-[9rem] mt-[7.4rem] mb-[2rem] flex flex-col place-items-center gap-3'>
        <Image src={Images.underConstruction} alt='underConstruction'/>
        <h2 className='text-center text-xl'>This page is under Construction</h2>
        <h3 className='text-center text-slate-400'>{`We're working on it`}</h3>
        <Link href='/'>
          <button className='rounded-full bg-purple text-white font-bold p-4'>Go To Homepage</button>
        </Link>
    </div>
  )
}

export default UnderConstruction