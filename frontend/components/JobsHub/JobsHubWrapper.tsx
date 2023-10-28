'use client';
import React, { useEffect, useRef, useState } from 'react';
import SearchBar from './SearchBar';
import JobsHubSelector from './JobsHubSelector';
import JobsHub from './JobsHub';
import { Job, JobResult } from '@/models/Jobs';
import JobsHubPagination from './JobsHubPagination';
import Loading from '../Loading/Loading';
import NoResultsHubs from '../NoResultsHubs/NoResultsHubs';
import { getJobResults } from '@/network/Jobs';
import { useAppSelector } from '@/hooks/reduxHook';

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
    const [currentPage, setCurrentPage] = useState(props.searchParams?.pageNumber || 1);
    const [isLoading, setIsLoading] = useState(false);
    const prevPageTotal = useRef(jobResult?.totalPages);
    const [showPaginationComponent, setShowPaginationComponent] = useState(true);
    const selectedCountry = useAppSelector(state => state.selectedCountry.selectedCountry?.countryName);


    useEffect(() => {
        async function fetchResults() {
            if (selectedCountry) {
                setIsLoading(true);
                if (selectedCareerType === 'All' && !selectedLocation && currentPage === 1 && selectedCountry === process.env.DEFAULT_COUNTRY) {
                    if (jobResult) setResults(jobResult);
                } else {
                    setResults(undefined);
                    let res: JobResult | undefined;
                    try {
                        res = await getJobResults(false, selectedCountry, currentPage - 1, selectedCareerType, selectedLocation);
                        if (res && res.jobs.length > 0) {
                            setResults(res);
                            if (prevPageTotal.current === res.totalPages) {
                                setShowPaginationComponent(true);
                            } else {
                                setShowPaginationComponent(false);
                                prevPageTotal.current = res.totalPages;
                                setShowPaginationComponent(true);
                            }
                        } else {
                            setResults(undefined);
                        }
                        setIsLoading(false);

                    } catch (err) {
                        alert('Refresh page to get Jobs');
                    }
                }
            }
        }
        fetchResults();

    }, [currentPage, selectedCountry, jobResult, selectedCareerType, selectedLocation]);

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

            {showPaginationComponent &&
                <JobsHubPagination totalPages={prevPageTotal.current} setCurrentPage={setCurrentPage} />
            }



        </div>
    )
}

export default JobsHubWrapper