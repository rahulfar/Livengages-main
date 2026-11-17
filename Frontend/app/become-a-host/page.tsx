import type { Metadata } from 'next';

import { HeroSection } from '@/components/BecomeAHost/HeroSection';
import { StatsSection } from '@/components/BecomeAHost/StatsSection';
import { RequirementsSection } from '@/components/BecomeAHost/RequirementsSection';
import { BenefitsSection } from '@/components/BecomeAHost/BenefitsSection';
import { ApplicationSection } from '@/components/BecomeAHost/ApplicationSection';
import { fetchAPI, getBecomeAHostPageQuery } from '@/lib/api';
import { BreadcrumbJsonLd, HowToJsonLd, FaqJsonLd } from '@/components/JsonLd';
import {
  HOST_HERO,
  HOST_STATS,
  HOST_REQUIREMENTS,
  HOST_BENEFITS,
  HOST_APPLICATION_DATA,
} from '@/constants/become-a-host';

export const metadata: Metadata = {
  title: 'Become a Live Streaming Host | Top Paying Apps',
  description:
    'Apply as a verified live streaming host on top paying apps like Chill Chat (Chamet), Vone App, and Niki Live. Enjoy flexible hours, creator coaching, and fast weekly payouts.',
  alternates: {
    canonical: 'https://www.livengage.com/become-a-host',
  },
  openGraph: {
    title: 'Become a Live Streaming Host | Top Paying Apps | Livengage',
    description:
      'Turn your charisma into high weekly income. Join Livengage as a verified live streaming host with direct contracts and dedicated mentorship.',
    url: 'https://www.livengage.com/become-a-host',
    siteName: 'Livengage',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Become a Live Streaming Host | Top Paying Apps | Livengage',
    description:
      'Turn your charisma into high weekly income. Join Livengage as a verified live streaming host with direct contracts and dedicated mentorship.',
    images: ['/og-image.png'],
  },
};

export const revalidate = 0; // Disable caching for testing

const HOST_FAQS = [
  {
    question: 'How much can a live streaming host earn with Livengage?',
    answer:
      'Earnings depend on your streaming hours, content engagement, and viewer gifting. Top-performing hosts earn substantial weekly payouts through verified in-app gifting and agency milestone rewards.',
  },
  {
    question: 'Do I have to pay any registration fees to join?',
    answer:
      'No. Joining Livengage as a host is 100% free with zero registration fees or hidden startup costs.',
  },
  {
    question: 'Which live streaming apps can I broadcast on?',
    answer:
      'We represent creators on major global platforms including Chill Chat (Chamet), Vone App (Poppo Live), Niki Live, and Bigo Live.',
  },
  {
    question: 'How and when do I receive payouts in India?',
    answer:
      'Payouts are distributed weekly directly into your bank account, UPI, or Payoneer with full transparency and instant transaction tracking.',
  },
];

export default async function BecomeAHostPage() {
  const query = getBecomeAHostPageQuery();
  const strapiRes = await fetchAPI(`/api/become-a-host-page?${query}`);
  
  // Support both Strapi v4 (data.attributes) and Strapi v5 (data directly)
  const raw = strapiRes?.data?.attributes || strapiRes?.data || {};

  const rawRequirements = raw.Requirements || raw.requirements;
  const rawBenefits     = raw.Benefits     || raw.benefits;
  const rawAppSection   = raw.ApplicationSection || raw.applicationSection;

  const pageData = {
    hero: (raw.Hero || raw.hero) || HOST_HERO,
    stats: (raw.Stats || raw.stats) || { stats: HOST_STATS },
    requirements: rawRequirements
      ? { ...rawRequirements, items: rawRequirements.Items || rawRequirements.items }
      : { items: HOST_REQUIREMENTS },
    benefits: rawBenefits
      ? { ...rawBenefits, items: rawBenefits.Items || rawBenefits.items }
      : { items: HOST_BENEFITS },
    applicationSection: rawAppSection
      ? { ...rawAppSection, steps: rawAppSection.Steps || rawAppSection.steps }
      : HOST_APPLICATION_DATA,
  };

  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Become a Host', url: '/become-a-host' },
  ];

  const howToSteps = [
    {
      name: 'Submit Application',
      text: 'Fill out the host application form with your basic details and streaming interests.',
    },
    {
      name: 'Platform Matching & Audition',
      text: 'Our talent scouts evaluate your style and match you with the highest-earning app ecosystem.',
    },
    {
      name: 'Account Verification & VIP Status',
      text: 'Receive agency VIP badge, access exclusive host features, and start broadcasting.',
    },
    {
      name: 'Go Live & Earn Weekly Payouts',
      text: 'Stream to international audiences, collect gifts, and withdraw weekly earnings.',
    },
  ];

  return (
    <main className="min-h-screen bg-background">
      <BreadcrumbJsonLd items={breadcrumbs} />
      <HowToJsonLd steps={howToSteps} />
      <FaqJsonLd faqs={HOST_FAQS} />

      <HeroSection data={pageData.hero} />
      <StatsSection data={pageData.stats} />
      <RequirementsSection data={pageData.requirements} />
      <BenefitsSection data={pageData.benefits} />
      <ApplicationSection data={pageData.applicationSection} />
    </main>
  );
}
