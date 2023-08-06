'use client';
import React, { useState } from 'react';
import SearchBar from './SearchBar';
import JobsHubSelector from './JobsHubSelector';
import JobsHub from './JobsHub';
import { Job, JobResult } from '@/models/Jobs';
import JobsHubPagination from './JobsHubPagination';

type Props = {
    params: {
        country: string[];
    };
    searchParams?: {
        pageNumber?: number,
        careerType?: string,
        location?: string
    };
};

interface JobsHubWrapperProps {
    props: Props,
    careerTypes: string[],
    jobs: JobResult | undefined,
}

const JobsHubWrapper = ({ props, careerTypes, jobs }: JobsHubWrapperProps) => {
    const [results, setResults] = useState<JobResult|null>(jobs ? jobs : null);
    return (
        <div className="w-full p-1">
            <SearchBar country={props.params.country[0]} careerType={props.searchParams?.careerType} currentLocation={props.searchParams?.location || ''} setResults={setResults} intialResults={results?.jobs || []}/>

            <JobsHubSelector selectedCareerType={props.searchParams?.careerType ? props.searchParams?.careerType : 'All'} country={props.params.country[0]} careerTypes={careerTypes} location={props.searchParams?.location} />
            <JobsHub jobs={results?.jobs} />
            {results && results.totalPages > 2 &&
                <JobsHubPagination country={props.params.country[0]} careerType={props.searchParams?.careerType} totalPages={jobs?.totalPages} />

            }
        </div>
    )
}

export default JobsHubWrapper