import KnowledgeHub from "@/components/KnowledgeHub/KnowledgeHub";
import { BlogCardInterface, Topic } from "@/models/Blog";
import { getMainBlog, getSampleBlogInterface, getTopics } from "@/network/Blog";

const fetchTopics = async (): Promise<Topic[]> => {
  const topics = await getTopics();
  return [{ categoryId: 'All', categoryName: "All" }, ...topics];
}

const fetchBlogCardInterfaces = async (): Promise<BlogCardInterface[]> => {
  let blogCardInterfaces: BlogCardInterface[] = [];
  const topics = await getTopics();

  for (const topic of topics) {
    await getSampleBlogInterface(topic.categoryName).then(res => blogCardInterfaces.push(res));
  }
  
  return blogCardInterfaces;
}

const Page = async ({ params }: { params: { topic: string } }) => {
  const topicsData = await fetchTopics();
  const mainBlogData = await getMainBlog(params.topic);
  const blogCardInterfacesData = await fetchBlogCardInterfaces();
  const [topics, blogCardInterfaces, mainBlog] = await Promise.all([topicsData, blogCardInterfacesData, mainBlogData]);

  return (
    <KnowledgeHub topics={topics} blogCardInterfaces={blogCardInterfaces} mainBlogData={mainBlogData}/>
  )
}

export default Page;