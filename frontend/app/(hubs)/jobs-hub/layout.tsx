import { SearchBarJobsHub } from "@/components";
import JobsHubSelector from "@/components/JobsHub/JobsHubSelector";
import Pagination from "@mui/material/Pagination";

import React, { Children } from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <SearchBarJobsHub />
      {children}
    </div>
  );
};

export default layout;
