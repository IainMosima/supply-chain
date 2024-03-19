"use client";
import { Images } from '@/constants';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import BlogCardInterce from './BlogCardInterface';
import "./KnowledgeHub.scss";
import KnowledgeHubSelector from './KnowledgeHubSelector';
import SearchBar from './SearchBar';
import { Blog, BlogCardInterface, Topic } from '@/models/Blog';
import pickRandomItem from '@/utils/pickRandomItem';
import Link from 'next/link';
import * as TempDb from '@/tempDb/db';

interface Props {
    topic: string,
    topics: Topic[],
    blogCardInterfaces: BlogCardInterface[]
}

const DefaultPage = ({ topic, topics, blogCardInterfaces }: Props) => {
    const [selectedTopic, setSelectedTopic] = useState(topic ? topic : "All");
    const [results, setResults] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [selectedMainBlog, setSelectedMainBlog] = useState<Blog>(pickRandomItem(TempDb.mainBlogs));

    useEffect(() => {


    }, []);



    return (
        <div className='flex flex-col justify-center place-items-center gap-4 mt-3 w-full px-3 overflow-hidden'>
            <SearchBar />

            <KnowledgeHubSelector topics={topics} setSelectedTopic={setSelectedTopic} setResults={setResults} setIsLoading={setIsLoading} selectedTopic={selectedTopic} />

            <div className='flex lg:flex-row flex-col justify-between place-items-center w-full gap-11'>

                <Link href={`/knowledge-hub/blog/${selectedMainBlog.blogTitle}`} className='flex flex-col w-full basis-[80%] h-full cursor-pointer group justify-between'>
                    <h3 className='text-lg font-semibold  underline text-[#4E4E4E]'>{`Today's pick`}</h3>

                    <div className='flex flex-col w-full h-full'>
                        <h1 className='text-[1.5rem] font-bold w-auto'>{selectedMainBlog.blogTitle}</h1>

                        <div className='w-full overflow-hidden'>
                            <Image src={Images.blogSample} alt='sample' priority={true} className='w-full h-auto ease-out transform duration-500 transition-transform group-hover:scale-110' />
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
            </div>

            <div className='flex flex-col w-full place-items-center gap-2 mt-4'>
                {blogCardInterfaces.map((card, i) => {
                    if (card.blogs.length >= 2) {
                        return (
                            <div key={i} className='w-full'>
                                <BlogCardInterce blogCard={card} category={card.category} />
                            </div>
                        )
                    }
                })}
            </div>


        </div>
    )
}

export default DefaultPage