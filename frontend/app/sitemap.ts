import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: 'https://www.supplychainsolutionshub.com',
            lastModified: new Date(),
        },
        {
            url: 'https://www.supplychainsolutionshub.com/services',
            lastModified: new Date(),
        },
        {
            url: 'https://www.supplychainsolutionshub.com/jobs-hub',
            lastModified: new Date(),
        },
        {
            url: 'https://www.supplychainsolutionshub.com/tenders-hub',
            lastModified: new Date(),
        },
        {
            url: 'https://www.supplychainsolutionshub.com/contact-us',
            lastModified: new Date(),
        },
    ]
}