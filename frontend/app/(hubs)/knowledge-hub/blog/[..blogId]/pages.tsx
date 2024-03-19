import BlogPage from '@/components/KnowledgeHub/BlogPage'
import React from 'react'

const pages = ({ params }: { params: {blogId: string} }) => {
  return (
    <BlogPage blogId={params.blogId}/>
  )
}

export default pages