import React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

interface PaginationComponentProps {
  handlePage: (event: React.ChangeEvent<unknown>, page: number) => void;
  count?: number
}

const PaginationComponent = ({ handlePage, count }: PaginationComponentProps) => {
  return (
    <Stack direction="row" justifyContent="flex-end" spacing={2} sx={{ mt: 2 }}>
      <Pagination
        count={count}
        variant="outlined"
        onChange={handlePage}
        color="primary"
      />
    </Stack>
  );
};

export default PaginationComponent;
