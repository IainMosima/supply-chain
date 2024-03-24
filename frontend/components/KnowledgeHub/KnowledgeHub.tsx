"use client";
import { BlogCardInterface, Topic } from '@/models/Blog';
import { usePathname } from 'next/navigation';
import DefaultPage from './DefaultPage';
import "./KnowledgeHub.scss";


interface Props {
    topics: Topic[],
    blogCardInterfaces: BlogCardInterface[]
}

const KnowledgeHub = (props: Props) => {
    const topic = usePathname().split('/')[2];
    
    return (
        <>
            <DefaultPage topic={topic} topics={props.topics} blogCardInterfaces={props.blogCardInterfaces}/>
            
        </>        
    )
}

export default KnowledgeHub