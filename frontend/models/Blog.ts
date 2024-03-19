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
    mainBlog: Blog,
    blogs: Blog[],
}

export interface Topic {
    categoryId: string,
    categoryName: string
}