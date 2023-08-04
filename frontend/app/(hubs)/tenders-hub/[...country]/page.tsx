import { NoResults, SearchBarTendersHub, TendersHubPagination } from "@/components";
import TendersHub from "@/components/TendersHub/TendersHub";
import { getTendersResults } from "@/network/Tenders";

export const metadata = {
  title: 'Tenders Hub',
  description: 'Available Tenders',
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
      <SearchBarTendersHub country={props.params.country[0]} currentLocation={props.searchParams?.location || ''}/>
      {tenders && tenders.tenders.length > 0 ? (
        <>
          <TendersHub tenders={tenders?.tenders} />
          {tenders && tenders.totalPages > 2 &&
            <TendersHubPagination country={props.params.country[0]} totalPages={tenders.totalPages} />

          }
        </>
      ) : (<NoResults searchValue={props.searchParams?.location}/>)}
    </div>
  );
};

export default page;
