"use client";
import React, { useState } from 'react';
import "./KnowledgeHub.scss";
import KnowledgeHubSelector from './KnowledgeHubSelector';
import SearchBar from './SearchBar';
import Image from 'next/image';
import { Images } from '@/constants';
import BlogCard from './BlogCard';


const topics = ["All", "Tech", "Climate", "Science", "Politics"];
const sampleBlogs = [
    {
        category: "Tech",
        blogImage: Images.blogSample,
        blogTitle: "Natoque penatibus et magnis dis parturient montes nascetur ridiculus mus mauris vitae ultricies leo",
        blogTime: "3h",
        blogAurthor: "Iain Mosima"
    },
    {
        category: "Finance",
        blogImage: Images.blogSample,
        blogTitle: "Natoque penatibus et magnis dis parturient montes nascetur ridiculus mus mauris vitae ultricies leo",
        blogTime: "1D",
        blogAurthor: "Iain Mosima"
    },
    {
        category: "Insurance",
        blogImage: Images.blogSample,
        blogTitle: "Natoque penatibus et magnis dis parturient montes nascetur ridiculus mus mauris vitae ultricies leo",
        blogTime: "4min",
        blogAurthor: "Iain Mosima"
    },
    {
        category: "Tech",
        blogImage: Images.blogSample,
        blogTitle: "Natoque penatibus et magnis dis parturient montes nascetur ridiculus mus mauris vitae ultricies leo",
        blogTime: "1M",
        blogAurthor: "Iain Mosima"

    },
    {
        category: "tech",
        blogImage: Images.blogSample,
        blogTitle: "Natoque penatibus et magnis dis parturient montes nascetur ridiculus mus mauris vitae ultricies leo",
        blogTime: "2D",
        blogAurthor: "Iain Mosima"

    }
]

const sampleBlogCards = [
    {
        category: "Tech",
        mainBlog: {
            blogImage: Images.blogSample,
            blogTitle: "Natoque penatibus et magnis dis parturient montes nascetur ridiculus mus mauris vitae ultricies leo",
            blogTime: "4min",
            blogAurthor: "Iain Mosima"
        },
        blogs: [
            {
                blogImage: Images.blogSample,
                blogTitle: "Natoque penatibus et magnis dis parturient montes nascetur ridiculus mus mauris vitae ultricies leo",
                blogTime: "4min",
                blogAurthor: "Iain Mosima"
            },
            {
                blogImage: Images.blogSample,
                blogTitle: "Natoque penatibus et magnis dis parturient montes nascetur ridiculus mus mauris vitae ultricies leo",
                blogTime: "4min",
                blogAurthor: "Iain Mosima"
            },
            {
                blogImage: Images.blogSample,
                blogTitle: "Natoque penatibus et magnis dis parturient montes nascetur ridiculus mus mauris vitae ultricies leo",
                blogTime: "4min",
                blogAurthor: "Iain Mosima"
            },
            {
                blogImage: Images.blogSample,
                blogTitle: "Natoque penatibus et magnis dis parturient montes nascetur ridiculus mus mauris vitae ultricies leo",
                blogTime: "4min",
                blogAurthor: "Iain Mosima"
            }
        ]
    },

    {
        category: "Finance",
        mainBlog: {
            blogImage: Images.blogSample,
            blogTitle: "Natoque penatibus et magnis dis parturient montes nascetur ridiculus mus mauris vitae ultricies leo",
            blogTime: "4min",
            blogAurthor: "Iain Mosima"
        },
        blogs: [
            {
                blogImage: Images.blogSample,
                blogTitle: "Natoque penatibus et magnis dis parturient montes nascetur ridiculus mus mauris vitae ultricies leo",
                blogTime: "4min",
                blogAurthor: "Iain Mosima"
            },
            {
                blogImage: Images.blogSample,
                blogTitle: "Natoque penatibus et magnis dis parturient montes nascetur ridiculus mus mauris vitae ultricies leo",
                blogTime: "4min",
                blogAurthor: "Iain Mosima"
            },
            {
                blogImage: Images.blogSample,
                blogTitle: "Natoque penatibus et magnis dis parturient montes nascetur ridiculus mus mauris vitae ultricies leo",
                blogTime: "4min",
                blogAurthor: "Iain Mosima"
            },
            {
                blogImage: Images.blogSample,
                blogTitle: "Natoque penatibus et magnis dis parturient montes nascetur ridiculus mus mauris vitae ultricies leo",
                blogTime: "4min",
                blogAurthor: "Iain Mosima"
            }
        ]
    }
]

const KnowledgeHub = () => {
    const [selectedTopic, setSelectedTopic] = useState("All");
    const [results, setResults] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    return (
        <div className='flex flex-col justify-center place-items-center gap-[2.5rem] mt-3 w-full px-3 overflow-hidden'>
            <SearchBar />

            <KnowledgeHubSelector topics={topics} setSelectedTopic={setSelectedTopic} setResults={setResults} setIsLoading={setIsLoading} selectedTopic={selectedTopic} />

            <div className='flex lg:flex-row flex-col justify-between place-items-center w-full gap-11'>

                <div className='flex flex-col w-full basis-[80%] h-full cursor-pointer group justify-between'>
                    <h3 className='text-lg font-semibold  underline text-[#4E4E4E]'>{`Today's pick`}</h3>

                    <div className='flex flex-col w-full h-full'>
                        <h1 className='text-[1.5rem] font-bold w-auto'>Natoque penatibus et magnis dis parturient montes nascetur ridiculus mus mauris vitae ultricies leo </h1>

                        <div className='w-full overflow-hidden'>
                            <Image src={Images.blogSample} alt='sample' priority={true} className='w-full h-auto ease-out transform duration-500 transition-transform group-hover:scale-110' />
                        </div>

                        <p className='italic text-[0.8rem] font-semibold text-right'>By Iain Mosima | January 29 2023</p>
                    </div>
                </div>

                <div className='flex flex-col place-items-start w-full basis-[40%] justify-between'>
                    <h2 className='text-lg font-semibold underline text-[#4E4E4E] mb-0'>Latest Blogs</h2>

                    <div className='flex flex-col gap-5'>
                        {sampleBlogs.map((blog, index) =>
                            <div key={index} className='group flex justify-between place-items-center items-center cursor-pointer gap-4 h-full border-b-2 pb-3'>
                                <div className='w-full h-full overflow-hidden'>
                                    <Image src={blog.blogImage} alt={blog.blogTitle} priority={true} className='w-full h-auto ease-out transform duration-500 transition-transform group-hover:scale-110 rounded-sm object-cover' width={200} />
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
                            </div>
                        )}
                    </div>
                </div>
            </div>

            <div className='flex flex-col w-full place-items-center gap-2'>
                {sampleBlogCards.map((card, i) => (
                    <div key={i} className='w-full'>
                        <BlogCard blogCard={card} />
                    </div>
                ))}
            </div>


        </div>
    )
}

export default KnowledgeHub