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
  title: 'Privacy Policy',
  description:
    'Learn how Livengage collects, protects, and uses your personal information across our live streaming management platforms and services.',
  alternates: {
    canonical: 'https://www.livengage.com/privacy-policy',
  },
  openGraph: {
    title: 'Privacy Policy | Livengage',
    description:
      'Learn how Livengage collects, protects, and uses your personal information.',
    url: 'https://www.livengage.com/privacy-policy',
    siteName: 'Livengage',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Privacy Policy | Livengage',
    description:
      'Learn how Livengage collects, protects, and uses your personal information.',
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
