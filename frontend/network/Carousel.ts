import { Carousel } from "@/models/Carousel";
import { fetchData } from "./FetchData";

export async function getCarouselImages(): Promise<Carousel[]> {
    const response = await fetchData(`${process.env.BACKENDIP}/api/unsecured/images`, { method: 'GET', cache: 'no-store' });
    if (response) return response.json();
    return [];
}