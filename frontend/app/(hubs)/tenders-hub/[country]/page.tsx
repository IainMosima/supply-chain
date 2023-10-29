import TendersHubWrapper from "@/components/TendersHub/TendersHubWrapper";
import { getAllCountries } from "@/network/Countries";
import { getTendersResults } from "@/network/Tenders";


export const metadata = {
  title: 'Tenders Hub',
  description: 'Available Tenders',
}

export async function generateStaticParams() {
  const countries = await getAllCountries(true);

  return countries.map(item => ({
    item: item.countryName
}))
}



const page = async ({ params }: { params: { country: string } }) => {
  const tenders = await getTendersResults(true, params.country, 0);
  const countries = await getAllCountries(true);

  return (
   <TendersHubWrapper countries={countries} country={params.country} tenderResult={tenders}/>
  );
};

export default page;
