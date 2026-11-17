import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { blogService } from '@/lib/strapi/services/blogs';
import { getMediaUrl } from '@/lib/strapi/client';
import { BlogPost } from '@/types/blog';
import { RichTextRenderer } from '@/components/Blog/RichTextRenderer';
import { ArrowLeft, Calendar, User, ArrowRight, ShieldCheck, CheckCircle2, HelpCircle, Clock } from 'lucide-react';
import { BreadcrumbJsonLd, ArticleJsonLd, FaqJsonLd } from '@/components/JsonLd';
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
      title: 'Guide Not Found | Livengage',
    };
  }

  const canonicalUrl = `https://www.livengage.com/blog/${blog.slug || slug}`;
  const imageUrl = getMediaUrl(blog.coverImage?.url) || blog.coverImage?.url || 'https://www.livengage.com/og-image.png';

  return {
    title: `${blog.title} | Livengage Guides`,
    description: blog.excerpt,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: blog.title,
      description: blog.excerpt,
      url: canonicalUrl,
      siteName: 'Livengage',
      type: 'article',
      publishedTime: blog.publishedDate || '2026-08-17T10:00:00Z',
      modifiedTime: blog.updatedAt || '2026-11-17T12:00:00Z',
      authors: [blog.author || 'Priya Sharma'],
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

  const cleanSlug = blog.slug || slug;
  const canonicalUrl = `https://www.livengage.com/blog/${cleanSlug}`;
  const imageUrl = getMediaUrl(blog.coverImage?.url) || blog.coverImage?.url || '/og-image.png';

  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Blog', url: '/blog' },
    { name: blog.title, url: canonicalUrl },
  ];

  // Other related guides
  const relatedGuides = DEFAULT_BLOGS.filter((b) => b.slug !== cleanSlug).slice(0, 3);

  return (
    <main className="min-h-screen bg-background pt-32 pb-24">
      <BreadcrumbJsonLd items={breadcrumbs} />
      <ArticleJsonLd
        headline={blog.title}
        description={blog.excerpt}
        url={canonicalUrl}
        image={imageUrl.startsWith('http') ? imageUrl : `https://www.livengage.com${imageUrl}`}
        datePublished={blog.publishedDate || '2026-08-17T10:00:00Z'}
        dateModified={blog.updatedAt || '2026-11-17T12:00:00Z'}
        authorName={blog.author || 'Priya Sharma'}
      />
      {blog.faqs && blog.faqs.length > 0 && <FaqJsonLd faqs={blog.faqs} />}

      <div className="px-6 md:px-12 max-w-[1000px] mx-auto">
        <Link
          href="/blog"
          className="inline-flex items-center text-on-surface-variant hover:text-primary transition-colors mb-10 font-medium group"
        >
          <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
          Back to Creator Guides
        </Link>

        <header className="mb-12 text-center md:text-left">
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 mb-6 text-sm text-on-surface-variant dark:text-[#94A3B8]">
            {blog.publishedDate && (
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-primary" />
                <span>Published:</span>
                <time dateTime={blog.publishedDate}>
                  {new Date(blog.publishedDate).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </time>
              </span>
            )}
            {blog.updatedAt && (
              <>
                <span className="w-1.5 h-1.5 rounded-full bg-primary/40" />
                <span className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-primary" />
                  <span>Last updated:</span>
                  <time dateTime={blog.updatedAt}>
                    {new Date(blog.updatedAt).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </time>
                </span>
              </>
            )}
            {blog.author && (
              <>
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                <Link
                  href={`/blog/author/${blog.author.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
                  className="flex items-center gap-1.5 font-medium hover:text-primary transition-colors"
                >
                  <User className="w-4 h-4 text-primary" />
                  {blog.author}
                </Link>
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
              <div className="relative w-full h-[320px] md:h-[480px]">
                <Image
                  src={imageUrl}
                  alt={blog.coverImage?.alternativeText || blog.title}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 1000px"
                  className="object-cover"
                />
              </div>
            </div>
          )}
        </header>

        {/* Article Body */}
        <article className="prose-container bg-surface-container-lowest dark:bg-[#150222] p-8 md:p-14 rounded-[32px] border border-outline-variant/30 dark:border-white/10 shadow-sm leading-relaxed text-lg">
          <RichTextRenderer content={blog.content} />
        </article>

        {/* Post FAQs Section */}
        {blog.faqs && blog.faqs.length > 0 && (
          <section className="mt-14 p-8 md:p-12 rounded-[32px] glass-card border border-outline-variant/30 dark:border-white/10 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <HelpCircle className="w-6 h-6 text-primary" />
              <h2 className="font-display-sm text-2xl md:text-3xl font-bold text-on-surface dark:text-white">
                Frequently Asked Questions
              </h2>
            </div>
            <div className="divide-y divide-outline-variant/20 dark:divide-white/10">
              {blog.faqs.map((faq, idx) => (
                <div key={idx} className="py-5 space-y-2">
                  <h3 className="font-bold text-lg text-on-surface dark:text-white flex items-start gap-2">
                    <span className="text-primary font-mono text-sm mt-0.5">Q{idx + 1}.</span>
                    {faq.question}
                  </h3>
                  <p className="text-on-surface-variant dark:text-[#94A3B8] text-base leading-relaxed pl-6">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Author Bio Box */}
        <div className="mt-12 p-8 rounded-3xl glass-card border border-outline-variant/30 dark:border-white/10 flex flex-col sm:flex-row items-center gap-6">
          <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-secondary-container flex items-center justify-center text-white text-2xl font-black shrink-0 shadow-lg">
            {blog.author ? blog.author.charAt(0) : 'P'}
          </div>
          <div className="space-y-2 text-center sm:text-left flex-1">
            <div className="flex items-center justify-center sm:justify-start gap-2">
              <Link
                href={`/blog/author/${(blog.author || 'Priya Sharma').toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
                className="font-bold text-xl text-on-surface dark:text-white hover:text-primary transition-colors"
              >
                {blog.author || 'Priya Sharma'}
              </Link>
              <ShieldCheck className="w-5 h-5 text-primary" />
              <span className="text-xs uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-primary/10 text-primary">
                Talent Strategist
              </span>
            </div>
            <p className="text-sm text-on-surface-variant dark:text-[#94A3B8] leading-relaxed">
              Senior talent strategist and creator monetization advisor at Livengage. With over six years of hands-on experience guiding digital talent across India and Southeast Asia, Priya specializes in algorithm placement, PK battle strategy, and creator safety on Chill Chat (Chamet) and Vone App (Poppo Live).
            </p>
            <div className="pt-1">
              <Link
                href={`/blog/author/${(blog.author || 'Priya Sharma').toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
                className="text-xs font-semibold text-primary hover:underline inline-flex items-center gap-1"
              >
                View all guides by Priya Sharma <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Related Guides Block */}
        {relatedGuides.length > 0 && (
          <section className="mt-16">
            <h2 className="font-display-sm text-2xl md:text-3xl font-bold text-on-surface dark:text-white mb-6">
              Related Creator Guides
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedGuides.map((item) => (
                <Link
                  key={item.slug}
                  href={`/blog/${item.slug}`}
                  className="glass-card rounded-2xl p-6 border border-outline-variant/30 dark:border-white/10 hover:border-primary/50 transition-all flex flex-col justify-between group"
                >
                  <div className="space-y-2">
                    <span className="text-xs font-bold text-primary uppercase tracking-wider">Guide</span>
                    <h3 className="font-bold text-base text-on-surface group-hover:text-primary transition-colors line-clamp-2">
                      {item.title}
                    </h3>
                    <p className="text-xs text-on-surface-variant line-clamp-2">
                      {item.excerpt}
                    </p>
                  </div>
                  <span className="pt-4 text-xs font-semibold text-primary flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    Read guide <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Related Guides & Next Steps CTA */}
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
