"use client";
import React, { useState } from "react";
import Link from "next/link";
import './Navbar.scss';
import { motion } from "framer-motion";

const links = () => {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [hubsToggle, setHubsToggle] = useState(false);

    
    return (
        <div className="hidden sm:flex sm:justify-evenly sm:gap-5 sm:place-items-center font-semibold">
                <Link href='/'>
                    Home
                </Link>

                <Link href='/services'>
                    Services
                </Link>

                <div className={`cursor-pointer px-2 py-2 rounded ${hubsToggle ? 'bg-purple text-white' : ''}`} onClick={()=> setHubsToggle(prev => !prev)}>
                    Hubs
                    
                    {hubsToggle &&
                        <motion.div 
                            whileInView={{y: [0, 10]}}
                            transition={{ duration: 0.1, ease: 'easeOut' }}
                            className={`absolute z-1 right-[21.1rem] translate-down bg-purple rounded p-3 flex flex-col text-xs font-normal`}
                        >
                            {['KNOWLEDGE HUB', 'BUYERS HUB', 'CREDITORS HUB', 'INVESTORS HUB', 'TENDER HUB', 'JOBS HUB'].map((hub) => 
                                (<Link href={hub.toLowerCase().replace(' ', '-')} key={hub} className="py-2 px-3">{hub}</Link>)
                            )}
                        </motion.div>
                    }


                </div>



                <Link href='/contact-us'>
                    Services
                </Link>
        </div>
    )
}

export default links