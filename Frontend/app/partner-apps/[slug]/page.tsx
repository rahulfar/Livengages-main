import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { fetchAPI, getPartnerAppBySlugQuery, getAllPartnerAppsQuery } from '@/lib/api';
import {
  PartnerAppHero,
  PartnerAppBenefits,
  PartnerAppVideo,
  PartnerAppTools,
  PartnerAppTiers,
  PartnerAppTestimonials,
  PartnerAppSteps,
  PartnerAppFaq,
  PartnerAppSupport,
  PartnerAppTechReqs,
} from '@/components/PartnerAppDetail';
import {
  SoftwareApplicationJsonLd,
  BreadcrumbJsonLd,
  FaqJsonLd,
} from '@/components/JsonLd';
import { PartnerApps } from '@/components/PartnerApps';
import { FALLBACK_PARTNER_APPS } from '@/data/partner-apps';
import { EXACT_FEATURED_PARTNER_APPS } from '@/data/featured-partner-apps';

export async function generateStaticParams() {
  const staticSlugs = [
    'vone-app-agency',
    'chill-chat-agency',
    'niki-live-agency',
    'poppo-live-agency',
    'partner-app',
    'partner-app-1',
    'partner-app-2',
    'partner-app-3',
  ];

  try {
    const query = getAllPartnerAppsQuery();
    const res = await fetchAPI(`/api/partner-apps?${query}`);
    if (res && res.data) {
      const dynamicSlugs = res.data.map((app: any) => app.slug);
      return Array.from(new Set([...staticSlugs, ...dynamicSlugs])).map((slug) => ({ slug }));
    }
  } catch (err) {
    console.warn('[PartnerApp generateStaticParams] API error, using static slugs:', err);
  }

  return staticSlugs.map((slug) => ({ slug }));
}

async function getAppData(slug: string) {
  // Check Strapi API first
  try {
    const query = getPartnerAppBySlugQuery(slug);
    const res = await fetchAPI(`/api/partner-apps?${query}`, { cache: 'no-store' });
    if (res && res.data && res.data.length > 0) {
      return res.data[0];
    }
  } catch (err) {
    console.warn(`[getAppData] Strapi fetch failed for ${slug}, checking fallback:`, err);
  }

  // Fallback to predefined data
  const fallback = FALLBACK_PARTNER_APPS[slug];
  if (fallback) {
    return {
      slug: fallback.slug,
      name: fallback.name,
      appName: fallback.appName,
      metaTitle: fallback.metaTitle,
      metaDescription: fallback.metaDescription,
      hero: fallback.hero,
      benefits: fallback.benefits,
      faqs: fallback.faqs,
      operatingSystem: fallback.operatingSystem,
      ratingValue: fallback.ratingValue,
      reviewCount: fallback.reviewCount,
    };
  }

  return null;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const appData = await getAppData(slug);

  if (!appData) {
    return {
      title: 'Partner App Program',
    };
  }

  const fallback = FALLBACK_PARTNER_APPS[slug];
  const appTitle =
    fallback?.metaTitle ||
    `${appData.name || 'Live Streaming'} Agency & Host Guide – Livengage`;

  const appDesc =
    fallback?.metaDescription ||
    appData.hero?.description ||
    'Join our verified live streaming agency program. Enjoy flexible hours, instant weekly payouts, and round-the-clock host support.';

  const canonicalUrl = `https://www.livengage.com/${slug.includes('agency') ? slug : `${slug}-agency`}`;
  const isNoIndex = slug === 'poppo-live-agency';

  return {
    title: appTitle,
    description: appDesc,
    alternates: {
      canonical: canonicalUrl,
    },
    ...(isNoIndex
      ? {
          robots: {
            index: false,
            follow: false,
          },
        }
      : {}),
    openGraph: {
      title: appTitle,
      description: appDesc,
      url: canonicalUrl,
      siteName: 'Livengage',
      images: [
        {
          url: '/og-image.png',
          width: 1200,
          height: 630,
          alt: appTitle,
        },
      ],
      locale: 'en_IN',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: appTitle,
      description: appDesc,
      images: ['/og-image.png'],
    },
  };
}

export default async function PartnerAppPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = await params;
  const appData = await getAppData(resolvedParams.slug);

  if (!appData) {
    console.error('PartnerAppPage: No data found for slug', resolvedParams.slug);
    notFound();
  }

  const fallback = FALLBACK_PARTNER_APPS[resolvedParams.slug];
  const appName = fallback?.appName || appData.hero?.titleHighlight || 'Live Streaming Partner App';
  const canonicalUrl = `https://www.livengage.com/${resolvedParams.slug}`;

  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Services', url: '/services' },
    { name: appName, url: canonicalUrl },
  ];

  let alternateName: string | undefined = undefined;
  if (resolvedParams.slug.includes('vone')) alternateName = 'Poppo Live';
  if (resolvedParams.slug.includes('chill') || resolvedParams.slug.includes('chamet')) alternateName = 'Chamet';

  return (
    <main className="overflow-x-hidden bg-background dark:bg-[#0B0114] min-h-screen">
      <BreadcrumbJsonLd items={breadcrumbs} />
      {resolvedParams.slug === 'poppo-live-agency' && (
        <div className="bg-primary/10 border-b border-primary/20 py-3.5 px-6 text-center text-sm font-medium text-on-surface dark:text-white">
          Notice for Indian Creators: The official compliant platform for Poppo Live in India is{' '}
          <Link href="/vone-app-agency" className="text-primary font-bold underline ml-1 hover:text-primary-focus">
            Vone App (Poppo Live India)
          </Link>
          . Please register via Vone App for direct UPI & INR settlements.
        </div>
      )}
      <SoftwareApplicationJsonLd
        name={appName}
        alternateName={alternateName}
        description={appData.hero?.description || `${appName} live streaming application`}
        url={canonicalUrl}
        operatingSystem={fallback?.operatingSystem || 'Android, iOS'}
      />
      {appData.faqs?.faqs && <FaqJsonLd faqs={appData.faqs.faqs} />}

      {appData.hero && <PartnerAppHero data={appData.hero} />}
      {appData.benefits && <PartnerAppBenefits data={appData.benefits} />}
      {appData.videoPreview && <PartnerAppVideo data={appData.videoPreview} />}
      {appData.professionalTools && <PartnerAppTools data={appData.professionalTools} />}
      {appData.monetizationTiers && <PartnerAppTiers data={appData.monetizationTiers} />}
      {appData.testimonials && <PartnerAppTestimonials data={appData.testimonials} />}
      {appData.onboardingSteps && <PartnerAppSteps data={appData.onboardingSteps} />}
      {appData.faqs && <PartnerAppFaq data={appData.faqs} />}
      {appData.supportHub && <PartnerAppSupport data={appData.supportHub} />}
      {appData.technicalRequirements && <PartnerAppTechReqs data={appData.technicalRequirements} />}
      <PartnerApps data={{ heading: "Featured Partner Apps", apps: EXACT_FEATURED_PARTNER_APPS }} />
    </main>
  );
}
