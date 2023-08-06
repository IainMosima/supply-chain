'use client';
import { TenderResult } from '@/models/Tenders';
import { useState } from 'react';
import Loading from '../Loading/Loading';
import NoResultsHubs from '../NoResultsHubs/NoResultsHubs';
import TendersHub from '../TendersHub/TendersHub';
import TendersHubPagination from '../TendersHub/TendersHubPagination';
import SearchBar from './SearchBar';

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


    return (
        <div className="w-full p-1">
            <SearchBar country={props.params.country[0]} currentLocation={props.searchParams?.location || ''} setResults={setResults} intialResults={tenderResult} selectedLocation={selectedLocation || ''}
                setSelectedLocation={setSelectedLocation} />

            {!results ? props.searchParams?.location ? (
                <NoResultsHubs searchValue={props.searchParams?.location} setResults={setResults} intialResults={tenderResult?.tenders} backLink={`/tenders-hub/${props.params.country}`} setSelectedLocation={setSelectedLocation} />
            ) : (<Loading />) : (
                <>
                    <TendersHub tenders={results?.tenders} />
                    <TendersHubPagination country={props.params.country[0]} totalPages={tenderResult?.totalPages} setResults={setResults} />
                </>
            )}


        </div>

    );
}

export default TendersHubWrapper;