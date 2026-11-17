import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',
          '/preview/',
          '/applications/',
          '/_next/',
        ],
      },
    ],
    sitemap: 'https://www.livengage.com/sitemap.xml',
    host: 'https://www.livengage.com',
  };
}
