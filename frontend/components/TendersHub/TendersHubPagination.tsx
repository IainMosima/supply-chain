'use client';
import { TenderResult } from "@/models/Tenders";
import { getTendersResults } from "@/network/Tenders";
import React from "react";
import PaginationComponent from "../Pagination/Pagination";

interface JobsHubPaginationProps {
  
  totalPages?: number,
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>,
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>
}

const TendersHubPagination = ({ totalPages, setIsLoading, setCurrentPage }: JobsHubPaginationProps) => {
  const handlePage = async (event: React.ChangeEvent<unknown>, page: number) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setCurrentPage(page);
    // setIsLoading(true);
    // setResults(null);
    // window.scrollTo({ top: 0, behavior: 'smooth' });
    // try {
    //   const res = await getTendersResults(country, page, location);
    //   if (res && res.tenders.length > 0) {
    //     setResults(res);
    //   } else {
    //     setResults(null);
    //   }
    //   setIsLoading(false);
    // } catch (error) {
    //   alert('Refresh Page to get Tenders Information');
    // }


  };
  return <PaginationComponent handlePage={handlePage} count={totalPages} />;
};

export default TendersHubPagination;
