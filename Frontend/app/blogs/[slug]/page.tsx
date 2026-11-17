import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { blogService } from '@/lib/strapi/services/blogs';
import { getMediaUrl } from '@/lib/strapi/client';
import { BlogPost } from '@/types/blog';
import { RichTextRenderer } from '@/components/Blog/RichTextRenderer';
import { ArrowLeft, Calendar, User, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { BreadcrumbJsonLd, ArticleJsonLd } from '@/components/JsonLd';
import { DEFAULT_BLOGS } from '@/data/blogs';
import { PartnerApps } from '@/components/PartnerApps';
import { EXACT_FEATURED_PARTNER_APPS } from '@/data/featured-partner-apps';

interface Props {
  params: Promise<{ slug: string }>;
}

async function findBlog(slug: string): Promise<BlogPost | undefined> {
  const parts = slug.split('--');
  const documentId = parts.length > 1 ? parts[parts.length - 1] : slug;

  try {
    let strapiRes;
    if (parts.length > 1) {
      strapiRes = await blogService.getBlogByDocumentId(documentId);
    } else {
      strapiRes = await blogService.getBlogBySlug(slug);
    }
    if (strapiRes?.data?.[0]) {
      return strapiRes.data[0];
    }
  } catch (err) {
    console.warn('[BlogDetailPage] Strapi fetch failed, checking default blogs');
  }

  // Fallback to DEFAULT_BLOGS matching documentId or slug
  return DEFAULT_BLOGS.find(
    (b) =>
      b.documentId === documentId ||
      b.slug === slug ||
      slug.startsWith(b.slug) ||
      b.documentId === slug
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const blog = await findBlog(slug);

  if (!blog) {
    return {
      title: 'Guide Not Found',
    };
  }

  const canonicalUrl = `https://www.livengage.com/blogs/${slug}`;
  const imageUrl = getMediaUrl(blog.coverImage?.url) || blog.coverImage?.url || 'https://www.livengage.com/og-image.png';

  return {
    title: blog.title,
    description: blog.excerpt,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: `${blog.title} | Livengage`,
      description: blog.excerpt,
      url: canonicalUrl,
      siteName: 'Livengage',
      type: 'article',
      publishedTime: blog.publishedDate || '2026-11-01T00:00:00Z',
      modifiedTime: blog.updatedAt || blog.publishedDate || '2026-11-16T00:00:00Z',
      authors: [blog.author || 'Livengage Editorial Team'],
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: blog.title,
        },
      ],
      locale: 'en_IN',
    },
    twitter: {
      card: 'summary_large_image',
      title: blog.title,
      description: blog.excerpt,
      images: [imageUrl],
    },
  };
}

