
import JobsHubWrapper from "@/components/JobsHub/JobsHubWrapper";
import { getCareerTypes, getJobResults } from "@/network/Jobs";


export const metadata = {
  title: 'Jobs Hub',
  description: 'Search for a job and apply',
}

export async function generateStaticParams() {
  return [{
    country: ['Kenya']
  },
  {
    country: ['Tanzania']
  }
  ]
}

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
    <JobsHubWrapper props={props} careerTypes={careerTypes} jobResult={jobs}/>
  );
};

export default page;