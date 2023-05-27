import Link from "next/link";
import { Images } from "../../constants";
import "./NoResults.scss";
import Image from "next/image";


const NoResults = (query: any) => {
    return ( 
        <div className="app__no_results">
            <Image src={Images.binoculars} alt="binoculars" width={200}/>

            <div>
                <h2>No Results Found for <span>{`"${query.query}"`}</span></h2>
                <h2>Tips:</h2>
                <ul>
                    <li>Make sure that all words are spelled correctly.
                    </li>
                    <li>Try searching with short and simple keywords.
                    </li>
                    <li>Try different keywords.</li>
                </ul>
                <button>Try Again</button>
            </div>
        </div>
     );
}
 
export default NoResults;