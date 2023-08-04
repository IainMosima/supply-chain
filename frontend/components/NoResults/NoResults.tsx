"use client";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context";
import { Images } from "../../constants";
import "./NoResults.scss";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface NoResultsProps {
  searchValue?: any,
  router?: AppRouterInstance
}

const NoResults = ({ searchValue }: NoResultsProps) => {
  const navigator = useRouter();
  return (
    <div className="app__no_results">
      <Image src={Images.binoculars} alt="binoculars" width={200} />

      <div>
        <h2>
          No Results Found for <span>{`"${searchValue}"`}</span>
        </h2>
        <h2>Tips:</h2>
        <ul className="list-disc">
          <li>Make sure that all words are spelled correctly.</li>
          <li>Try searching with short and simple keywords.</li>
          <li>Try different keywords.</li>
        </ul>
        <button onClick={()=>navigator.back()}>Try Again</button>
      </div>
    </div>
  );
};

export default NoResults;
