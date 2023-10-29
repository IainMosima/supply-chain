'use client';
import { TenderResult } from '@/models/Tenders';
import { useEffect, useRef, useState } from 'react';
import Loading from '../Loading/Loading';
import NoResultsHubs from '../NoResultsHubs/NoResultsHubs';
import TendersHub from '../TendersHub/TendersHub';
import TendersHubPagination from '../TendersHub/TendersHubPagination';
import SearchBar from './SearchBar';
import { getTendersResults } from '@/network/Tenders';
import { useAppDispatch, useAppSelector } from '@/hooks/reduxHook';
import { Country } from '@/models/Country';
import { setSelectedCountry } from '@/redux/reducers/countryReducer';

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
    tenderResult: TenderResult | undefined,
    countries: Country[],
    country: string
}
const TendersHubWrapper = ({ countries, country, tenderResult }: TendersHubWrapperProps) => {
    const [results, setResults] = useState<TenderResult | null>(tenderResult || null);
    const [selectedLocation, setSelectedLocation] = useState<string>('');
    const [currentPage, setCurrentPage] = useState(1);
    const [isLoading, setIsLoading] = useState(false);
    const selectedCountry = useAppSelector(state => state.selectedCountry.selectedCountry?.countryName) || process.env.DEFAULT_COUNTRY;
    const [showPaginationComponent, setShowPaginationComponent] = useState(true);
    const prevPageTotal = useRef(tenderResult?.totalItems);
    const dispatch = useAppDispatch();


    useEffect(() => {
        if (selectedCountry) {
            dispatch(setSelectedCountry(countries.filter(item => item.countryName === country)[0]));
        }

        async function fetchResults() {
            if (selectedCountry) {
                setIsLoading(true);
                if (currentPage === 1 && !selectedLocation) {
                    if (tenderResult) setResults(tenderResult);
                } else {
                    setResults(null);
                    let res: TenderResult | undefined;
                    try {
                        res = await getTendersResults(false, selectedCountry, currentPage - 1, selectedLocation);
                        if (res && res.tenders.length > 0) {
                            setResults(res);
                            if (prevPageTotal.current === res.totalPages) {
                                setShowPaginationComponent(true);
                            } else {
                                setShowPaginationComponent(false);
                                prevPageTotal.current = res.totalPages;
                                setShowPaginationComponent(true);
                            }
                        } else {
                            setResults(null);
                        }
                        setIsLoading(false);
                    } catch (error) {
                        alert('Rrfresh page to get tenders');
                    }
                }
            }
        }
        fetchResults();
    }, [countries, country, currentPage, dispatch, selectedCountry, selectedLocation, tenderResult]);


    return (
        <div className="w-full p-1">
            <SearchBar country={selectedCountry} currentLocation={selectedLocation} setResults={setResults} intialResults={tenderResult} setSelectedLocation={setSelectedLocation} setIsLoading={setIsLoading} />

            {!results ? isLoading ? (<Loading />) : (<NoResultsHubs searchValue={selectedLocation} setResults={setResults} intialResults={tenderResult?.tenders} backLink={`/tenders-hub/${selectedCountry}`} setSelectedLocation={setSelectedLocation} />) : (
                <TendersHub tenders={results?.tenders} />
            )}

            {showPaginationComponent &&
                <TendersHubPagination totalPages={results?.totalPages ? results.totalPages : tenderResult?.totalPages} setIsLoading={setIsLoading} setCurrentPage={setCurrentPage} />
            }

        </div>

    );
}

export default TendersHubWrapper;