import { Services } from "@/models/Services";
import { fetchData } from "./fetchData";

export async function getAllServices(): Promise<Services[] | []> {
    const response = await fetchData('/api/services', { method: 'GET' });
    if (response) return response.json();
    return [];

}

export async function getRandomServices(): Promise<Services[]> {
    const response = await fetchData('/api/services/random', { method: 'GET' });
    if (response) return response.json();
    return [];
}

export function imageStreamer(key: string) {
    const url = `https://e-soko.s3.amazonaws.com/${key}`;
    return url;
}
// https://e-soko.s3.amazonaws.com/1fe5dd9a1f3017044e3a1024a6c4dbd7