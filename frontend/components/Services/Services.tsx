"use client";

import Image from 'next/image';
import { Images } from '../../constants';
import SearchBar from './SearchBar';
import { useEffect, useState } from 'react';
import { Services } from '@/models/Services';
import NoResults from '../NoResults/NoResults';
import { getAllServices } from '@/network/Services';

const Services = () => {

  // const list = [
  //   {
  //     serviceName: 'Supplier prequalification',
  //     description: 'As industry experts, we relieve you of this arduous and taxing exercise and ensure that you get the suitable supply chain partners that you need to deliver value to your clients.',
  //     serviceImg: Images.serviceMan
  //   },
  //   {
  //     serviceName: 'Spend analysis and category management',
  //     description: 'We assist our clients in identifying who they spend their financial resources with and on what and help them come up with better sourcing strategies with the aim of increasing profitability.',
  //     serviceImg: Images.serviceWoman
  //   },
  //   {
  //     serviceName: 'Procurement processes and policies review and re-engineering',
  //     description: 'in case you are not an expert in this space or you are considering outsourcing your procurement function, worry not for we got your back and best interests at heart. Our highly trained and experienced supply chain specialists will ensure that you get value for your money.',
  //     serviceImg: Images.serviceMan
  //   },
  //   {
  //     serviceName: 'Market Intelligence ',
  //     description: 'Information is power. We are actively scanning the market for trends and new developments to ensure our clients leverage that information to stay ahead of the game.',
  //     serviceImg: Images.serviceWoman
  //   },
  //   {
  //     serviceName: 'Policies, Process Review, and Re-engineering',
  //     description: 'Albert Einstein said, “Insanity is doing the same thing over and over and expecting different results.” With this in mind, we help our clients in drafting supply chain policies and procedures, reviewing and re-engineering the same so that they remain relevant. ',
  //     serviceImg: Images.serviceMan
  //   },
  //   {
  //     serviceName: 'Procurement Audit',
  //     description: 'The management and the investor need comfort and assurance that no company resource is wasted. As supply chain specialists, we aid our clients in carrying out audits of the sourcing exercise and recommend the best in class practices that safeguard company’s resources against wastage. ',
  //     serviceImg: Images.serviceWoman
  //   },
  //   {
  //     serviceName: 'Training',
  //     description: 'we sit down with our clients to identify the existing skill gaps, recommend the best relevant training available in the market, and walk the journey with them on implementation and evaluation of the outcome.',
  //     serviceImg: Images.serviceMan
  //   },
  // ]

  const [searchValue, setSearchValue] = useState('');
  const [services, setServices] = useState<Services[]>([]);
  const [results, setResults] = useState<Services[]>([]);


  useEffect(() => {
    async function fetchAllServices() {
      const response = await getAllServices();
      setServices(response);
    }

    fetchAllServices();
  }, []);
  
  console.log(services);
  return (
    <div className='lg:mt-[9rem] md:mt-[9rem] mt-[7.6rem] mb-[2rem] flex flex-col'>
        <h2 className='font-semibold text-xl text-center text-purple'>Our Services</h2>
        <div className='w-[1.5rem] h-[.2rem] bg-purple mx-auto'/>
        <div className='justify-self-center'>
          <SearchBar services={services} results={results} setResults={setResults} setSearchValue={setSearchValue}/>
        </div>

        {results.length > 0 ? (
          <div className='grid lg:grid-cols-4 grid-cols-2 md:grid-cols-3 lg:gap-2 md:gap-1 gap-1 mt-[2rem]'>
          {results.map((result, index) => 
            <div key={index} className='border-2 h-[30rem] rounded-[12px] w-full border-gray-400 flex flex-col place-items-start'>
              <div className='w-full lg:h-[16rem] md:h-[14rem] h-[13rem] rounded-t-[10px]'>
                {/* <Image src={result.serviceImg} className='w-full h-full rounded-t-[10px] object-cover' alt={result.serviceName}/> */}
              </div>

              <div className='p-2 flex flex-col gap-3'>
                <div className='flex place-items-center'>
                  <h3 className='text-[.7rem] sm:text-[1.2rem] text-purple font-bold'>{result.serviceName}</h3>
                </div>
                <div>
                  <p className='text-sm'>{result.serviceDescription}</p>
                </div>
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