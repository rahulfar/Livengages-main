import type { Metadata } from 'next';

import {
  PrivacyHero,
  PrivacyContent,
  PrivacyCTA,
} from '@/components/privacy-policy';

import {
  PRIVACY_HERO,
  PRIVACY_NAV_ITEMS,
  PRIVACY_SECTIONS,
  PRIVACY_CTA,
} from '@/constants/privacy-policy';
import { BreadcrumbJsonLd } from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Privacy Policy – Livengage',
  description:
    'How Livengage collects, uses and protects the information you share when you apply as a host or agent.',
  alternates: {
    canonical: 'https://www.livengage.com/privacy-policy',
  },
  openGraph: {
    title: 'Privacy Policy – Livengage',
    description:
      'How Livengage collects, uses and protects the information you share when you apply as a host or agent.',
    url: 'https://www.livengage.com/privacy-policy',
    siteName: 'Livengage',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Privacy Policy – Livengage',
    description:
      'How Livengage collects, uses and protects the information you share when you apply as a host or agent.',
    images: ['/og-image.png'],
  },
};

export default function PrivacyPolicyPage() {
  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Privacy Policy', url: '/privacy-policy' },
  ];

  return (
    <main className="bg-background text-on-surface font-body-md pt-20 selection:bg-primary-fixed selection:text-on-primary-fixed">
      <BreadcrumbJsonLd items={breadcrumbs} />
      <PrivacyHero {...PRIVACY_HERO} />
      <PrivacyContent navItems={PRIVACY_NAV_ITEMS} sections={PRIVACY_SECTIONS} />
      <PrivacyCTA {...PRIVACY_CTA} />
    </main>
  );
}
