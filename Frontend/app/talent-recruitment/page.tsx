import type { Metadata } from 'next';

import { TalentHero } from '@/components/talent-recruitment/TheTalentHero';
import { ScoutingProcess } from '@/components/talent-recruitment/TheScoutingProcess';
import { ValueProposition } from '@/components/talent-recruitment/TheValueProposition';
import { TalentCTA } from '@/components/talent-recruitment/TheTalentCTA';
import { PartnerApps } from '@/components/PartnerApps';
import { EXACT_FEATURED_PARTNER_APPS } from '@/data/featured-partner-apps';

import {
  TALENT_HERO,
  SCOUTING_PROCESS_STEPS,
  VALUE_PROPOSITION,
  TALENT_CTA,
} from '@/constants/talent-recruitment';
import { BreadcrumbJsonLd } from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Live Streaming Talent Recruitment',
  description:
    "Join Livengage's global talent network. We scout, train, and match aspiring creators with high-earning live video platforms tailored to their strengths.",
  alternates: {
    canonical: 'https://www.livengage.com/talent-recruitment',
  },
  openGraph: {
    title: 'Live Streaming Talent Recruitment | Livengage',
    description:
      'We scout, train, and match high-potential creators with top global live streaming platforms for maximum monetization.',
    url: 'https://www.livengage.com/talent-recruitment',
    siteName: 'Livengage',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Live Streaming Talent Recruitment | Livengage',
    description:
      'We scout, train, and match high-potential creators with top global live streaming platforms for maximum monetization.',
    images: ['/og-image.png'],
  },
};

export default function TalentRecruitmentPage() {
  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Talent Recruitment', url: '/talent-recruitment' },
  ];

  return (
    <main className="bg-background text-on-background font-body-md overflow-x-hidden selection:bg-primary-fixed selection:text-on-primary-fixed">
      <BreadcrumbJsonLd items={breadcrumbs} />
      <TalentHero {...TALENT_HERO} />
      <ScoutingProcess steps={SCOUTING_PROCESS_STEPS} />
      <ValueProposition {...VALUE_PROPOSITION} />
      <PartnerApps data={{ heading: "Featured Partner Apps", apps: EXACT_FEATURED_PARTNER_APPS }} />
      <TalentCTA {...TALENT_CTA} />
    </main>
  );
}
