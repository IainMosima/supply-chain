import { MetadataRoute } from 'next';


export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    return [
        {
            url: 'https://www.supplychainsolutionshub.com/',
            lastModified: new Date(),
            changeFrequency: 'always',
            priority: 1,
        },
        {
            url: 'https://www.supplychainsolutionshub.com/services/',
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 0.8,
        },
        {
            url: 'https://www.supplychainsolutionshub.com/jobs-hub/Kenya',
            lastModified: new Date(),
            changeFrequency: 'always',
            priority: 1,
        },
        {
            url: 'https://www.supplychainsolutionshub.com/tenders-hub/Kenya',
            lastModified: new Date(),
            changeFrequency: 'always',
            priority: 1,
        },
        
    ]
}