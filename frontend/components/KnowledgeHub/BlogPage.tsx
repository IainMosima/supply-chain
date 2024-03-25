"use client";
import { Images } from '@/constants';
import { Blog } from '@/models/Blog';
import { getBlog } from '@/network/Blog';
import * as TempDb from '@/tempDb/db';
import { dateConverter } from '@/utils/dateConverter';
import { dotWave } from 'ldrs';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import "./KnowledgeHub.scss";
import SearchBar from './SearchBar';

dotWave.register();



interface Props {
  blogId: string,
  blog?: Blog
}

const BlogPage = (props: Props) => {
  // remember to remove this
  // const [blog, setSelectedMainBlog] = useState<Blog>(pickRandomItem(TempDb.mainBlogs));

  const [blog, setBlog] = useState<Blog | undefined>(props.blog);

  useEffect(() => {
    async function fetchAblog(blogId = props.blogId) {
      return await getBlog(blogId);
    }

    if(!blog?.blogTitle)fetchAblog().then(res => setBlog(res));

  }, [blog?.blogTitle, props.blog, props.blogId]);

  console.log(blog);

  return (
    <div className='flex flex-col justify-start items-start gap-4 mt-3 w-full px-3 overflow-hidden'>
      <SearchBar />

      <div className='flex lg:flex-row flex-col justify-between place-items-start w-full gap-11 '>

        {blog?.blogTitle ?
          <div className='flex flex-col w-full basis-[80%] h-full cursor-pointer group justify-between'>

            <div className='flex flex-col w-full h-full'>
              <h1 className='text-[1.5rem] font-bold w-auto'>{blog.blogTitle}</h1>

              <div className='w-full overflow-hidden'>
                <Image src={`${process.env.NEXT_PUBLIC_BLOGSBUKCET}/${blog.blogImageKey}`} width={1000} height={100} alt={blog.blogTitle} className='w-full h-auto ease-out transform duration-500 transition-transform group-hover:scale-110' />
              </div>

              <p className='italic text-[0.8rem] font-semibold text-right'>By {blog.author} | {dateConverter(blog.date)}</p>
            </div>

            {blog.blogBody && blog.blogBody.split('\n').map((paragraph, index) =>
              <p key={index} className='text-lg'>{paragraph}</p>
            )}

          </div>
          :
          <div className='flex place-items-start w-full justify-center h-screen pt-[6rem]'>
            <l-dot-wave
              size="47"
              speed="1"
              color="#4169E1"
            ></l-dot-wave>
          </div>

        }

        {/* div to stick */}
        <div className='sm:flex hidden flex-col h-full items-start w-full basis-[40%] sticky top-0'>
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
      </div>

    </div>


  )
}

export default BlogPage