import { Services } from "@/models/Services";
import { fetchData } from "./FetchData";

export async function getAllServices(): Promise<Services[] | []> {
    const response = await fetchData(`${process.env.BACKENDIP}/api/services`, { method: 'GET', next: { revalidate: 60 } });
    if (response) return response.json();
    return [];

}

export async function getRandomServices(): Promise<Services[] | []> {
    const response = await fetchData(`${process.env.BACKENDIP}/api/services/random`, { method: 'GET', next: { revalidate: 60 } });
    if (response) return response.json();
    return [];
}