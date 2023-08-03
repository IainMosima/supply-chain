import { CareerType, JobResult } from "@/models/Jobs";
import { fetchData } from "./FetchData";

export async function getCareerTypes(): Promise<CareerType[]> {
    const response = await fetchData(`${process.env.BACKENDIP}/api/careers`, { method: 'GET', cache: 'no-store' });
    if (response) return response.json();
    return [];
}


export async function getJobResults(country?:string[], pageNumber?:number, careerType?:string, location?:string, pageSize=10,): Promise<JobResult | undefined> {
    let response: Response | undefined;
    if (!pageNumber) pageNumber = 1;
    if (careerType && !location) {
        if (careerType === 'All'){
            response = await fetchData(`${process.env.BACKENDIP}/api/jobs/${country}?pageSize=${pageSize}&pageNumber=${pageNumber}`, { method: 'GET', cache: 'no-store' });
        } else {
            response = await fetchData(`${process.env.BACKENDIP}/api/jobs/${country}?careerType=${careerType}&pageSize=${pageSize}&pageNumber=${pageNumber}`, { method: 'GET', cache: 'no-store' });
        }
    } else if (careerType && location) {
        response = await fetchData(`${process.env.BACKENDIP}/api/jobs/${country}?careerType=${careerType}&location=${location}&pageSize=${pageSize}&pageNumber=${pageNumber}`, { method: 'GET', cache: 'no-store' });
    } else {
        response = await fetchData(`${process.env.BACKENDIP}/api/jobs/${country}?pageSize=${pageSize}&pageNumber=${pageNumber}`, { method: 'GET' });
    }
    if (response) {
        return response.json();
    }
    
}