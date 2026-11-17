import { MetadataRoute } from 'next';
import { DEFAULT_BLOGS } from '@/data/blogs';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://www.livengage.com';
  const siteLastModified = new Date('2026-11-17T12:00:00Z');

  // 1. Core High-Priority Landing Pages
  const mainPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: siteLastModified,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/become-a-host`,
      lastModified: siteLastModified,
      changeFrequency: 'weekly',
      priority: 0.95,
    },
    {
      url: `${baseUrl}/become-an-agent`,
      lastModified: siteLastModified,
      changeFrequency: 'weekly',
      priority: 0.95,
    },
    {
      url: `${baseUrl}/agent-ecosystem`,
      lastModified: siteLastModified,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: siteLastModified,
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/growth-strategy`,
      lastModified: siteLastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/talent-recruitment`,
      lastModified: siteLastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/about-us`,
      lastModified: siteLastModified,
      changeFrequency: 'monthly',
      priority: 0.75,
    },
    {
      url: `${baseUrl}/contact-us`,
      lastModified: siteLastModified,
      changeFrequency: 'monthly',
      priority: 0.75,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: siteLastModified,
      changeFrequency: 'daily',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/earning-apps`,
      lastModified: siteLastModified,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/agent-help`,
      lastModified: siteLastModified,
      changeFrequency: 'weekly',
      priority: 0.75,
    },
    {
      url: `${baseUrl}/hi`,
      lastModified: siteLastModified,
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: new Date('2026-11-17T00:00:00Z'),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms-and-conditions`,
      lastModified: new Date('2026-11-17T00:00:00Z'),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ];

  // 2. Keyword-Rich Partner App Pages (poppo-live-agency is excluded until international copy is ready)
  const partnerAppPages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/vone-app-agency`,
      lastModified: siteLastModified,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/chill-chat-agency`,
      lastModified: siteLastModified,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/niki-live-agency`,
      lastModified: siteLastModified,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/chamet-agency`,
      lastModified: siteLastModified,
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/bigo-live-agency`,
      lastModified: siteLastModified,
      changeFrequency: 'weekly',
      priority: 0.85,
    },
  ];

  // 3. Four Canonical Blog Guides & Author Page
  const blogPages: MetadataRoute.Sitemap = DEFAULT_BLOGS.map((blog) => ({
    url: `${baseUrl}/blog/${blog.slug}`,
    lastModified: new Date(blog.updatedAt || blog.publishedDate || siteLastModified),
    changeFrequency: 'weekly' as const,
    priority: 0.75,
  }));

  const authorPages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/blog/author/priya-sharma`,
      lastModified: siteLastModified,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
  ];

  return [...mainPages, ...partnerAppPages, ...blogPages, ...authorPages];
}
