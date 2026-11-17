import { Metadata } from 'next';
import { AboutHero } from '@/components/About/AboutHero';
import { MissionVisionSection } from '@/components/About/MissionVisionSection';
import { ValuesGrid } from '@/components/About/ValuesGrid';
import { Timeline } from '@/components/About/Timeline';
import { TeamSection } from '@/components/About/TeamSection';
import { AboutCTA } from '@/components/About/AboutCTA';
import { PartnerApps } from '@/components/PartnerApps';
import { pageService } from '@/lib/strapi/services/pages';
import { BreadcrumbJsonLd } from '@/components/JsonLd';
import { ABOUT_US_PAGE_DATA } from '@/data/about-us';
import { EXACT_FEATURED_PARTNER_APPS } from '@/data/featured-partner-apps';

export const metadata: Metadata = {
  title: 'About Livengage – Our Story, Team & Creator Network',
  description:
    'Meet the team behind Livengage, a live streaming agency supporting creators in 50+ countries since 2018. Our story, values and how we support hosts.',
  alternates: {
    canonical: 'https://www.livengage.com/about-us',
  },
  openGraph: {
    title: 'About Livengage – Our Story, Team & Creator Network',
    description:
      'Meet the team behind Livengage, a live streaming agency supporting creators in 50+ countries since 2018. Our story, values and how we support hosts.',
    url: 'https://www.livengage.com/about-us',
    siteName: 'Livengage',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Livengage – Our Story, Team & Creator Network',
    description:
      'Meet the team behind Livengage, a live streaming agency supporting creators in 50+ countries since 2018. Our story, values and how we support hosts.',
    images: ['/og-image.png'],
  },
};

export const revalidate = 0; // Disable caching for testing

export default async function AboutPage() {
  // Fetch data from Strapi API
  let apiData: any = null;
  try {
    apiData = await pageService.getAboutUsPage();
  } catch (err) {
    console.warn('[AboutPage] Data fetch warning:', err);
  }
  // Support both Strapi v4 (data.attributes) and Strapi v5 (data directly)
  const strapiData = apiData?.data?.attributes || apiData?.data || {};

  // Map data with fallbacks
  const heroData = (strapiData.Hero || strapiData.hero) || ABOUT_US_PAGE_DATA.hero;
  const missionVisionData = (strapiData.MissionVision || strapiData.missionVision) || ABOUT_US_PAGE_DATA.missionVision;
  const coreValuesData = (strapiData.CoreValues || strapiData.coreValues) || { items: ABOUT_US_PAGE_DATA.coreValues.items };
  const timelineData = (strapiData.Timeline || strapiData.timeline) || { items: ABOUT_US_PAGE_DATA.timeline.items };
  const leadershipData = (strapiData.Leadership || strapiData.leadership) || { members: ABOUT_US_PAGE_DATA.leadership.members };
  const ctaData = (strapiData.CTA || strapiData.cta) || ABOUT_US_PAGE_DATA.cta;

  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'About Us', url: '/about-us' },
  ];

  return (
    <main className="min-h-screen bg-background">
      <BreadcrumbJsonLd items={breadcrumbs} />
      <AboutHero data={heroData} />
      <MissionVisionSection data={missionVisionData} />
      <ValuesGrid data={coreValuesData} />
      <Timeline data={timelineData} />
      <TeamSection data={leadershipData} />
      <PartnerApps data={{ heading: "Featured Partner Apps", apps: EXACT_FEATURED_PARTNER_APPS }} />
      <AboutCTA data={ctaData} />
    </main>
  );
}
