import { Country } from "@/models/Country";
import { fetchData } from "./FetchData";

export async function getAllCountries(server = false): Promise<Country[]> {
    if (server) {
        const response = await fetchData(`${process.env.BACKENDIP}/api/unsecured/countries`, { method: 'GET', next: { revalidate: 60 } });
        return response.json();
    } else {
        const response = await fetchData(`/api/unsecured/countries`, { method: 'GET' });
        return response.json();
    }
}