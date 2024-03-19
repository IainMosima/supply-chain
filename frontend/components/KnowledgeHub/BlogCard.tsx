import { Blog } from '@/models/Blog'
import Image from 'next/image'
import Link from 'next/link'

interface Props {
    blog: Blog
}

const BlogCard = (props: Props) => {
    return (
        <Link href={`/knowledge-hub/blog/${props.blog.blogId}`}>
            <div className='flex flex-col place-items-start'>
                <Image
                    src={`${process.env.NEXT_PUBLIC_BLOGSBUKCET}/${props.blog.blogImageKey}`}
                    alt={props.blog.blogTitle}
                    width={500}
                    height={500}
                />
                <p className=''>{props.blog.blogTitle}</p>
            </div>

        </Link>
    )
}

export default BlogCard