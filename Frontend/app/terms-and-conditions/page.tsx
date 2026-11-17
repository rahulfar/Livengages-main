import type { Metadata } from 'next';

import {
  TermsHero,
  TermsContent,
} from '@/components/terms-and-conditions';

import {
  TERMS_HERO,
  TERMS_NAV_ITEMS,
  TERMS_SECTIONS,
} from '@/constants/terms-and-conditions';
import { BreadcrumbJsonLd } from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Terms & Conditions – Livengage',
  description:
    'The terms that apply when you use the Livengage website and join as a live streaming host or agent.',
  alternates: {
    canonical: 'https://www.livengage.com/terms-and-conditions',
  },
  openGraph: {
    title: 'Terms & Conditions – Livengage',
    description:
      'The terms that apply when you use the Livengage website and join as a live streaming host or agent.',
    url: 'https://www.livengage.com/terms-and-conditions',
    siteName: 'Livengage',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Terms & Conditions – Livengage',
    description:
      'The terms that apply when you use the Livengage website and join as a live streaming host or agent.',
    images: ['/og-image.png'],
  },
};

export default function TermsAndConditionsPage() {
  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Terms & Conditions', url: '/terms-and-conditions' },
  ];

  return (
    <main className="bg-background text-on-surface font-body-md pt-20 pb-section selection:bg-primary-container selection:text-on-primary-container">
      <BreadcrumbJsonLd items={breadcrumbs} />
      <TermsHero {...TERMS_HERO} />
      <TermsContent navItems={TERMS_NAV_ITEMS} sections={TERMS_SECTIONS} />
    </main>
  );
}
