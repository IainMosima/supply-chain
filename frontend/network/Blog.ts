import { Blog, Topic } from "@/models/Blog";
import { fetchData } from "./FetchData";

// get all topics
export async function getTopics(): Promise<Topic[]> {
    const response = await fetchData(`${process.env.BACKENDIP}/api/unsecured/categories`, { method: 'GET', cache: 'no-store' });
    if (response) return response.json();
    return [];
}

// get blog based on id
export async function getBlog(blogId: string, ssr = true): Promise<Blog> {
    const response = await fetchData(`${ssr ? `${process.env.BACKENDIP}/api/unsecured/idblogs/${blogId}` : `/api/unsecured/idblogs/${blogId}`}`, { method: 'GET', cache: 'no-store' });
    return response.json();
}
