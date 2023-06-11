import { Services } from "@/models/Services";
import { fetchData } from "./FetchData";
import { Carousel } from "@/models/Carousel";

export async function getCarouselImages(): Promise<Carousel[]> {
    const response = await fetchData('/api/images', { method: 'GET' });
    if (response) return response.json();
    return [];
}