export default async function BlogDetailPage({ params }: Props) {
  const { slug } = await params;
  const blog = await findBlog(slug);

  if (!blog) {
    notFound();
  }

  const canonicalUrl = `https://www.livengage.com/blogs/${slug}`;
  const imageUrl = getMediaUrl(blog.coverImage?.url) || blog.coverImage?.url || '/og-image.png';

  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Blog', url: '/blogs' },
    { name: blog.title, url: `/blogs/${slug}` },
  ];

  return (
    <main className="min-h-screen bg-background pt-32 pb-24">
      <BreadcrumbJsonLd items={breadcrumbs} />
      <ArticleJsonLd
        headline={blog.title}
        description={blog.excerpt}
        url={canonicalUrl}
        image={imageUrl.startsWith('http') ? imageUrl : `https://www.livengage.com${imageUrl}`}
        datePublished={blog.publishedDate}
        dateModified={blog.updatedAt || blog.publishedDate}
        authorName={blog.author || 'Livengage Editorial Team'}
      />

      <div className="px-6 md:px-12 max-w-[1000px] mx-auto">
        <Link
          href="/blogs"
          className="inline-flex items-center text-on-surface-variant hover:text-primary transition-colors mb-10 font-medium"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Creator Guides
        </Link>

        <header className="mb-12 text-center md:text-left">
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 mb-6 text-sm text-on-surface-variant dark:text-[#94A3B8]">
            {blog.publishedDate && (
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-primary" />
                <time dateTime={blog.publishedDate}>
                  {new Date(blog.publishedDate).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </time>
              </span>
            )}
            {blog.author && (
              <>
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                <span className="flex items-center gap-1.5 font-medium">
                  <User className="w-4 h-4 text-primary" />
                  {blog.author}
                </span>
              </>
            )}
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            <span className="text-primary font-semibold">Verified Agency Guide</span>
          </div>

          <h1 className="font-display-lg text-3xl md:text-5xl lg:text-6xl leading-tight text-on-surface dark:text-white mb-8">
            {blog.title}
          </h1>

          {imageUrl && (
            <div className="relative rounded-3xl overflow-hidden bg-surface-container mt-8 border border-outline-variant/30 dark:border-white/10 shadow-xl">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={imageUrl}
                alt={blog.coverImage?.alternativeText || blog.title}
                className="w-full h-auto max-h-[500px] object-cover"
              />
            </div>
          )}
        </header>

        {/* Article Body */}
        <article className="prose-container bg-surface-container-lowest dark:bg-[#150222] p-8 md:p-14 rounded-[32px] border border-outline-variant/30 dark:border-white/10 shadow-sm leading-relaxed text-lg">
          <RichTextRenderer content={blog.content} />
        </article>

        {/* Author Box (Item 48 in audit) */}
        <div className="mt-12 p-8 rounded-3xl glass-card border border-outline-variant/30 dark:border-white/10 flex flex-col sm:flex-row items-center gap-6">
          <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-secondary-container flex items-center justify-center text-white text-2xl font-black shrink-0 shadow-lg">
            {blog.author ? blog.author.charAt(0) : 'L'}
          </div>
          <div className="space-y-2 text-center sm:text-left">
            <div className="flex items-center justify-center sm:justify-start gap-2">
              <h3 className="font-bold text-xl text-on-surface dark:text-white">
                {blog.author || 'Livengage Editorial Team'}
              </h3>
              <ShieldCheck className="w-5 h-5 text-primary" />
            </div>
            <p className="text-sm text-on-surface-variant dark:text-[#94A3B8]">
              Senior talent strategist and live streaming analyst at Livengage. Specializing in creator monetization, PK battles, and algorithm velocity on Chamet, Poppo, and Niki Live.
            </p>
          </div>
        </div>

        {/* Related Guides & Next Steps (Item 46 in audit) */}
        <div className="mt-16 p-8 md:p-12 rounded-3xl bg-gradient-to-r from-primary/10 via-secondary-container/10 to-primary/5 border border-primary/20 dark:border-white/10 text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3 max-w-xl">
            <h3 className="font-display-md text-2xl md:text-3xl font-bold text-on-surface dark:text-white">
              Ready to Multiply Your Streaming Earnings?
            </h3>
            <p className="text-on-surface-variant dark:text-[#94A3B8]">
              Join Livengage as an official verified host or register as an agency partner to unlock VIP payouts, mentor training, and 24/7 account support.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 shrink-0">
            <Link
              href="/become-a-host"
              className="btn-gradient px-8 py-4 text-white rounded-full font-bold shadow-lg flex items-center justify-center gap-2 hover:scale-105 transition-transform"
            >
              Apply as Host
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/become-an-agent"
              className="glass-card px-8 py-4 text-on-surface dark:text-white rounded-full font-bold border border-outline-variant/30 hover:bg-surface-container transition-colors flex items-center justify-center"
            >
              Become an Agent
            </Link>
          </div>
        </div>
      </div>

      <PartnerApps data={{ heading: "Featured Partner Apps", apps: EXACT_FEATURED_PARTNER_APPS }} />
    </main>
  );
}
