"use client";
import { Images } from '@/constants';
import { Blog, BlogCardInterface, Topic } from '@/models/Blog';
import * as TempDb from '@/tempDb/db';
import pickRandomItem from '@/utils/pickRandomItem';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import BlogCardInterce from './BlogCardInterface';
import "./KnowledgeHub.scss";
import KnowledgeHubSelector from './KnowledgeHubSelector';
import SearchBar from './SearchBar';
import DefaultPage from './DefaultPage';

interface Props {
    topics: Topic[],
    blogCardInterfaces: BlogCardInterface[]
    mainBlogData: Blog,
}

const KnowledgeHub = ({topics, blogCardInterfaces, mainBlogData}: Props) => {
    const topic = usePathname().split('/')[2];
    const [selectedTopic, setSelectedTopic] = useState(topic ? topic : "All");
    const [results, setResults] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [selectedMainBlog, setSelectedMainBlog] = useState<Blog>(mainBlogData);
    const [sampleBlogs, setSampleBlogs] = useState(blogCardInterfaces);

    useEffect(() => {
        

    }, []);
    
    return (
        <div className='flex flex-col justify-center place-items-center gap-4 mt-3 w-full px-3 overflow-hidden'>
            <SearchBar />

            <KnowledgeHubSelector topics={topics} setSelectedTopic={setSelectedTopic} setResults={setResults} setIsLoading={setIsLoading} selectedTopic={selectedTopic} />

            
            <DefaultPage selectedMainBlog={selectedMainBlog} sampleBlogs={sampleBlogs}/>

        </div>
    )
}

export default KnowledgeHub