'use client';
import React from "react";
import PaginationComponent from "../Pagination/Pagination";
import { useRouter } from "next/navigation";
import { Tender, TenderResult } from "@/models/Tenders";
import { getTendersResults } from "@/network/Tenders";

interface JobsHubPaginationProps {
  country: string,
  location?: string,
  totalPages?: number,
  setResults: React.Dispatch<React.SetStateAction<TenderResult | null>>
}

const TendersHubPagination = ({ country, location, totalPages, setResults }: JobsHubPaginationProps) => {
  const navigation = useRouter();
  const handlePage = async (event: React.ChangeEvent<unknown>, page: number) => {
    setResults(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    try {
      const res = await getTendersResults(country, page, location);
      if (res) {
        setResults(res);
      } else {
        setResults(null);
      }
    } catch (error) {
      alert('Refresh Pageto get Tenders');
    }


  };
  return <PaginationComponent handlePage={handlePage} count={totalPages} />;
};

export default TendersHubPagination;
