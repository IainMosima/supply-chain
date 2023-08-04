import { SearchBarTendersHub, TendersHubPagination } from "@/components";
import TendersHub from "@/components/TendersHub/TendersHub";
import { getCareerTypes } from "@/network/Jobs";
import { getTendersResults } from "@/network/Tenders";


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
    location?: string
  };
};

const page = async (props: Props) => {
  const tenders = await getTendersResults(props.params.country[0], props.searchParams?.pageNumber, props.searchParams?.location);
  

  return (
    <div className="w-full p-1">
      <SearchBarTendersHub country={props.params.country[0]}/>
      <TendersHub tenders={tenders?.tenders} />
      {tenders && tenders.totalPages > 2 &&
        <TendersHubPagination country={props.params.country[0]} totalPages={tenders.totalPages} />

      }
    </div>
  );
};

export default page;
