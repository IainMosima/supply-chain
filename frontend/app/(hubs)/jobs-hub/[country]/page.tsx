import JobsHubWrapper from "@/components/JobsHub/JobsHubWrapper";
import { getAllCountries } from "@/network/Countries";
import { getCareerTypes, getJobResults } from "@/network/Jobs";


export const metadata = {
  title: 'Jobs Hub',
  description: 'Search for a job and apply',
}

export async function generateStaticParams() {
  const countries = await getAllCountries(true);

  return countries.map(item => ({
    item: item.countryName
}))
}

const fetchCareerTypes = async (): Promise<string[]> => {
  const carreerTypes = await getCareerTypes();
  return ['All', ...carreerTypes.map(type => type.careerType)];
}



const page = async ({ params }: { params: { country: string } }) => {
  const careerTypes = await fetchCareerTypes();
  const jobs = await getJobResults(true, params.country);
  const countries = await getAllCountries(true);

  return (
    <JobsHubWrapper countries={countries} country={params.country} careerTypes={careerTypes} jobResult={jobs}/>
  );
};

export default page;