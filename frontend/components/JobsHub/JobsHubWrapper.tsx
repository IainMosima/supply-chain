'use client';
import React, { useEffect, useState } from 'react';
import SearchBar from './SearchBar';
import JobsHubSelector from './JobsHubSelector';
import JobsHub from './JobsHub';
import { Job, JobResult } from '@/models/Jobs';
import JobsHubPagination from './JobsHubPagination';
import Loading from '../Loading/Loading';
import NoResultsHubs from '../NoResultsHubs/NoResultsHubs';
import { getJobResults } from '@/network/Jobs';

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
    jobResult: JobResult | undefined,
}

const JobsHubWrapper = ({ props, careerTypes, jobResult }: JobsHubWrapperProps) => {
    const [results, setResults] = useState<JobResult | undefined>(jobResult || undefined);
    const [selectedLocation, setSelectedLocation] = useState<string>(props.searchParams?.location || '');
    const [selectedCareerType, setSelectedCareerType] = useState<string>(props.searchParams?.careerType || 'All');
    const [currentPage, setCurrentPage] = useState(props.searchParams?.pageNumber || 1)
    const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {
        async function fetchResults() {
            setIsLoading(true);
            if (selectedCareerType === 'All' && !selectedLocation && currentPage === 1) {
                if (jobResult) setResults(jobResult);
            } else {
                setResults(undefined);
                let res: JobResult | undefined;
                try {
                    res = await getJobResults(false, props.params.country[0], currentPage, selectedCareerType, selectedLocation);
                    if (res && res.jobs.length > 0) {
                        setResults(res);
                    } else {
                        setResults(undefined);
                    }
                    setIsLoading(false);

                } catch (err) {
                    alert('Refresh page to get Jobs');
                }
            }
        }
        fetchResults();

    }, [currentPage, jobResult, props.params.country, selectedCareerType, selectedLocation]);

    return (
        <div className="w-full p-1">
            <SearchBar country={props.params.country[0]} currentLocation={selectedLocation} setResults={setResults} intialResults={results?.jobs || []} setSelectedLocation={setSelectedLocation} setIsLoading={setIsLoading} />

            <JobsHubSelector selectedCareerType={selectedCareerType} setSelectedCareerType={setSelectedCareerType} country={props.params.country[0]} careerTypes={careerTypes} location={selectedLocation} setResults={setResults} setIsLoading={setIsLoading} />


            {!results ? isLoading ? (<Loading />) : (
                <NoResultsHubs searchValue={selectedLocation} setResults={setResults} intialResults={results} backLink={`/jobs-hub/${props.params.country}`} setSelectedLocation={setSelectedLocation} />
            ) : (
                <>
                    <JobsHub jobs={results.jobs} />

                </>

            )}
            
            <JobsHubPagination totalPages={results?.totalPages ? results?.totalPages : jobResult?.totalPages} setCurrentPage={setCurrentPage} />



        </div>
    )
}

export default JobsHubWrapper