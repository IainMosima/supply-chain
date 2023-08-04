import { TenderResult } from "@/models/Tenders";
import { fetchData } from "./FetchData";
import ConvertToTitleCase from "@/utils/ConvertToTitleCase";

export async function getTendersResults(country:string, pageNumber?:number, location?:string, pageSize=10): Promise<TenderResult | undefined> {
    let response: Response | undefined;
    if (!pageNumber) pageNumber = 1;
    if (location) {
        response = await fetchData(`${process.env.BACKENDIP}/api/${ConvertToTitleCase(country)}?pageSize=${pageSize}&pageNumber=${pageNumber}&location=${location}`);
    } else {
        response = await fetchData(`${process.env.BACKENDIP}/api/${ConvertToTitleCase(country)}?pageSize=${pageSize}&pageNumber=${pageNumber}`);
    }
        
       
    if (response) {
        return response.json();
    }
    
}