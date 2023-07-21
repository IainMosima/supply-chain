import React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

interface PaginationComponentProps {
  handlePage: (event: React.ChangeEvent<unknown>, page: number) => void;
}

const PaginationComponent = ({ handlePage }: PaginationComponentProps) => {
  return (
    <Stack direction="row" justifyContent="flex-end" spacing={2} sx={{ p: 2 }}>
      <Pagination
        count={10}
        variant="outlined"
        onChange={handlePage}
        color="primary"
      />
    </Stack>
  );
};

export default PaginationComponent;
