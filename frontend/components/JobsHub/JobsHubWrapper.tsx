'use client';
import { useAppDispatch, useAppSelector } from '@/hooks/reduxHook';
import { JobResult } from '@/models/Jobs';
import { getJobResults } from '@/network/Jobs';
import { useEffect, useRef, useState } from 'react';
import Loading from '../Loading/Loading';
import NoResultsHubs from '../NoResultsHubs/NoResultsHubs';
import JobsHub from './JobsHub';
import JobsHubPagination from './JobsHubPagination';
import JobsHubSelector from './JobsHubSelector';
import SearchBar from './SearchBar';
import { setSelectedCountry } from '@/redux/reducers/countryReducer';
import { Country } from '@/models/Country';

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
    country: string,
    careerTypes: string[],
    jobResult: JobResult | undefined,
    countries: Country[]
}

const JobsHubWrapper = ({ countries, country, careerTypes, jobResult }: JobsHubWrapperProps) => {
    const [results, setResults] = useState<JobResult | undefined>(jobResult || undefined);
    const [selectedLocation, setSelectedLocation] = useState<string>('');
    const [selectedCareerType, setSelectedCareerType] = useState<string>('All');
    const [currentPage, setCurrentPage] = useState(1);
    const [isLoading, setIsLoading] = useState(false);
    const prevPageTotal = useRef(jobResult?.totalPages);
    const [showPaginationComponent, setShowPaginationComponent] = useState(true);
    const selectedCountry = useAppSelector(state => state.selectedCountry.selectedCountry?.countryName) || process.env.DEFAULT_COUNTRY;
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (selectedCountry) {
            dispatch(setSelectedCountry(countries.filter(item => item.countryName === country)[0]));
        }
        async function fetchResults() {
            if (selectedCountry) {
                setIsLoading(true);
                if (selectedCareerType === 'All' && !selectedLocation && currentPage === 1) {
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

    }, [currentPage, selectedCountry, jobResult, selectedCareerType, selectedLocation, dispatch, countries, country]);

    return (
        <div className="w-full p-1">
            <SearchBar country={selectedCountry} currentLocation={selectedLocation} setResults={setResults} intialResults={results?.jobs || []} setSelectedLocation={setSelectedLocation} setIsLoading={setIsLoading} />

            <JobsHubSelector selectedCareerType={selectedCareerType} setSelectedCareerType={setSelectedCareerType} country={selectedCountry} careerTypes={careerTypes} location={selectedLocation} setResults={setResults} setIsLoading={setIsLoading} />


            {!results ? isLoading ? (<Loading />) : (
                <NoResultsHubs searchValue={selectedLocation} setResults={setResults} intialResults={results} backLink={`/jobs-hub/${selectedCountry}`} setSelectedLocation={setSelectedLocation} />
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