"use client";
import React, { useState } from 'react';
import "./KnowledgeHub.scss";
import KnowledgeHubSelector from './KnowledgeHubSelector';
import SearchBar from './SearchBar';
import Image from 'next/image';
import { Images } from '@/constants';

const topics = ["All", "Tech", "Climate", "Science", "Politics"];
const sampleBlogs = [
    {
        blogImage: Images.blogSample,
        blogTitle: "Natoque penatibus et magnis dis parturient montes nascetur ridiculus mus mauris vitae ultricies leo"
    },
    {
        blogImage: Images.blogSample,
        blogTitle: "Natoque penatibus et magnis dis parturient montes nascetur ridiculus mus mauris vitae ultricies leo"
    },
    {
        blogImage: Images.blogSample,
        blogTitle: "Natoque penatibus et magnis dis parturient montes nascetur ridiculus mus mauris vitae ultricies leo"
    },
    {
        blogImage: Images.blogSample,
        blogTitle: "Natoque penatibus et magnis dis parturient montes nascetur ridiculus mus mauris vitae ultricies leo"
    },
    {
        blogImage: Images.blogSample,
        blogTitle: "Natoque penatibus et magnis dis parturient montes nascetur ridiculus mus mauris vitae ultricies leo"
    }
]

const KnowledgeHub = () => {
    const [selectedTopic, setSelectedTopic] = useState("All");
    const [results, setResults] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    return (
        <div className='flex justify-center place-items-center gap-3 flex-col mt-3 w-full'>
            <SearchBar />

            <KnowledgeHubSelector topics={topics} setSelectedTopic={setSelectedTopic} setResults={setResults} setIsLoading={setIsLoading} selectedTopic={selectedTopic} />

            <div className='flex justify-between place-items-center w-full gap-11'>
                <div className='flex flex-col w-full cursor-pointer group'>
                    <h3 className='text-lg font-semibold  underline text-[#4E4E4E]'>{`Today's pick`}</h3>

                    <h1 className='text-[1.5rem] font-bold w-auto'>Natoque penatibus et magnis dis parturient montes nascetur ridiculus mus mauris vitae ultricies leo </h1>

                    <div className='w-full overflow-hidden'>
                        <Image src={Images.blogSample} alt='sample' priority={true} className='w-full h-auto ease-out transform transition-transform group-hover:scale-110' />
                    </div>


                    <p className='italic text-[0.8rem] font-semibold text-right'>By Iain Mosima | January 29 2023</p>
                </div>

                <div className='flex flex-col w-full place-items-start'>
                    <h2 className='text-lg font-semibold underline text-[#4E4E4E]'>Latest Blogs</h2>

                    <div className='flex flex-col gap-5'>
                        {sampleBlogs.map((blog, index) =>
                            <div key={index} className=''>
                                
                            </div>
                        )}
                    </div>


                </div>
            </div>

        </div>
    )
}

export default KnowledgeHub