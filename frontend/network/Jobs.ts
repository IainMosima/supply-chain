import { CareerType } from "@/models/Jobs";
import { fetchData } from "./FetchData";

export async function getCareerTypes(): Promise<CareerType[]> {
    const response = await fetchData(`${process.env.BACKENDIP}/api/careers`, { method: 'GET', cache: 'no-store' });
    if (response) return response.json();
    return [];
}