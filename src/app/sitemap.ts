import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://mbraceflow.com';

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changefreq: 'daily',
      priority: 1,
    },
  ];
}
