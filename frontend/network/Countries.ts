import { Country } from "@/models/Country";
import { fetchData } from "./FetchData";

export async function getAllCountries(): Promise<Country[]> {
    const response = await fetchData(`/api/unsecured/countries`, { method: 'GET', cache: 'no-store' });
    return response.json();
}