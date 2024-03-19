"use client";
import { Topic } from '@/models/Blog';
import { usePathname } from 'next/navigation';
import BlogPage from './BlogPage';
import DefaultPage from './DefaultPage';
import "./KnowledgeHub.scss";


interface Props {
    topics: Topic[]
}

const KnowledgeHub = (props: Props) => {
    const topic = usePathname().split('/')[2];
    
    return (
        <>
            <DefaultPage topic={topic} topics={props.topics} />
            
        </>        
    )
}

export default KnowledgeHub