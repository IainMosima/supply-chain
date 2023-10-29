import { MetadataRoute } from 'next'
 
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/terms-and-conditions/', '/privacy-and-cookie-policy/', '/contact-us'],
    },
    sitemap: 'https://www.supplychainsolutionshub.com/sitemap.xml',
  }
}