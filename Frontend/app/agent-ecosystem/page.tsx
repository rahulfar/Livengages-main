import type { Metadata } from 'next';

import {
  EcosystemHero,
  EcosystemFeatures,
  PartnershipTiers,
  EcosystemStats,
  EcosystemCTA,
} from '@/components/agent-ecosystem';

import {
  ECOSYSTEM_HERO_DATA,
  PARTNERSHIP_TIERS,
  ECOSYSTEM_STATS,
  ECOSYSTEM_CTA_DATA,
} from '@/constants/agent-ecosystem';
import { BreadcrumbJsonLd } from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Agent Ecosystem & Sub-Agency Platform',
  description:
    "Scale your agency with Livengage's management infrastructure, real-time analytics, and direct contracts on leading global live streaming apps.",
  alternates: {
    canonical: 'https://www.livengage.com/agent-ecosystem',
  },
  openGraph: {
    title: 'Agent Ecosystem & Sub-Agency Platform | Livengage',
    description:
      'Scale your live streaming agency with Livengage management infrastructure, high commission tiers, and 24/7 partner support.',
    url: 'https://www.livengage.com/agent-ecosystem',
    siteName: 'Livengage',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Agent Ecosystem & Sub-Agency Platform | Livengage',
    description:
      'Scale your live streaming agency with Livengage management infrastructure, high commission tiers, and 24/7 partner support.',
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
      <EcosystemCTA {...ECOSYSTEM_CTA_DATA} />
    </main>
  );
}
