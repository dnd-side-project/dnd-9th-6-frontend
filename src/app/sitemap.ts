import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://www.classcope.co.kr',
      lastModified: new Date(),
      changeFrequency: 'weekly',
    },
    {
      url: 'https://www.classcope.co.kr/scope',
      lastModified: new Date(),
      changeFrequency: 'weekly',
    },
    {
      url: 'https://www.classcope.co.kr/lecture',
      lastModified: new Date(),
      changeFrequency: 'weekly',
    },
  ];
}
