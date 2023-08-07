import { TenderResult } from "@/models/Tenders";
import { fetchData } from "./FetchData";
import ConvertToTitleCase from "@/utils/ConvertToTitleCase";

export async function getTendersResults(server:boolean, country:string, pageNumber?:number, location?:string, pageSize=10): Promise<TenderResult | undefined> {
    let response: Response | undefined;
    if (!pageNumber) pageNumber = 1;
    if (server) {
        if (location) {
            response = await fetchData(`${process.env.BACKENDIP}/api/tenders/${ConvertToTitleCase(country)}?pageSize=${pageSize}&pageNumber=${pageNumber}&location=${location}`);
        } else {
            response = await fetchData(`${process.env.BACKENDIP}/api/tenders/${ConvertToTitleCase(country)}?pageSize=${pageSize}&pageNumber=${pageNumber}`);
    
        }
    } else {
        if (location) {
            response = await fetchData(`/api/tenders/${ConvertToTitleCase(country)}?pageSize=${pageSize}&pageNumber=${pageNumber}&location=${location}`);
        } else {
            response = await fetchData(`/api/tenders/${ConvertToTitleCase(country)}?pageSize=${pageSize}&pageNumber=${pageNumber}`);
    
        }
    }
        
       
    if (response) {
        return response.json();
    }
    
}