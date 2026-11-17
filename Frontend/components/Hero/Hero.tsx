import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { getMediaUrl } from '@/lib/strapi/client';
import { SITE_STATS } from '@/constants/site-stats';

interface Props {
  data?: any;
}

export function Hero({ data }: Props) {
  // Enforce approved SEO H1 and copy from Section 3.2
  const heroH1 = 'Earn as a Live Streaming Host or Agency Partner';
  const heroDescription =
    data?.description && data.description.toLowerCase().includes('live streaming agency')
      ? data.description
      : 'Livengage is an official live streaming agency connecting creators and partner agents with leading platforms including Vone App (Poppo Live), Chill Chat (Chamet), Niki Live, and Bigo Live. Free to join with dedicated India support.';

  const creatorCount = SITE_STATS.creators; // '6,500+'

  return (
    <section className="relative min-h-screen flex items-center pt-[140px] lg:pt-[120px] pb-[80px] overflow-hidden mesh-gradient transform-gpu">
      {/* Abstract Elements */}
      <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-secondary-container/30 rounded-full blur-[120px] kinetic-shape"></div>
      <div
        className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-primary-container/30 rounded-full blur-[100px] kinetic-shape"
        style={{ animationDelay: '-5s' }}
      ></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left: Editorial Typography */}
        <div className="lg:col-span-7 z-10 order-2 lg:order-1">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container-high border border-outline-variant dark:glass-card dark:border-none mb-8">
            <span className="flex h-2 w-2 rounded-full bg-primary dark:bg-secondary-container animate-pulse dark:shadow-[0_0_8px_rgba(218,38,118,0.8)]"></span>
            <span className="text-[12px] font-bold uppercase tracking-widest text-primary dark:text-on-surface-variant">
              Official Live Streaming Agency
            </span>
          </div>

          <h1 className="font-display-lg text-display-md md:text-display-lg leading-tight mb-6 text-on-surface dark:text-white">
            Earn as a{' '}
            <span className="text-gradient italic">Live Streaming Host</span> or Agency Partner
          </h1>

          {data?.headingPart1 && data.headingPart1 !== 'Earn as a' && (
            <p className="text-primary dark:text-secondary-container font-semibold text-lg mb-4">
              {data.headingPart1} {data.headingHighlight} {data.headingPart3}
            </p>
          )}

          <p className="font-body-lg text-on-surface-variant max-w-xl mb-12 leading-relaxed">
            {heroDescription}
          </p>

          <div className="flex flex-col sm:flex-row gap-6">
            <Link
              href={data?.primaryCtaHref || '/become-a-host'}
              className="cursor-pointer btn-gradient px-10 py-5 rounded-full text-white font-bold text-lg flex items-center justify-center gap-3 group shadow-xl dark:shadow-[0_0_20px_rgba(218,38,118,0.3)]"
            >
              {data?.primaryCtaLabel || 'Become a Host'}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href={data?.secondaryCtaHref || '/become-an-agent'}
              className="cursor-pointer bg-surface-container border-2 border-outline-variant dark:glass-card dark:border-none px-10 py-5 rounded-full text-on-surface dark:text-white font-bold text-lg flex items-center justify-center hover:bg-surface-container-high dark:hover:bg-surface-container-high dark:hover:border-primary-container transition-colors"
            >
              {data?.secondaryCtaLabel || 'Become an Agent'}
            </Link>
          </div>

          <div className="mt-16 flex items-center gap-8">
            <div className="flex -space-x-4">
              {data?.avatars &&
                data.avatars.slice(0, 3).map((avatar: any, i: number) => (
                  <Image
                    key={i}
                    alt={avatar.alternativeText || `Verified Livengage streaming creator ${i + 1}`}
                    width={48}
                    height={48}
                    className="w-12 h-12 rounded-full border-4 border-surface object-cover"
                    src={getMediaUrl(avatar.url) || ''}
                  />
                ))}
              <div className="w-12 h-12 rounded-full border-4 border-surface bg-primary-container flex items-center justify-center text-xs font-bold text-on-primary-container dark:text-white dark:shadow-[0_0_10px_rgba(124,58,237,0.5)]">
                {creatorCount}
              </div>
            </div>
            <p className="text-sm font-medium text-on-surface-variant">
              <span className="font-bold text-primary dark:text-white">{creatorCount}</span> creators trust us worldwide
            </p>
          </div>
        </div>

        {/* Right: Clean Image with LCP Optimization */}
        {data?.heroImage?.url && (
          <div className="lg:col-span-5 relative w-full h-[350px] md:h-[450px] lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl order-1 lg:order-2">
            <Image
              fill
              priority
              fetchPriority="high"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
              alt={data.heroImage.alternativeText || 'Livengage verified live streaming creator broadcasting on top partner apps'}
              className="object-cover"
              src={getMediaUrl(data.heroImage.url) || ''}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            <div className="absolute bottom-8 left-8 right-8 text-white">
              <div className="flex items-center gap-3 mb-2">
                <span className="flex h-3 w-3 rounded-full bg-red-500 animate-pulse"></span>
                <span className="font-bold tracking-wider text-sm">LIVE NOW</span>
              </div>
              <p className="font-display-lg text-2xl font-bold">Join the top 1% of creators</p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
