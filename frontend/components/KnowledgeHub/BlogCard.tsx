import { BlogCardInterface } from '@/models/Blog'
import Link from 'next/link'
import Images from '@/constants/images'
import React from 'react'
import Image from 'next/image';

interface Props {
  blogCard: BlogCardInterface,
  category: string,
}

const BlogCard = ({ blogCard, category }: Props) => {
  return (
    <div className='w-full flex flex-col justify-center place-items-start gap-[1.2rem] mt-[2rem] mb-3'>
      <div className='flex w-full justify-between place-items-center gap-1 py-2 border-y-2'>
        <h2 className='font-bold sm:text-2xl basis-[2%] text-xl text-gray'>{blogCard.category}</h2>

        <Link href='#'>
          <div className='flex place-items-center gap-2'>
            <p className='text-md'>See All</p>
            <Image src={Images.rightArrow} alt='right-arrow' width={30} priority={true} />
          </div>
        </Link>
      </div>

      <div className='flex sm:flex-row flex-col gap-5 place-items-start w-full'>

        <Link href={`/knowledge-hub/${blogCard.category}/${blogCard.mainBlog.blogTitle}`} className='flex flex-col w-full basis-1/2 gap-2'>

          <div className='w-full h-[70%] flex flex-col gap-3'>

            <div className='group w-full overflow-hidden'>
              <Image src={blogCard.mainBlog.blogImage} alt='sample' priority={true} className='w-full h-auto ease-out transform duration-500 transition-transform group-hover:scale-110' />
            </div>

            <h3 className='font-medium text-xl'>{blogCard.mainBlog.blogTitle}</h3>

          </div>

        </Link>

        <div className='grid w-full basis-1/2 grid-cols-2 gap-x-5'>
          {blogCard.blogs.map((blog, index) =>
            // remember to change to blog id
            <Link href={`/knowledge-hub/${category}/${blog.blogTitle}`} key={index}>
              <div className='flex flex-col place-items-start'>
                <Image src={blog.blogImage} alt={blog.blogTitle} />
                <p className=''>{blog.blogTitle}</p>
              </div>

            </Link>
          )}
        </div>
      </div>


    </div>
  )
}

export default BlogCard