import { CareerType, JobResult } from "@/models/Jobs";
import { fetchData } from "./FetchData";
import ConvertToTitleCase from "@/utils/ConvertToTitleCase";

export async function getCareerTypes(): Promise<CareerType[]> {
    const response = await fetchData(`${process.env.BACKENDIP}/api/careers`, { method: 'GET', cache: 'no-store' });
    if (response) return response.json();
    return [];
}


export async function getJobResults(country:string, pageNumber?:number, careerType?:string, location?:string, pageSize=10): Promise<JobResult | undefined> {
    let response: Response | undefined;
    if (!pageNumber) pageNumber = 1;
    if (careerType && !location) {
        if (careerType === 'All'){
            response = await fetchData(`${process.env.BACKENDIP}/api/jobs/${ConvertToTitleCase(country)}?pageSize=${pageSize}&pageNumber=${pageNumber}`, { method: 'GET', next: { revalidate: 3600 } });
        } else {
            response = await fetchData(`${process.env.BACKENDIP}/api/jobs/${ConvertToTitleCase(country)}?careerType=${careerType}&pageSize=${pageSize}&pageNumber=${pageNumber}`, { method: 'GET', next: { revalidate: 3600 } });
        }
    } else if (!careerType && location) {
    
        response = await fetchData(`${process.env.BACKENDIP}/api/jobs/${ConvertToTitleCase(country)}?location=${location}&pageSize=${pageSize}&pageNumber=${pageNumber}`, { method: 'GET', next: { revalidate: 3600 } });
    }
     else if (careerType && location) {
        response = await fetchData(`${process.env.BACKENDIP}/api/jobs/${ConvertToTitleCase(country)}?careerType=${careerType}&location=${ConvertToTitleCase(location)}&pageSize=${pageSize}&pageNumber=${pageNumber}`, { method: 'GET', next: { revalidate: 3600 } });
        console.log(`${process.env.BACKENDIP}/api/jobs/${ConvertToTitleCase(country)}?careerType=${careerType}&location=${ConvertToTitleCase(location)}&pageSize=${pageSize}&pageNumber=${pageNumber}`)
    } else {
        response = await fetchData(`${process.env.BACKENDIP}/api/jobs/${ConvertToTitleCase(country)}?pageSize=${pageSize}&pageNumber=${pageNumber}`, { method: 'GET', next: { revalidate: 3600 } });
    }
    if (response) {
        return response.json();
    }
    
}