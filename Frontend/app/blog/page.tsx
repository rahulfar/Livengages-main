import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { blogService } from '@/lib/strapi/services/blogs';
import { getMediaUrl } from '@/lib/strapi/client';
import { BlogPost } from '@/types/blog';
import { ArrowRight, Calendar, ChevronLeft, ChevronRight, Sparkles, BookOpen, ShieldCheck, CheckCircle2 } from 'lucide-react';
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
    if (strapiRes?.data && strapiRes.data.length > 0) {
      realBlogs = strapiRes.data;
    }
  } catch (err) {
    console.warn('[BlogsPage] Strapi fetch failed, using curated blogs:', err);
  }

  // Use curated high-quality blogs as the baseline
  const allBlogs: BlogPost[] = DEFAULT_BLOGS;
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
    'Vone App (Poppo)',
    'Chill Chat (Chamet)',
    'Niki Live',
    'Agency Building',
    'Technical Setup',
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
          <h1 className="font-display-md text-4xl md:text-6xl leading-tight text-on-surface mb-6 tracking-tight">
            Live Streaming Host and Agency Guides
          </h1>
          
          {/* Comprehensive 300+ word educational introduction */}
          <div className="max-w-4xl space-y-4 text-on-surface-variant font-body-lg text-base md:text-lg leading-relaxed">
            <p>
              Welcome to the official <strong>Livengage Knowledge Base</strong>, the definitive educational resource for mobile live streaming broadcasters, digital talent, and agency leaders across India and South Asia. Our mission is to demystify creator monetization, eliminate operational hurdles, and provide actionable, honest blueprints for building a sustainable broadcasting career.
            </p>
            <p>
              The mobile live video ecosystem has evolved rapidly into a professional performance industry. Top partner applications—including <strong>Chill Chat (formerly Chamet)</strong>, <strong>Vone App (Poppo Live in India)</strong>, and <strong>Niki Live</strong>—offer direct monetization pathways where talent earns through private 1-on-1 calls, interactive party rooms, and virtual gift conversions. However, achieving consistent weekly payouts requires more than simply tapping "Go Live." Success depends on studio lighting, camera height, audience retention, and understanding the nuances of platform algorithms.
            </p>
            <p>
              Whether you are an aspiring host looking to complete your initial identity verification, an experienced broadcaster aiming to double your weekly bean quota, or an ambitious entrepreneur building an agency roster of 50+ streamers, our comprehensive guides below provide step-by-step instructions. Every article is written by experienced talent strategists with verified platform experience, ensuring you receive compliant, up-to-date guidance with zero deceptive claims.
            </p>
          </div>
        </div>

        {/* Category Filters */}
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
                    <span>{featuredBlog.author || 'Priya Sharma'}</span>
                  </div>
                  <h2 className="font-display-md text-2xl md:text-4xl text-on-surface group-hover:text-primary transition-colors leading-tight">
                    {featuredBlog.title}
                  </h2>
                  <p className="font-body-md text-on-surface-variant text-base md:text-lg line-clamp-3 leading-relaxed">
                    {featuredBlog.excerpt}
                  </p>
                  <div className="flex items-center gap-6 pt-4 text-sm text-on-surface-variant">
                    {featuredBlog.publishedDate && (
                      <span className="flex items-center gap-1.5">
                        <Calendar className="w-4 h-4" />
                        {new Date(featuredBlog.publishedDate).toLocaleDateString('en-US', {
                          month: 'short',
                          day: 'numeric',
                          year: 'numeric',
                        })}
                      </span>
                    )}
                    <span className="flex items-center gap-1.5 text-primary font-semibold group-hover:translate-x-1 transition-transform">
                      Read Full Guide <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
                <div className="lg:col-span-5 relative h-64 md:h-80 rounded-2xl overflow-hidden bg-surface-container">
                  {featuredBlog.coverImage?.url && (
                    <Image
                      src={getMediaUrl(featuredBlog.coverImage.url) || featuredBlog.coverImage.url}
                      alt={featuredBlog.coverImage.alternativeText || featuredBlog.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  )}
                </div>
              </div>
            </Link>
          </div>
        )}

        {/* Regular Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {regularBlogs.map((blog) => (
            <Link
              key={blog.id || blog.slug}
              href={getBlogUrl(blog)}
              className="group flex flex-col rounded-3xl overflow-hidden glass-card border border-outline-variant/30 dark:border-white/10 hover:border-primary/50 transition-all duration-300 shadow-sm hover:shadow-lg hover:-translate-y-1"
            >
              <div className="relative h-52 bg-surface-container overflow-hidden">
                {blog.coverImage?.url ? (
                  <Image
                    src={getMediaUrl(blog.coverImage.url) || blog.coverImage.url}
                    alt={blog.coverImage.alternativeText || blog.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-primary/5 text-primary">
                    <BookOpen className="w-8 h-8" />
                  </div>
                )}
              </div>
              <div className="flex-1 p-6 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-3 text-xs text-on-surface-variant font-medium">
                    {blog.publishedDate && (
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" />
                        {new Date(blog.publishedDate).toLocaleDateString('en-US', {
                          month: 'short',
                          day: 'numeric',
                          year: 'numeric',
                        })}
                      </span>
                    )}
                    {blog.author && (
                      <>
                        <span className="w-1 h-1 rounded-full bg-outline-variant" />
                        <span>{blog.author}</span>
                      </>
                    )}
                  </div>
                  <h3 className="font-display-sm text-xl text-on-surface group-hover:text-primary transition-colors line-clamp-2 leading-snug">
                    {blog.title}
                  </h3>
                  <p className="font-body-sm text-sm text-on-surface-variant line-clamp-3 leading-relaxed">
                    {blog.excerpt}
                  </p>
                </div>
                <div className="pt-2 flex items-center text-primary text-sm font-semibold group-hover:translate-x-1 transition-transform">
                  Read Article <ArrowRight className="w-4 h-4 ml-1.5" />
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
                href={`/blog?page=${currentPage - 1}`}
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
                href={`/blog?page=${currentPage + 1}`}
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
