import { BlogCardInterface } from '@/models/Blog'
import Link from 'next/link'
import Images from '@/constants/images'
import React from 'react'
import Image from 'next/image';
import BlogCard from './BlogCard';

interface Props {
  blogCard: BlogCardInterface,
  }

const BlogCardInterce = ({ blogCard }: Props) => {
  
  return (
    <div className='w-full flex flex-col justify-center place-items-start gap-[1.2rem] mt-[2rem] mb-3'>
      <div className='flex w-full justify-between place-items-center gap-1 py-2 border-y-2'>
        <h2 className='font-bold sm:text-2xl basis-[2%] text-xl text-gray'>{blogCard.category}</h2>

        <Link href={`/knowledge-hub/${blogCard.category}`}>
          <div className='flex place-items-center gap-2'>
            <p className='text-md'>See All</p>
            <Image src={Images.rightArrow} alt='right-arrow' width={30} priority={true} />
          </div>
        </Link>
      </div>

      <div className='flex sm:flex-row flex-col gap-5 place-items-start w-full'>

        <Link href={`/knowledge-hub/blog/${blogCard.mainBlog.blogId}`} className='flex flex-col w-full basis-1/2 gap-2'>

          <div className='w-full h-[70%] flex flex-col gap-3'>

            <div className='group w-full overflow-hidden'>
              <Image src={`${process.env.NEXT_PUBLIC_BLOGSBUKCET}/${blogCard.mainBlog.blogImageKey}`} width={700} height={600} alt='sample' priority={true} className='w-full h-auto ease-out transform duration-500 transition-transform group-hover:scale-110' />
            </div>

            <h3 className='font-medium text-xl'>{blogCard.mainBlog.blogTitle}</h3>

          </div>

        </Link>

        <div className='grid w-full basis-1/2 grid-cols-2 gap-x-5'>
          {blogCard.blogs.map((blog, index) =>
            <div key={index}><BlogCard blog={blog}/></div>
          )}
        </div>
      </div>


    </div>
  )
}

export default BlogCardInterce