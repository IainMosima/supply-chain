import { StaticImageData } from "next/image";

export interface Blog {
    blogImage: StaticImageData,
    blogTitle: string,
    blogTime: string,
    blogAurthor: string,
}

export interface BlogCardInterface {
    category: string;
    mainBlog: {
        blogImage: StaticImageData;
        blogTitle: string;
        blogTime: string;
        blogAurthor: string;
    };
    blogs: {
        blogImage: StaticImageData;
        blogTitle: string;
        blogTime: string;
        blogAurthor: string;
    }[];
}