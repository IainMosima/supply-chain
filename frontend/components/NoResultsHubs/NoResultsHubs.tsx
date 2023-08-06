import { useRouter } from "next/navigation";
import { Images } from "../../constants";
import "./NoResults.scss";
import Image from "next/image";

interface NoResultsProps {
    searchValue?: any,
    setResults: React.Dispatch<React.SetStateAction<any>>,
    intialResults: any,
    backLink: string,
    setSelectedLocation: React.Dispatch<React.SetStateAction<string>>
}

const NoResultsHubs = ({ searchValue, setResults, intialResults, backLink, setSelectedLocation }: NoResultsProps) => {
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
                <button onClick={() => { navigator.push(backLink); setResults(intialResults); setSelectedLocation(''); window.location.href=backLink }}>Try Again</button>
            </div>
        </div>
    );
};

export default NoResultsHubs;