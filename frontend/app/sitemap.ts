import { MetadataRoute } from 'next';

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
            url: 'https://www.supplychainsolutionshub.com/jobs-hub/Kenya',
            lastModified: new Date(),
        },
        {
            url: 'https://www.supplychainsolutionshub.com/tenders-hub/Kenya',
            lastModified: new Date(),
        },
        {
            url: 'https://www.supplychainsolutionshub.com/contact-us',
            lastModified: new Date(),
        },
    ]
}