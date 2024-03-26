import { Images } from '@/constants';
import { Blog } from '@/models/Blog';
import * as TempDb from '@/tempDb/db';
import Image from 'next/image';
import Link from 'next/link';
import "./KnowledgeHub.scss";

interface Props {
    selectedMainBlog: Blog,
}


const TopicPage = ({ selectedMainBlog }: Props) => {
    return (
        <div>
            <div className='flex lg:flex-row flex-col justify-between place-items-center w-full gap-11'>

                <Link href={`/knowledge-hub/blog/${selectedMainBlog.blogTitle}`} className='flex flex-col w-full basis-[80%] h-full cursor-pointer group justify-between'>
                    <h3 className='text-lg font-semibold  underline text-[#4E4E4E]'>{`Today's pick`}</h3>

                    <div className='flex flex-col w-full h-full'>
                        <h1 className='text-[1.5rem] font-bold w-auto'>{selectedMainBlog.blogTitle}</h1>

                        <div className='w-full overflow-hidden'>
                            <Image src={`${process.env.NEXT_PUBLIC_BLOGSBUKCET}/${selectedMainBlog.blogImageKey}`} width={1000} height={100} alt={selectedMainBlog.blogTitle} className='w-full h-auto ease-out transform duration-500 transition-transform group-hover:scale-110' />
                        </div>

                        <p className='italic text-[0.8rem] font-semibold text-right'>By {selectedMainBlog.author} | {selectedMainBlog.date}</p>
                    </div>
                </Link>
                {/* latest blogs */}
                <div className='flex flex-col place-items-start w-full basis-[40%] justify-between'>
                    <h2 className='text-lg font-semibold underline text-[#4E4E4E] mb-0'>Latest Blogs</h2>

                    <div className='flex flex-col gap-5'>
                        {TempDb.sampleBlogs.map((blog, index) =>
                            <Link href={`/knowledge-hub/blog/${blog.blogTitle}`} key={index} className='group flex justify-between place-items-center items-center cursor-pointer gap-4 h-full border-b-2 pb-3'>
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

                {/* render all blogs */}
            </div>
        </div>
    )
}

export default TopicPage