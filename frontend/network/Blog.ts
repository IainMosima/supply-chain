import { Blog, BlogCardInterface, Topic } from "@/models/Blog";
import { fetchData } from "./FetchData";

// get all topics
export async function getTopics(): Promise<Topic[]> {
    const response = await fetchData(`${process.env.BACKENDIP}/api/unsecured/categories`, { method: 'GET', cache: 'no-store' });
    if (response) return response.json();
    return [];
}

// get blog based on id
export async function getBlog(blogId: string, ssr = true): Promise<Blog> {
    if (ssr) {
        const response = await fetchData(`${process.env.BACKENDIP}/api/unsecured/idblogs/${blogId}`, { method: 'GET', cache: 'no-store' }
        );
        return response.json();
    }
    const response = await fetchData(`/api/unsecured/idblogs/${blogId}`, { method: 'GET' });
    return response.json();
}

// get sample topic blogs
export async function getSampleBlogInterface(topic: string): Promise<BlogCardInterface> {
    const response = await fetchData(`${process.env.BACKENDIP}/api/unsecured/categoryblogs/${topic}`, { method: 'GET', next: { revalidate: 3600 } });
    return response.json();
}