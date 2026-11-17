import type { Metadata } from 'next';

import {
  EcosystemHero,
  EcosystemFeatures,
  PartnershipTiers,
  EcosystemStats,
  EcosystemCTA,
} from '@/components/agent-ecosystem';
import { PartnerApps } from '@/components/PartnerApps';
import { EXACT_FEATURED_PARTNER_APPS } from '@/data/featured-partner-apps';

import {
  ECOSYSTEM_HERO_DATA,
  PARTNERSHIP_TIERS,
  ECOSYSTEM_STATS,
  ECOSYSTEM_CTA_DATA,
} from '@/constants/agent-ecosystem';
import { BreadcrumbJsonLd } from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Live Streaming Sub-Agency Program – Livengage',
  description:
    'Build a sub-agency with Livengage: recruit hosts, use our agency dashboard, get fast payouts and 24/7 partner support. Zero startup fees.',
  alternates: {
    canonical: 'https://www.livengage.com/agent-ecosystem',
  },
  openGraph: {
    title: 'Live Streaming Sub-Agency Program – Livengage',
    description:
      'Build a sub-agency with Livengage: recruit hosts, use our agency dashboard, get fast payouts and 24/7 partner support. Zero startup fees.',
    url: 'https://www.livengage.com/agent-ecosystem',
    siteName: 'Livengage',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Live Streaming Sub-Agency Program – Livengage',
    description:
      'Build a sub-agency with Livengage: recruit hosts, use our agency dashboard, get fast payouts and 24/7 partner support. Zero startup fees.',
    images: ['/og-image.png'],
  },
};

export default function AgentEcosystemPage() {
  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Agent Ecosystem', url: '/agent-ecosystem' },
  ];

  return (
    <main className="bg-background text-on-background font-body-md antialiased pt-20 selection:bg-primary-fixed selection:text-on-primary-fixed">
      <BreadcrumbJsonLd items={breadcrumbs} />
      <EcosystemHero {...ECOSYSTEM_HERO_DATA} />
      <EcosystemFeatures />
      <PartnershipTiers tiers={PARTNERSHIP_TIERS} />
      <EcosystemStats stats={ECOSYSTEM_STATS} />
      <PartnerApps data={{ heading: "Featured Partner Apps", apps: EXACT_FEATURED_PARTNER_APPS }} />
      <EcosystemCTA {...ECOSYSTEM_CTA_DATA} />
    </main>
  );
}
