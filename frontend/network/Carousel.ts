import { Services } from "@/models/Services";
import { fetchData } from "./FetchData";
import { Carousel } from "@/models/Carousel";

export async function getCarouselImages(): Promise<Carousel[]> {
<<<<<<< HEAD
    const response = await fetchData(`${process.env.BACKENDIP}/api/images`, { method: 'GET', cache: 'no-store' });
=======
    const response = await fetchData(`${process.env.BACKENDIP}/api/images`, { method: 'GET', next: { revalidate: 60 } });
>>>>>>> testing
    if (response) return response.json();
    return [];
}