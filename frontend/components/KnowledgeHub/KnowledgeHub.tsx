"use client";
import React, { useState } from 'react';
import "./KnowledgeHub.scss";
import KnowledgeHubSelector from './KnowledgeHubSelector';

const topics = ["All", "Tech", "Climate", "Science", "Politics"];

const KnowledgeHub = () => {
    const [selectedTopic, setSelectedTopic] = useState("All");
    const [results, setResults] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    
    return (
        <div className='flex justify-center place-items-center gap-3 flex-col mt-3'>

            
            <KnowledgeHubSelector topics={topics} setSelectedTopic={setSelectedTopic} setResults={setResults} setIsLoading={setIsLoading} selectedTopic={selectedTopic}/>



        </div>
    )
}

export default KnowledgeHub