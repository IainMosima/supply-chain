import { Services } from "@/models/Services";
import { fetchData } from "./FetchData";

export async function getAllServices(): Promise<Services[] | []> {
<<<<<<< HEAD
    const response = await fetchData(`${process.env.BACKENDIP}/api/services`, { method: 'GET', cache: 'no-store' });
=======
    const response = await fetchData(`${process.env.BACKENDIP}/api/services`, { method: 'GET', next: { revalidate: 60 } });
>>>>>>> testing
    if (response) return response.json();
    return [];

}

<<<<<<< HEAD
export async function getRandomServices(): Promise<Services[]> {
    const response = await fetchData(`${process.env.BACKENDIP}/api/services/random`, { method: 'GET', cache: 'no-store' });
=======
export async function getRandomServices(): Promise<Services[] | []> {
    const response = await fetchData(`${process.env.BACKENDIP}/api/services/random`, { method: 'GET', next: { revalidate: 60 } });
>>>>>>> testing
    if (response) return response.json();
    return [];
}