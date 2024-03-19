import BlogPage from '@/components/KnowledgeHub/BlogPage'
import { getBlog } from '@/network/Blog';
import React from 'react'

async function getAblog(id: string) {
  const blog = await getBlog(id);
  return blog;
}


const page = async ({ params }: { params: {blogId: string} }) => {
  const blogData = await getAblog(params.blogId);
    const [blog] = await Promise.all([blogData]);

    
  return (
    <BlogPage blogId={params.blogId} />
  )
}

export default page