import { MetadataRoute } from 'next';
import { blogService } from '@/lib/strapi/services/blogs';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://www.livengage.com';
  const now = new Date();

  // 1. Core High-Priority Landing Pages
  const mainPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/become-a-host`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.95,
    },
    {
      url: `${baseUrl}/become-an-agent`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.95,
    },
    {
      url: `${baseUrl}/agent-ecosystem`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/growth-strategy`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/talent-recruitment`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/about-us`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.75,
    },
    {
      url: `${baseUrl}/contact-us`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.75,
    },
    {
      url: `${baseUrl}/blogs`,
      lastModified: now,
      changeFrequency: 'daily',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: now,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms-and-conditions`,
      lastModified: now,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ];

  // 2. Keyword-Rich Partner App Pages (Item 5 in audit)
  const partnerAppPages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/vone-app-agency`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/chill-chat-agency`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/niki-live-agency`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/poppo-live-agency`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
  ];

  // 3. Dynamic Blog Pages
  let dynamicBlogPages: MetadataRoute.Sitemap = [];
  try {
    const strapiRes = await blogService.getBlogs(1, 100);
    const blogs = strapiRes?.data || [];

    dynamicBlogPages = blogs.map((blog) => {
      const titleSlug = (blog.title || 'post')
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)/g, '');
      const urlSlug = blog.documentId ? `${titleSlug}--${blog.documentId}` : titleSlug;

      return {
        url: `${baseUrl}/blogs/${urlSlug}`,
        lastModified: new Date(blog.updatedAt || blog.publishedAt || now),
        changeFrequency: 'weekly' as const,
        priority: 0.7,
      };
    });
  } catch (error) {
    console.error('[Sitemap] Blog fetch failed', error);
  }

  return [...mainPages, ...partnerAppPages, ...dynamicBlogPages];
}
