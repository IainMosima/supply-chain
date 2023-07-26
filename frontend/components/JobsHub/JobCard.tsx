import { Job } from '@/models/Jobs'
import React from 'react'

interface JobCardprops {
    expandedIndex: number,
    onClick: (index: number) => void,
    job: Job,

}

const JobCard = ({ expandedIndex, onClick, job }: JobCardprops) => {
  return (
    <div>

    </div>
  )
}

export default JobCard