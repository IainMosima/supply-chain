'use client';
import React, { useState } from 'react'
import "./Navbar.scss";
import Image from 'next/image';
import { Images } from '@/constants';
import Tooltip from '@mui/material/Tooltip';


const Navbar = () => {
  const [currentTab, setCurrentTab] = useState('home');
  return (
    <div className='border border-slate-300 h-screen flex w-[4rem] flex-col gap-3 place-items-center'>
      <div className='w-full mt-1 h-[4.5rem] border-b-2 border-slate-300'>
        <Image src={Images.logo} alt='logo' width={55} priority={true} className='mx-auto' />
      </div>

      <div className={`${currentTab === 'home' ? 'bg-purple' : ''} p-2 rounded-lg cursor-pointer`} onClick={()=>setCurrentTab('home')}>
        <Tooltip title="Home" placement='right' arrow >
          <Image
            src={currentTab === 'home' ? Images.homeWhite : Images.homeBlack}
            alt='home-icon'
            height={27}
          />
        </Tooltip>
      </div>

      <div className={`${currentTab === 'services' ? 'bg-purple' : ''} p-2 rounded-lg cursor-pointer`} onClick={()=>setCurrentTab('services')}>
        <Tooltip title="Services" placement='right' arrow >
          <Image
            src={currentTab === 'services' ? Images.supplierWhite : Images.supplierBlack}
            alt='services-icon'
            height={27}
          />
        </Tooltip>
      </div>

      <div className={`${currentTab === 'tubs' ? 'bg-purple' : ''} p-2 rounded-lg cursor-pointer`} onClick={()=>setCurrentTab('tubs')}>
        <Tooltip title="Tubs" placement='right' arrow >
          <Image
            src={currentTab === 'tubs' ? Images.collectionBlack : Images.collectionWhite}
            alt='tubs-icon'
            height={27}
          />
        </Tooltip>
      </div>
    </div>
  )
}

export default Navbar