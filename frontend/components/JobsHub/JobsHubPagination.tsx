'use client';
import React from "react";
import PaginationComponent from "../Pagination/Pagination";
import { useRouter } from "next/navigation";

interface JobsHubPaginationProps {
  totalPages?: number,
  currentPage?: number,
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>
}

const JobsHubPagination = ({ totalPages, currentPage, setCurrentPage }: JobsHubPaginationProps) => {
  const navigation = useRouter();
  const handlePage = (event: React.ChangeEvent<unknown>, page: number) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setCurrentPage(page);
    // if (careerType && !location) {
    //   navigation.push(`/jobs-hub/${country}?pageNumber=${page}&careerType=${careerType}`);
    // } else if (careerType && location) {
    //   navigation.push(`/jobs-hub/${country}?pageNumber=${page}&careerType=${careerType}&location=${location}`);
    // } else {
    //   navigation.push(`/jobs-hub/${country}?pageNumber=${page}`);
    // }


  };
  return <PaginationComponent handlePage={handlePage} count={totalPages} currentPage={currentPage} />;
};

export default JobsHubPagination;
