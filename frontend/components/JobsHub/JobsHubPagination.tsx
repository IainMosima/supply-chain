'use client';
import React from "react";
import PaginationComponent from "../Pagination/Pagination";
import { useRouter } from "next/navigation";

interface JobsHubPaginationProps {
  country?: string,
  careerType?: string,
  location?: string,
  totalPages?: number
}

const JobsHubPagination = ({ country, careerType, location, totalPages }: JobsHubPaginationProps) => {
  const navigation = useRouter();
  const handlePage = (event: React.ChangeEvent<unknown>, page: number) => {
      if(careerType && !location) {
        navigation.push(`/jobs-hub/${country}?pageNumber=${page}&careerType=${careerType}`);
      } else if (careerType && location) {
        navigation.push(`/jobs-hub/${country}?pageNumber=${page}&careerType=${careerType}&location=${location}`);
      } else {
        navigation.push(`/jobs-hub/${country}?pageNumber=${page}`);
      }
      return window.scrollTo({top: 0, behavior: 'smooth'});


  };
  return <PaginationComponent handlePage={handlePage} count={totalPages && totalPages > 0 ? totalPages -1 : totalPages } />;
};

export default JobsHubPagination;
