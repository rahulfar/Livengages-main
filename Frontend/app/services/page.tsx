import type { Metadata } from 'next';

import { ServicesHero } from '@/components/Services/sections/ServicesHero';
import { ServicesGrid } from '@/components/Services/sections/ServicesGrid';
import { PartnerAppsSection } from '@/components/Services/sections/PartnerAppsSection';
import { ServicesStats } from '@/components/Services/sections/ServicesStats';
import { ServicesCTA } from '@/components/Services/sections/ServicesCTA';
import { fetchAPI, getServicesPageQuery } from '@/lib/api';
import { BreadcrumbJsonLd } from '@/components/JsonLd';
import {
  SERVICES_HERO,
  SERVICES_LIST,
  PARTNER_APPS_SECTION,
  SERVICES_STATS,
  SERVICES_CTA,
} from '@/constants/services';

export const metadata: Metadata = {
  title: 'Live Streaming Agency Services',
  description:
    'Explore creator management, host incubation, sub-agency scaling, and official platform partnerships designed to maximize your live streaming revenue.',
  alternates: {
    canonical: 'https://www.livengage.com/services',
  },
  openGraph: {
    title: 'Live Streaming Agency Services | Livengage',
    description:
      'Explore talent incubation, sub-agency scaling, and official app partnerships on Chamet, Poppo, and Niki Live.',
    url: 'https://www.livengage.com/services',
    siteName: 'Livengage',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Live Streaming Agency Services | Livengage',
    description:
      'Explore talent incubation, sub-agency scaling, and official app partnerships on Chamet, Poppo, and Niki Live.',
    images: ['/og-image.png'],
  },
};

export const revalidate = 0; // Disable caching for testing

export default async function ServicesPage() {
  const query = getServicesPageQuery();
  const strapiRes = await fetchAPI(`/api/services-page?${query}`);
  
  // Support both Strapi v4 (data.attributes) and Strapi v5 (data directly)
  const pageData = strapiRes?.data?.attributes || strapiRes?.data || {};

  const heroData = pageData.hero || pageData.Hero || SERVICES_HERO;
  const servicesListData = pageData.servicesList || pageData.ServicesList || { items: SERVICES_LIST };
  const partnerAppsData = pageData.partnerApps || pageData.PartnerApps || PARTNER_APPS_SECTION;
  const statsData = pageData.stats || pageData.Stats || { stats: SERVICES_STATS };
  const ctaData = pageData.cta || pageData.CTA || SERVICES_CTA;

  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Services', url: '/services' },
  ];

  return (
    <main className="min-h-screen bg-[#F8FAFC] dark:bg-[#0B0114] relative overflow-x-hidden">
      <BreadcrumbJsonLd items={breadcrumbs} />
      <ServicesHero data={heroData} />
      <ServicesGrid data={servicesListData} />
      <PartnerAppsSection data={partnerAppsData} />
      <ServicesStats data={statsData} />
      <ServicesCTA data={ctaData} />
    </main>
  );
}
