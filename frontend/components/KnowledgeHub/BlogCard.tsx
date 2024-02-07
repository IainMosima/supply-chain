import { BlogCardInterface } from '@/models/Blog'
import Link from 'next/link'
import React from 'react'

interface Props {
    blogCard: BlogCardInterface
}

const BlogCard = ({ blogCard }: Props) => {
  return (
    <div className='w-full'>
        <div className='flex w-full justify-between place-items-center'>
            <h2 className='font-bold text-3xl text-gray-700'>{blogCard.category}</h2>
            <hr className='border w-full rounded-md basis-[87%]'/>
            <Link href="#">See All</Link>
        </div>
        
    </div>
  )
}

export default BlogCard