import KnowledgeHub from "@/components/KnowledgeHub/KnowledgeHub";
import { Topic } from "@/models/Blog";
import { getTopics } from "@/network/Blog";

const fetchTopics = async (): Promise<Topic[]> => {
  const topics = await getTopics();
  return [{ categoryId: 'All', categoryName: "All" }, ...topics];
}

const Page = async () => {
  const topicsData = await fetchTopics();
  const [topics, ] = await Promise.all([topicsData]);
  return (
    <KnowledgeHub topics={topics}/>
  )
}

export default Page;