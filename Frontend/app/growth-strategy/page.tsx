import type { Metadata } from 'next';

import {
  GrowthHero,
  StrategicAnalytics,
  GlobalScalability,
  RevenueArchitecture,
} from '@/components/growth-strategy';

import { CTA } from '@/components/CTA';
import { PartnerApps } from '@/components/PartnerApps';
import { EXACT_FEATURED_PARTNER_APPS } from '@/data/featured-partner-apps';

import {
  GROWTH_HERO_DATA,
  STRATEGIC_ANALYTICS_DATA,
  REVENUE_ARCHITECTURE_DATA,
  GROWTH_CTA_DATA,
} from '@/constants/growth-strategy';
import { BreadcrumbJsonLd } from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Live Streaming Growth Strategy for Hosts – Livengage',
  description:
    'Grow your live streaming income with stream reviews, PK battle tips, app algorithm updates and 1-on-1 mentoring from the Livengage team.',
  alternates: {
    canonical: 'https://www.livengage.com/growth-strategy',
  },
  openGraph: {
    title: 'Live Streaming Growth Strategy for Hosts – Livengage',
    description:
      'Grow your live streaming income with stream reviews, PK battle tips, app algorithm updates and 1-on-1 mentoring from the Livengage team.',
    url: 'https://www.livengage.com/growth-strategy',
    siteName: 'Livengage',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Live Streaming Growth Strategy for Hosts – Livengage',
    description:
      'Grow your live streaming income with stream reviews, PK battle tips, app algorithm updates and 1-on-1 mentoring from the Livengage team.',
    images: ['/og-image.png'],
  },
};

export default function GrowthStrategyPage() {
  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Growth Strategy', url: '/growth-strategy' },
  ];

  return (
    <main className="bg-surface-bright dark:bg-[#0B0114] text-on-surface dark:text-white font-body-md pt-20 selection:bg-primary-fixed selection:text-on-primary-fixed overflow-x-clip transition-colors duration-300">
      <BreadcrumbJsonLd items={breadcrumbs} />
      <GrowthHero {...GROWTH_HERO_DATA} />
      <StrategicAnalytics {...STRATEGIC_ANALYTICS_DATA} />
      <GlobalScalability />
      <RevenueArchitecture {...REVENUE_ARCHITECTURE_DATA} />
      <PartnerApps data={{ heading: "Featured Partner Apps", apps: EXACT_FEATURED_PARTNER_APPS }} />
      <CTA 
        data={{
          headingPart1: 'Ready to',
          headingHighlight: 'Command the Market?',
          description: GROWTH_CTA_DATA.description,
          primaryCtaLabel: GROWTH_CTA_DATA.buttonText,
          primaryCtaHref: '/become-a-host',
        }} 
      />
    </main>
  );
}
