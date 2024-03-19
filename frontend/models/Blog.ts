import { StaticImageData } from "next/image";

export interface Blog {
    blogId: string,
    blogImageKey: string,
    blogTitle: string,
    date: number
    author: string,
    category: string,
    blogBody: string,
    blogTimeCreated: string,
}

export interface BlogCardInterface {
    category: string;

    mainBlog: {
        blogImage: StaticImageData,
        blogTitle: string,
        blogTime: string,
        blogAurthor: string,
        category: string,
        date: string,
        blogBody: string
    };

    blogs: {
        blogImage: StaticImageData,
        blogTitle: string,
        blogTime: string,
        blogAurthor: string,
        category: string,
        date: string,
        blogBody: string
    }[];
}

export interface Topic {
    categoryId: string,
    categoryName: string
}