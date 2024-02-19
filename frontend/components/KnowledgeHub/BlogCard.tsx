import { BlogCardInterface } from '@/models/Blog'
import Link from 'next/link'
import Images from '@/constants/images'
import React from 'react'
import Image from 'next/image';

interface Props {
  blogCard: BlogCardInterface
}

const BlogCard = ({ blogCard }: Props) => {
  return (
    <div className='w-full flex flex-col justify-center place-items-start gap-3'>
      <div className='flex w-full justify-between place-items-center gap-1 py-2 border-y-2'>
        <h2 className='font-bold sm:text-2xl basis-[2%] text-xl text-gray'>{blogCard.category}</h2>

        <Link href='#'>
          <div className='flex place-items-center gap-2'>
            <p className='text-md'>See All</p>
            <Image src={Images.rightArrow} alt='right-arrow' width={30} priority={true} />
          </div>
        </Link>
      </div>

      <div className='flex sm:flex-row flex-col gap-2 place-items-center w-full'>

        <div className='flex flex-col w-full basis-1/2 gap-2'>
          <div className='w-full h-[70%] flex flex-col gap-3'>
            <Image src={blogCard.mainBlog.blogImage} alt='blogSample' className='object-contain' />
            <h3 className='font-semibold text-xl'>{blogCard.mainBlog.blogTitle}</h3>
          </div>
        </div>

        <div className='grid w-full basis-1/2'>
          
        </div>
      </div>


    </div>
  )
}

export default BlogCard