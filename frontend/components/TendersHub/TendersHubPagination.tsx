'use client';
import React from "react";
import PaginationComponent from "../Pagination/Pagination";
import { useRouter } from "next/navigation";

interface JobsHubPaginationProps {
  country?: string,
  location?: string,
  totalPages?: number
}

const TendersHubPagination = ({ country, location, totalPages }: JobsHubPaginationProps) => {
  const navigation = useRouter();
  const handlePage = (event: React.ChangeEvent<unknown>, page: number) => {
      if(location) {
        navigation.push(`/tenders-hub/${country}?pageNumber=${page}&location=${location}`);
      } else {
        navigation.push(`/tenders-hub/${country}?pageNumber=${page}`);
      }
      return window.scrollTo({top: 0, behavior: 'smooth'});


  };
  return <PaginationComponent handlePage={handlePage} count={totalPages && totalPages > 0 ? totalPages -1 : totalPages } />;
};

export default TendersHubPagination;
