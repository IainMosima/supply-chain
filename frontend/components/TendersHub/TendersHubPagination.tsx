'use client';
import { TenderResult } from "@/models/Tenders";
import { getTendersResults } from "@/network/Tenders";
import React from "react";
import PaginationComponent from "../Pagination/Pagination";

interface JobsHubPaginationProps {
  country: string,
  location?: string,
  totalPages?: number,
  setResults: React.Dispatch<React.SetStateAction<TenderResult | null>>,
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>,
}

const TendersHubPagination = ({ country, location, totalPages, setResults, setIsLoading }: JobsHubPaginationProps) => {
  const handlePage = async (event: React.ChangeEvent<unknown>, page: number) => {
    setIsLoading(true);
    setResults(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    try {
      const res = await getTendersResults(country, page, location);
      if (res && res.tenders.length > 0) {
        setResults(res);
      } else {
        setResults(null);
      }
      setIsLoading(false);
    } catch (error) {
      alert('Refresh Page to get Tenders Information');
    }


  };
  return <PaginationComponent handlePage={handlePage} count={totalPages} />;
};

export default TendersHubPagination;
