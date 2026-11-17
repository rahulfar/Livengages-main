import { Metadata } from 'next';
import Link from 'next/link';
import { blogService } from '@/lib/strapi/services/blogs';
import { getMediaUrl } from '@/lib/strapi/client';
import { BlogPost } from '@/types/blog';
import { ArrowRight, Calendar, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';
import { BreadcrumbJsonLd } from '@/components/JsonLd';
import { DEFAULT_BLOGS } from '@/data/blogs';
import { PartnerApps } from '@/components/PartnerApps';
import { EXACT_FEATURED_PARTNER_APPS } from '@/data/featured-partner-apps';

const getBlogUrl = (blog: BlogPost) => {
  if (blog.slug) return `/blog/${blog.slug}`;
  const titleSlug = (blog.title || 'post')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
  return `/blog/${titleSlug}`;
};

export const revalidate = 60;

export const metadata: Metadata = {
  title: 'Live Streaming Host & Agency Guides | Livengage',
  description:
    'Free guides for live streaming hosts and agents: how to earn on Vone and Chill Chat, payouts in India, camera setup and growing your agency.',
  alternates: {
    canonical: 'https://www.livengage.com/blog',
  },
  openGraph: {
    title: 'Live Streaming Host & Agency Guides | Livengage',
    description:
      'Free guides for live streaming hosts and agents: how to earn on Vone and Chill Chat, payouts in India, camera setup and growing your agency.',
    url: 'https://www.livengage.com/blog',
    siteName: 'Livengage',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Live Streaming Host & Agency Guides | Livengage',
    description:
      'Free guides for live streaming hosts and agents: how to earn on Vone and Chill Chat, payouts in India, camera setup and growing your agency.',
    images: ['/og-image.png'],
  },
};

interface BlogsPageProps {
  searchParams: Promise<{ page?: string; category?: string }>;
}

export default async function BlogsPage({ searchParams }: BlogsPageProps) {
  const resolvedSearchParams = await searchParams;
  const currentPage = Math.max(1, parseInt(resolvedSearchParams.page || '1', 10));
  const PAGE_SIZE = 9;

  let realBlogs: BlogPost[] = [];
  try {
    const strapiRes = await blogService.getBlogs(currentPage, PAGE_SIZE);
    realBlogs = strapiRes?.data || [];
  } catch (err) {
    console.warn('[BlogsPage] Strapi fetch failed, using curated blogs:', err);
  }

  // Combine real Strapi blogs with curated default blogs to guarantee rich content
  const allBlogs: BlogPost[] = realBlogs.length > 0 ? realBlogs : DEFAULT_BLOGS;
  const totalBlogs = allBlogs.length;
  const totalPages = Math.max(1, Math.ceil(totalBlogs / PAGE_SIZE));

  let featuredBlog: BlogPost | null = null;
  let regularBlogs: BlogPost[] = [];

  if (currentPage === 1) {
    featuredBlog = allBlogs[0] || null;
    regularBlogs = allBlogs.slice(1, PAGE_SIZE);
  } else {
    const startIndex = (currentPage - 1) * PAGE_SIZE;
    const endIndex = startIndex + PAGE_SIZE;
    regularBlogs = allBlogs.slice(startIndex, endIndex);
  }

  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Blog', url: '/blog' },
  ];

  const categories = [
    'All Insights',
    'Vone',
    'Chill Chat',
    'Niki Live',
    'Agents',
    'Hindi',
  ];

  return (
    <main className="min-h-screen relative overflow-hidden mesh-gradient">
      <BreadcrumbJsonLd items={breadcrumbs} />

      {/* Background Gradient Overlay */}
      <div className="absolute inset-0 bg-background/50 backdrop-blur-[100px] pointer-events-none z-0" />

      <div className="relative z-10 pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-12 text-center md:text-left relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold tracking-widest uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            Creator Hub & Agency Knowledge Base
          </div>
          <h1 className="font-display-md text-4xl md:text-6xl leading-tight text-on-surface mb-4 tracking-tight">
            Live Streaming Host and Agency Guides
          </h1>
          <p className="font-body-lg text-lg md:text-xl text-on-surface-variant max-w-2xl leading-relaxed">
            Free guides for live streaming hosts and agents: how to earn on Vone and Chill Chat, payouts in India, camera setup and growing your agency.
          </p>
        </div>

        {/* Category Filters (Item 38 in audit) */}
        <div className="flex flex-wrap gap-3 mb-12">
          {categories.map((cat, idx) => (
            <span
              key={cat}
              className={cn(
                'px-5 py-2.5 rounded-full text-sm font-semibold transition-all cursor-pointer select-none',
                idx === 0
                  ? 'bg-primary text-white shadow-md shadow-primary/25'
                  : 'glass-card border border-outline-variant/30 dark:border-white/10 text-on-surface dark:text-white/80 hover:text-primary hover:border-primary/40'
              )}
            >
              {cat}
            </span>
          ))}
        </div>

        {/* Featured Blog */}
        {featuredBlog && currentPage === 1 && (
          <div className="mb-16">
            <Link
              href={getBlogUrl(featuredBlog)}
              className="group block relative rounded-3xl overflow-hidden glass-card border border-outline-variant/30 dark:border-white/10 hover:border-primary/50 transition-all duration-500 shadow-xl"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-6 md:p-10">
                <div className="lg:col-span-7 space-y-4">
                  <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-wider text-primary">
                    <span>Featured Article</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    <span>{featuredBlog.author || 'Livengage Team'}</span>
                  </div>
                  <h2 className="font-display-md text-3xl md:text-4xl lg:text-5xl font-black text-on-surface dark:text-white group-hover:text-primary transition-colors leading-tight">
                    {featuredBlog.title}
                  </h2>
                  <p className="text-on-surface-variant dark:text-[#94A3B8] text-base md:text-lg line-clamp-3 leading-relaxed">
                    {featuredBlog.excerpt}
                  </p>
                  <div className="pt-4 flex items-center text-primary font-bold text-sm tracking-wider uppercase">
                    Read Full Guide
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1.5 transition-transform" />
                  </div>
                </div>

                <div className="lg:col-span-5 relative h-[280px] md:h-[340px] rounded-2xl overflow-hidden bg-surface-container">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={getMediaUrl(featuredBlog.coverImage?.url) || featuredBlog.coverImage?.url || '/og-image.png'}
                    alt={featuredBlog.coverImage?.alternativeText || featuredBlog.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
            </Link>
          </div>
        )}

        {/* Regular Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {regularBlogs.map((blog) => (
            <Link
              key={blog.documentId || blog.id}
              href={getBlogUrl(blog)}
              className="group flex flex-col glass-card rounded-3xl overflow-hidden border border-outline-variant/30 dark:border-white/10 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1.5 shadow-lg"
            >
              <div className="relative h-56 w-full overflow-hidden bg-surface-container">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={getMediaUrl(blog.coverImage?.url) || blog.coverImage?.url || '/og-image.png'}
                  alt={blog.coverImage?.alternativeText || blog.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="p-8 flex flex-col flex-grow">
                <div className="flex items-center gap-2 text-xs text-on-surface-variant dark:text-[#94A3B8] mb-3">
                  <Calendar className="w-3.5 h-3.5 text-primary" />
                  <span>
                    {blog.publishedDate
                      ? new Date(blog.publishedDate).toLocaleDateString('en-US', {
                          month: 'short',
                          day: 'numeric',
                          year: 'numeric',
                        })
                      : 'Recent'}
                  </span>
                  <span>•</span>
                  <span>{blog.author || 'Editorial'}</span>
                </div>

                <h3 className="font-display-md text-xl md:text-2xl text-on-surface dark:text-white font-bold mb-3 group-hover:text-primary transition-colors leading-tight line-clamp-2">
                  {blog.title}
                </h3>

                <p className="font-body text-on-surface-variant dark:text-[#94A3B8] line-clamp-3 mb-6 text-sm leading-relaxed flex-grow">
                  {blog.excerpt}
                </p>

                <div className="flex items-center text-primary font-bold text-sm tracking-wider uppercase mt-auto">
                  Read Article
                  <ArrowRight className="w-4 h-4 ml-1.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="mt-16 flex items-center justify-center gap-2">
            {currentPage > 1 && (
              <Link
                href={`/blogs?page=${currentPage - 1}`}
                className="px-5 py-2.5 rounded-full glass-card border border-outline-variant/30 dark:border-white/10 text-sm font-semibold flex items-center gap-2 hover:border-primary"
              >
                <ChevronLeft className="w-4 h-4" /> Previous
              </Link>
            )}
            <span className="px-4 py-2 text-sm text-on-surface-variant dark:text-[#94A3B8]">
              Page {currentPage} of {totalPages}
            </span>
            {currentPage < totalPages && (
              <Link
                href={`/blogs?page=${currentPage + 1}`}
                className="px-5 py-2.5 rounded-full glass-card border border-outline-variant/30 dark:border-white/10 text-sm font-semibold flex items-center gap-2 hover:border-primary"
              >
                Next <ChevronRight className="w-4 h-4" />
              </Link>
            )}
          </div>
        )}
      </div>

      <PartnerApps data={{ heading: "Featured Partner Apps", apps: EXACT_FEATURED_PARTNER_APPS }} />
    </main>
  );
}
