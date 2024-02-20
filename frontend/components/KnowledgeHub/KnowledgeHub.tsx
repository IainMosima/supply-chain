"use client";
import { usePathname } from 'next/navigation';
import DefaultPage from './DefaultPage';
import "./KnowledgeHub.scss";
import TopicPage from './TopicPage';


const KnowledgeHub = () => {
    const router = usePathname().split('/')[2];
    console.log(router);

    return (
        <>
            {!router ?  <DefaultPage/> : <TopicPage/>}
            
        </>        
    )
}

export default KnowledgeHub