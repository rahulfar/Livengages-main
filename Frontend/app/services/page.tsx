import type { Metadata } from 'next';

import { ServicesHero } from '@/components/Services/sections/ServicesHero';
import { ServicesGrid } from '@/components/Services/sections/ServicesGrid';
import { PartnerAppsSection } from '@/components/Services/sections/PartnerAppsSection';
import { PartnerApps } from '@/components/PartnerApps';
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
import { EXACT_FEATURED_PARTNER_APPS } from '@/data/featured-partner-apps';

export const metadata: Metadata = {
  title: 'Live Streaming Agency Services – Livengage',
  description:
    'Host recruitment, agent training, platform placement and 24/7 support for live streaming creators on Vone, Chill Chat, Niki Live and Bigo Live.',
  alternates: {
    canonical: 'https://www.livengage.com/services',
  },
  openGraph: {
    title: 'Live Streaming Agency Services – Livengage',
    description:
      'Host recruitment, agent training, platform placement and 24/7 support for live streaming creators on Vone, Chill Chat, Niki Live and Bigo Live.',
    url: 'https://www.livengage.com/services',
    siteName: 'Livengage',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Live Streaming Agency Services – Livengage',
    description:
      'Host recruitment, agent training, platform placement and 24/7 support for live streaming creators on Vone, Chill Chat, Niki Live and Bigo Live.',
    images: ['/og-image.png'],
  },
};

export const revalidate = 0; // Disable caching for testing

export default async function ServicesPage() {
  const query = getServicesPageQuery();
  const strapiRes = await fetchAPI(`/api/services-page?${query}`);
  
  // Support both Strapi v4 (data.attributes) and Strapi v5 (data directly)
  const pageData = strapiRes?.data?.attributes || strapiRes?.data || {};

  const heroData = {
    ...((pageData.hero || pageData.Hero) || SERVICES_HERO),
    heading: 'Live Streaming Agency Services for Hosts and Agents',
  };
  const servicesListData = pageData.servicesList || pageData.ServicesList || { items: SERVICES_LIST };
  const partnerAppsData = pageData.partnerApps || pageData.PartnerApps || PARTNER_APPS_SECTION;
  const statsData = pageData.stats || pageData.Stats || { stats: SERVICES_STATS };
  const ctaData = {
    ...((pageData.cta || pageData.CTA) || SERVICES_CTA),
    primaryCtaLabel: 'Start My Journey Now',
    primaryCtaHref: '/become-a-host',
  };

  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Services', url: '/services' },
  ];

  return (
    <main className="min-h-screen bg-[#F8FAFC] dark:bg-[#0B0114] relative overflow-x-hidden">
      <BreadcrumbJsonLd items={breadcrumbs} />
      <ServicesHero data={heroData} />
      <ServicesGrid data={servicesListData} />
      <PartnerApps data={{ heading: "Featured Partner Apps", apps: EXACT_FEATURED_PARTNER_APPS }} />
      <PartnerAppsSection data={partnerAppsData} />
      <ServicesStats data={statsData} />
      <ServicesCTA data={ctaData} />
    </main>
  );
}
