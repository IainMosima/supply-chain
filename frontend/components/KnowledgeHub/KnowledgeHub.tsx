"use client";
import { usePathname } from 'next/navigation';
import DefaultPage from './DefaultPage';
import "./KnowledgeHub.scss";
import BlogPage from './BlogPage';

const topics = ["All", "Tech", "Climate", "Science", "Politics"];


const KnowledgeHub = () => {
    const topic = usePathname().split('/')[2];
    const blog = usePathname().split('/')[3];

    console.log(blog);

    
    

    return (
        <>
            {!blog ?  <DefaultPage topic={topic} topics={topics} /> : <BlogPage/>}
            
        </>        
    )
}

export default KnowledgeHub