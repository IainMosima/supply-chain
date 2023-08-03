import { JobsHubPagination, SearchBarJobsHub } from "@/components";
import JobsHub from "@/components/JobsHub/JobsHub";
import JobsHubSelector from "@/components/JobsHub/JobsHubSelector";
import { getCareerTypes, getJobResults } from "@/network/Jobs";


const fetchCareerTypes = async (): Promise<string[]> => {
  const carreerTypes = await getCareerTypes();
  return ['All', ...carreerTypes.map(type => type.careerType)];
}


type Props = {
  params: {
    country: string[];
  };
  searchParams?: {
    pageNumber?: number,
    careerType?: string,
    location?: string
  };
};

const page = async (props: Props) => {
  const careerTypesData = fetchCareerTypes();
  const jobsData = getJobResults(props.params.country[0], props.searchParams?.pageNumber, props.searchParams?.careerType, props.searchParams?.location);
  const [careerTypes, jobs] = await Promise.all([careerTypesData, jobsData]);

  return (
    <div className="w-full p-1">
      <SearchBarJobsHub country={props.params.country[0]} careerType={props.searchParams?.careerType}/>
      <JobsHubSelector selectedCareerType={props.searchParams?.careerType ? props.searchParams?.careerType : 'All'} country={props.params.country[0]} careerTypes={careerTypes} location={props.searchParams?.location}/>
      <JobsHub jobs={jobs?.jobs} />
      {jobs && jobs.totalPages > 2 &&
        <JobsHubPagination country={props.params.country[0]} careerType={props.searchParams?.careerType} totalPages={jobs?.totalPages} />

      }
    </div>
  );
};

export default page;
