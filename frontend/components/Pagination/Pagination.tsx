"use client";
import Pagination from "@mui/material/Pagination";
import React from "react";
import "./Pagination.scss";


const PaginationComponent = () => {
  const handlePage = (event: React.ChangeEvent<unknown>, page: number) => {
    console.log(page);
  };
  return (
    <div className="w-full app__pagination px-2 text-purple">
      <Pagination
        count={10}
        variant="outlined"
        onChange={handlePage}
      />
    </div>
  );
};

export default PaginationComponent;
