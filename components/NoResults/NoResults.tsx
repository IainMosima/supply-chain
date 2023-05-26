import Link from "next/link";
import { Images } from "../../constants";
import "./NoResults.scss";
import Image from "next/image";


const NoResults = (query: any) => {
    console.log(query);
    return ( 
        <div className="app__no_results">
            <Image src={Images.binoculars} alt="binoculars"/>

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
                <Link href='/services'>
                    <button>Go To Homepage</button>
                </Link>
            </div>
        </div>
     );
}
 
export default NoResults;