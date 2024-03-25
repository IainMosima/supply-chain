import { Blog, BlogCardInterface, Topic } from "@/models/Blog";
import { fetchData } from "./FetchData";

// get main blog
export async function getMainBlog(topic?: string | undefined, ssr= true): Promise<Blog> {
    let response;
    if (ssr) {
        response = await fetchData(`${topic ? `${process.env.BACKENDIP}/api/unsecured/blog?category=${topic}`:`${process.env.BACKENDIP}/api/unsecured/blog`}`, { method: 'GET', next :{ revalidate: 3600 } }
        );
        return response.json();
    }
    response = await fetchData(`${topic ? '/api/unsecured/blog?category=${category}' : `/api/unsecured/blog`}`, { method: 'GET' });
    return response.json();
}

// get all topics
export async function getTopics(): Promise<Topic[]> {
    const response = await fetchData(`${process.env.BACKENDIP}/api/unsecured/categories`, { method: 'GET', cache: 'no-store' });
    if (response) return response.json();
    return [];
}

// get blog based on id
export async function getBlog(blogId: string, ssr = true): Promise<Blog> {
    let response;
    if (ssr) {
        response = await fetchData(`${process.env.BACKENDIP}/api/unsecured/idblogs/${blogId}`, { method: 'GET', cache: 'no-store' }
        );
        return response.json();
    }
    response = await fetchData(`/api/unsecured/idblogs/${blogId}`, { method: 'GET' });
    return response.json();
}

// get sample topic blogs
export async function getSampleBlogInterface(topic: string): Promise<BlogCardInterface> {
    const response = await fetchData(`${process.env.BACKENDIP}/api/unsecured/categoryblogs/${topic}`, { method: 'GET', next: { revalidate: 3600 } });
    return response.json();
}

