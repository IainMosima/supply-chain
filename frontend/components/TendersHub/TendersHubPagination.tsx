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
  };
  return <PaginationComponent handlePage={handlePage} count={totalPages ? totalPages + 1 : 0} />;
};

export default TendersHubPagination;
