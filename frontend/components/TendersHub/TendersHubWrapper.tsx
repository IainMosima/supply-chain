'use client';
import { TenderResult } from '@/models/Tenders';
import { useEffect, useState } from 'react';
import Loading from '../Loading/Loading';
import NoResultsHubs from '../NoResultsHubs/NoResultsHubs';
import TendersHub from '../TendersHub/TendersHub';
import TendersHubPagination from '../TendersHub/TendersHubPagination';
import SearchBar from './SearchBar';
import { getTendersResults } from '@/network/Tenders';

type Props = {
    params: {
        country: string[];
    };
    searchParams?: {
        pageNumber?: number,
        location?: string
    };
};

interface TendersHubWrapperProps {
    props: Props,
    tenderResult: TenderResult | undefined,
}
const TendersHubWrapper = ({ props, tenderResult }: TendersHubWrapperProps) => {
    const [results, setResults] = useState<TenderResult | null>(tenderResult || null);
    const [selectedLocation, setSelectedLocation] = useState<string>(props.searchParams?.location || '');
    const [currentPage, setCurrentPage] = useState(props.searchParams?.pageNumber || 1);
    const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {
      async function fetchResults() {
        setIsLoading(true);
        if (currentPage === 1 && !selectedLocation) {
            if (tenderResult) setResults(tenderResult);
        } else {
            setResults(null);
            let res: TenderResult | undefined;
            try {
                res = await getTendersResults(props.params.country[0], currentPage, selectedLocation);
                if (res && res.tenders.length > 0) {
                    setResults(res);
                } else {
                    setResults(null);
                }
                setIsLoading(false);
            } catch (error) {
                alert('Rrfresh page to get tenders');
            }
        }
      }
      fetchResults();
    }, [currentPage, props.params.country, selectedLocation, tenderResult])
    
    return (
        <div className="w-full p-1">
            <SearchBar country={props.params.country[0]} currentLocation={selectedLocation} setResults={setResults} intialResults={tenderResult} setSelectedLocation={setSelectedLocation} setIsLoading={setIsLoading} />

            {!results ? isLoading ? (<Loading />) : (<NoResultsHubs searchValue={selectedLocation} setResults={setResults} intialResults={tenderResult?.tenders} backLink={`/tenders-hub/${props.params.country}`} setSelectedLocation={setSelectedLocation} />) : (
                <TendersHub tenders={results?.tenders} />
            )}

            <TendersHubPagination totalPages={results?.totalPages ? results.totalPages : tenderResult?.totalPages} setIsLoading={setIsLoading} setCurrentPage={setCurrentPage}/>

        </div>

    );
}

export default TendersHubWrapper;