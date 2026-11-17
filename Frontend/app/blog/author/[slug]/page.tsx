import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { BreadcrumbJsonLd } from '@/components/JsonLd';
import { DEFAULT_BLOGS } from '@/data/blogs';
import { ShieldCheck, Calendar, ArrowRight, ArrowLeft, Award, Sparkles } from 'lucide-react';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const authorName = slug.split('-').map(s => s.charAt(0).toUpperCase() + s.slice(1)).join(' ');

  return {
    title: `${authorName} – Senior Talent Strategist | Livengage`,
    description: `Read creator guides and live streaming monetization strategies by ${authorName}, Senior Talent Strategist at Livengage.`,
    alternates: {
      canonical: `https://www.livengage.com/blog/author/${slug}`,
    },
  };
}

export default async function AuthorPage({ params }: Props) {
  const { slug } = await params;
  const authorName = slug.split('-').map(s => s.charAt(0).toUpperCase() + s.slice(1)).join(' ') || 'Priya Sharma';

  const authorGuides = DEFAULT_BLOGS;

  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Blog', url: '/blog' },
    { name: authorName, url: `/blog/author/${slug}` },
  ];

  return (
    <main className="min-h-screen bg-background pt-32 pb-24">
      <BreadcrumbJsonLd items={breadcrumbs} />

      <div className="px-6 md:px-12 max-w-5xl mx-auto">
        <Link
          href="/blog"
          className="inline-flex items-center text-on-surface-variant hover:text-primary transition-colors mb-10 font-medium group"
        >
          <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
          Back to Creator Guides
        </Link>

        {/* Author Profile Header */}
        <div className="p-8 md:p-12 rounded-[32px] glass-card border border-outline-variant/30 dark:border-white/10 shadow-lg mb-16 flex flex-col md:flex-row items-center md:items-start gap-8">
          <div className="w-28 h-28 md:w-36 md:h-36 rounded-3xl bg-gradient-to-br from-primary to-secondary-container flex items-center justify-center text-white text-4xl md:text-5xl font-black shrink-0 shadow-xl">
            {authorName.charAt(0)}
          </div>
          <div className="space-y-4 text-center md:text-left flex-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              Verified Agency Author
            </div>
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-3">
              <h1 className="font-display-md text-3xl md:text-4xl font-bold text-on-surface dark:text-white">
                {authorName}
              </h1>
              <ShieldCheck className="w-6 h-6 text-primary" />
            </div>
            <p className="text-primary font-semibold text-base">
              Senior Talent Strategist & Live Streaming Monetization Advisor
            </p>
            <p className="text-on-surface-variant dark:text-[#94A3B8] leading-relaxed max-w-2xl">
              Priya Sharma is the Senior Talent Strategist at Livengage. Over the last six years, she has mentored more than 1,200 mobile live streamers and agency owners across India, Southeast Asia, and the Middle East. Her work focuses on algorithm discovery velocity, studio lighting setups, compliant host onboarding, and transparent weekly payout systems on Chill Chat (Chamet), Vone App (Poppo Live), and Niki Live.
            </p>
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-6 pt-2 text-sm text-on-surface-variant">
              <span className="flex items-center gap-1.5 font-medium">
                <Award className="w-4 h-4 text-primary" /> 6+ Years Experience
              </span>
              <span className="flex items-center gap-1.5 font-medium">
                <ShieldCheck className="w-4 h-4 text-primary" /> Official Agency Auditor
              </span>
            </div>
          </div>
        </div>

        {/* Author Articles */}
        <div>
          <h2 className="font-display-sm text-2xl md:text-3xl font-bold text-on-surface dark:text-white mb-8">
            Guides Published by {authorName}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {authorGuides.map((blog) => (
              <Link
                key={blog.slug}
                href={`/blog/${blog.slug}`}
                className="group flex flex-col rounded-3xl overflow-hidden glass-card border border-outline-variant/30 dark:border-white/10 hover:border-primary/50 transition-all duration-300 shadow-sm hover:shadow-lg hover:-translate-y-1"
              >
                <div className="relative h-48 bg-surface-container overflow-hidden">
                  {blog.coverImage?.url && (
                    <Image
                      src={blog.coverImage.url}
                      alt={blog.coverImage.alternativeText || blog.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  )}
                </div>
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-xs text-on-surface-variant font-medium">
                      <Calendar className="w-3.5 h-3.5" />
                      {new Date(blog.publishedDate).toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric',
                      })}
                    </div>
                    <h3 className="font-display-sm text-xl text-on-surface group-hover:text-primary transition-colors line-clamp-2">
                      {blog.title}
                    </h3>
                    <p className="text-sm text-on-surface-variant line-clamp-3">
                      {blog.excerpt}
                    </p>
                  </div>
                  <div className="pt-2 text-primary text-sm font-semibold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    Read guide <ArrowRight className="w-4 h-4 ml-1" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
