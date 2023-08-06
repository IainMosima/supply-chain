import TendersHubWrapper from "@/components/TendersHub/TendersHubWrapper";
import { getTendersResults } from "@/network/Tenders";


export const dynamic = 'force-static'

export const metadata = {
  title: 'Tenders Hub',
  description: 'Available Tenders',
}

// export async function generateStaticParams() {
//   return [{
//     country: ['Kenya']
//   },
//   {
//     country: ['Tanzania']
//   }
//   ]
// }

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
  const tenders = await getTendersResults(props.params.country[0]);


  return (
   <TendersHubWrapper props={props} tenderResult={tenders}/>
  );
};

export default page;
