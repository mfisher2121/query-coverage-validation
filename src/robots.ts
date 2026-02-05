import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/', // Block paths you don't want crawled
    },
    sitemap: 'https://mbraceflow.com/sitemap.xml',
  };
}