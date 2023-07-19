"use client";
import Pagination from "@mui/material/Pagination";
import React from "react";
import "./Pagination.scss";

interface PaginationComponentProps {
  handlePage: (event: React.ChangeEvent<unknown>, page: number) => void;
}

const PaginationComponent = ({ handlePage }: PaginationComponentProps) => {
  return (
    <div className="w-full app__pagination px-2 text-purple">
      <Pagination
        count={10}
        variant="outlined"
        onChange={handlePage}
        color="primary"
      />
    </div>
  );
};

export default PaginationComponent;
