'use client';
import React from "react";
import PaginationComponent from "../Pagination/Pagination";

const JobsHubPagination = () => {
  const handlePage = (event: React.ChangeEvent<unknown>, page: number) => {
    
  };
  return <PaginationComponent handlePage={handlePage}/>;
};

export default JobsHubPagination;
