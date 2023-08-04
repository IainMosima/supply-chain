'use client';
import { Tender } from '@/models/Tenders';
import { useState } from 'react';
import TendersCard from './TendersCard';


interface TendersCardProps {
  tenders?: Tender[];
}

const TendersHub = ({ tenders }: TendersCardProps) => {
  const [expandedIndex, setExpandedIndex] = useState(-1);

  const handleExpand = (index: number) => {
    setExpandedIndex((prevIndex) => prevIndex === index ? -1 : index);
  }
  return (
    <div className='flex justify-center place-items-center gap-3 flex-col mt-3'>
      {tenders?.map((tender, index) => (
        <div key={index}>
          <TendersCard tender={tender} expanded={expandedIndex === index} handleExpand={handleExpand} index={index} />
        </div>
      ))

      }
    </div>
  )
}

export default TendersHub