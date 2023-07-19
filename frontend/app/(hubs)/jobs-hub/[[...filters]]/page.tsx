import { JobsHubPagination, UnderConstruction } from "@/components";
import JobsHubSelector from "@/components/JobsHub/JobsHubSelector";


const page = ({ params }: { params: string[] }) => {
  
  return (
    <>
      <JobsHubSelector selectedCareerType={'Accounting & Finance'}/>
      <UnderConstruction />
      <JobsHubPagination/>
    </>
  );
};

export default page;
