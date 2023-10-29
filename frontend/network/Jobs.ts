import { CareerType, JobResult } from "@/models/Jobs";
import { fetchData } from "./FetchData";
import ConvertToTitleCase from "@/utils/ConvertToTitleCase";

export async function getCareerTypes(): Promise<CareerType[]> {
    const response = await fetchData(`${process.env.BACKENDIP}/api/unsecured/careers`, { next: { revalidate: 60 } });
    return response.json();
}


export async function getJobResults(server: boolean, country:string, pageNumber?:number, careerType?:string, location?:string, pageSize=10): Promise<JobResult | undefined> {
    let response: Response | undefined;
    if (!pageNumber) pageNumber = 0;
    if(server) {
        if (careerType && !location) {
            if (careerType === 'All'){
                response = await fetchData(`${process.env.BACKENDIP}/api/unsecured/jobs/${ConvertToTitleCase(country)}?pageSize=${pageSize}&pageNumber=${pageNumber}`, { next: { revalidate: 60 } });
            } else {
                response = await fetchData(`${process.env.BACKENDIP}/api/unsecured/jobs/${ConvertToTitleCase(country)}?careerType=${careerType}&pageSize=${pageSize}&pageNumber=${pageNumber}`, { next: { revalidate: 60 } });
            }
        } else if (!careerType && location) {
            
            response = await fetchData(`${process.env.BACKENDIP}/api/unsecured/jobs/${ConvertToTitleCase(country)}?location=${location}&pageSize=${pageSize}&pageNumber=${pageNumber}`, { next: { revalidate: 60 } });
        }
        else if (careerType && location) {
            if (careerType === 'All') {
                response = await fetchData(`${process.env.BACKENDIP}/api/unsecured/jobs/${ConvertToTitleCase(country)}?location=${ConvertToTitleCase(location)}&pageSize=${pageSize}&pageNumber=${pageNumber}`, { next: { revalidate: 60 } });
            } else {
                response = await fetchData(`${process.env.BACKENDIP}/api/unsecured/jobs/${ConvertToTitleCase(country)}?careerType=${careerType}&location=${ConvertToTitleCase(location)}&pageSize=${pageSize}&pageNumber=${pageNumber}`, { next: { revalidate: 60 } });
    
            }
           
        } else {
            response = await fetchData(`${process.env.BACKENDIP}/api/unsecured/jobs/${ConvertToTitleCase(country)}?pageSize=${pageSize}&pageNumber=${pageNumber}`, { next: { revalidate: 60 } });
        }
    } else {
        if (careerType && !location) {
            if (careerType === 'All'){
                response = await fetchData(`/api/unsecured/jobs/${ConvertToTitleCase(country)}?pageSize=${pageSize}&pageNumber=${pageNumber}`, { next: { revalidate: 60 } });
            } else {
                response = await fetchData(`/api/unsecured/jobs/${ConvertToTitleCase(country)}?careerType=${careerType}&pageSize=${pageSize}&pageNumber=${pageNumber}`, { next: { revalidate: 60 } });
            }
        } else if (!careerType && location) {
            
            response = await fetchData(`/api/unsecured/jobs/${ConvertToTitleCase(country)}?location=${location}&pageSize=${pageSize}&pageNumber=${pageNumber}`, { next: { revalidate: 60 } });
        }
        else if (careerType && location) {
            if (careerType === 'All') {
                response = await fetchData(`/api/unsecured/jobs/${ConvertToTitleCase(country)}?location=${ConvertToTitleCase(location)}&pageSize=${pageSize}&pageNumber=${pageNumber}`, { next: { revalidate: 60 } });
            } else {
                response = await fetchData(`/api/unsecured/jobs/${ConvertToTitleCase(country)}?careerType=${careerType}&location=${ConvertToTitleCase(location)}&pageSize=${pageSize}&pageNumber=${pageNumber}`, { next: { revalidate: 60 } });
    
            }
           
        } else {
            response = await fetchData(`${process.env.BACKENDIP}/api/unsecured/jobs/${ConvertToTitleCase(country)}?pageSize=${pageSize}&pageNumber=${pageNumber}`, { next: { revalidate: 60 } });
        }
    }
    if (response) {
        return response.json();
    }
    
}