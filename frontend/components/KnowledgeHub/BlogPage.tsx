"use client";
import { Images } from '@/constants';
import { Blog } from '@/models/Blog';
import pickRandomItem from '@/utils/pickRandomItem';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import "./KnowledgeHub.scss";
import SearchBar from './SearchBar';
import * as TempDb from '@/tempDb/db'

const BlogPage = () => {
  // remembeer to remove this
  const [selectedMainBlog, setSelectedMainBlog] = useState<Blog>(pickRandomItem(TempDb.mainBlogs));

  return (
    <div className='flex flex-col justify-start items-start gap-4 mt-3 w-full px-3 overflow-hidden'>
      <SearchBar />

      <div className='flex lg:flex-row flex-col justify-between place-items-start w-full gap-11'>

        <div className='flex flex-col w-full basis-[80%] h-full cursor-pointer group justify-between'>

          <div className='flex flex-col w-full h-full'>
            <h1 className='text-[1.5rem] font-bold w-auto'>{selectedMainBlog.blogTitle}</h1>

            <div className='w-full overflow-hidden'>
              <Image src={Images.blogSample} alt='sample' priority={true} className='w-full h-auto ease-out transform duration-500 transition-transform group-hover:scale-110' />
            </div>

            <p className='italic text-[0.8rem] font-semibold text-right'>By {selectedMainBlog.blogAurthor} | {selectedMainBlog.date}</p>
          </div>

          {selectedMainBlog.blogBody.split('\n').map((paragraph, index) =>
            <p key={index} className='text-lg'>{paragraph}</p>
          )}

        </div>

        <div className='sm:flex hidden flex-col h-full items-start w-full basis-[40%] '>
          <h2 className='text-lg font-semibold underline text-[#4E4E4E] mb-0'>Latest Blogs</h2>

          <div className='flex flex-col gap-5'>
            {TempDb.sampleBlogs.map((blog, index) =>
              <Link href={`/knowledge-hub/${blog.category}/${blog.blogTitle}`} key={index} className='group flex justify-between place-items-center items-center cursor-pointer gap-4 h-full border-b-2 pb-3'>
                <div className='w-full h-full overflow-hidden'>
                  <Image src={blog.blogImage} alt={blog.blogTitle} priority={true} className='w-full h-auto rounded-sm object-cover' width={200} />
                </div>

                <div className='flex flex-col justify-between items-center h-full place-items-center '>
                  <p className='text-[1rem] font-extralight sm:leading-5 leading-4'>{blog.blogTitle}</p>


                  <div className='w-full flex justify-end gap-1 place-items-center'>
                    <div className='flex place-items-center gap-1'>
                      <Image src={Images.clock} alt='clock' width={20} priority={true} />
                      <p className='text-[0.7rem] font-semibold italic'>{blog.blogTime}</p>
                    </div>
                    <span>|</span>
                    <p className='text-[0.8rem] font-semibold italic'>{blog.category}</p>
                  </div>
                </div>
              </Link>
            )}
          </div>
        </div>
      </div>

      <div className='w-full flex flex-col justify-center place-items-start gap-3 mt-[2rem] mb-3'>
        <h2 className='font-bold sm:text-xl text-md underline text-black'>More like this</h2>
        {/* <div className='flex w-full justify-between place-items-start gap-1 py-2 border-y-2'>
        </div> */}
      </div>

    </div>
  )
}

export default BlogPage