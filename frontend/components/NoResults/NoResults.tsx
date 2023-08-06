"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Images } from "../../constants";
import "./NoResults.scss";

interface NoResultsProps {
  searchValue?: any,
  setResults: React.Dispatch<React.SetStateAction<any>>,
  intialResults: any,
  backLink: string
}

const NoResults = ({ searchValue, setResults, intialResults, backLink }: NoResultsProps) => {
  const navigator = useRouter();
  console.log(intialResults);
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
        <button onClick={()=>{ setResults(intialResults); navigator.push(backLink) }}>Try Again</button>
      </div>
    </div>
  );
};

export default NoResults;
