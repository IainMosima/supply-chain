'use client';
import { Job } from '@/models/Jobs';
import React, { useState } from 'react'
import JobsCard from './JobCard';

interface JobsCardProps {
  jobs: Job[];
}

const JobsHub = ({ jobs }: JobsCardProps) => {
  const [expandedIndex, setExpandedIndex] = useState(-1);
  
  const handleExpand = (index: number) => {
    setExpandedIndex((prevIndex) => prevIndex === index ? -1 : index);
  }
  return (
    <div className='flex justify-center place-items-center gap-3 flex-col'>
      {jobs.map((job, index) => (
        <div key={index}>
        <JobsCard job={job} expanded={expandedIndex === index} handleExpand={handleExpand} index={index}/>
        </div>
      ))

      }
    </div>
  )
}

export default JobsHub