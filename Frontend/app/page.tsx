import { Hero } from '@/components/Hero';
import { Stats } from '@/components/Stats';
import { Services } from '@/components/Services';
import { PartnerApps } from '@/components/PartnerApps';
import { WhyChooseUs } from '@/components/WhyChooseUs';
import { Testimonials } from '@/components/Testimonials';
import { FAQ } from '@/components/FAQ';
import { CTA } from '@/components/CTA';
import { FaqJsonLd } from '@/components/JsonLd';
import { TrustComplianceSection } from '@/components/TrustBadges/TrustComplianceSection';
import { HOME_PAGE_DATA } from '@/data/home';
import { EXACT_FEATURED_PARTNER_APPS } from '@/data/featured-partner-apps';

import { pageService } from '@/lib/strapi/services/pages';
import { partnerAppService } from '@/lib/strapi/services/partnerApps';

/**
 * Homepage — composes all section components.
 *
 * Navbar / Footer / ScrollRevealProvider live in the root layout so every
 * route shares them.
 */
export default async function HomePage() {
  let strapiRes: any = null;
  let partnerAppsRes: any = null;

  try {
    const results = await Promise.allSettled([
      pageService.getHomePage(),
      partnerAppService.getFeaturedPartnerApps()
    ]);
    if (results[0].status === 'fulfilled') strapiRes = results[0].value;
    if (results[1].status === 'fulfilled') partnerAppsRes = results[1].value;
  } catch (err) {
    console.warn('[HomePage] Data fetch warning:', err);
  }
  
  const rawData: any = strapiRes?.data || {};
  const data = {
    hero: rawData.hero || HOME_PAGE_DATA.hero,
    stats: rawData.stats || HOME_PAGE_DATA.stats,
    services: rawData.services || HOME_PAGE_DATA.services,
    whyChooseUs: rawData.whyChooseUs || HOME_PAGE_DATA.whyChooseUs,
    testimonials: rawData.testimonials || HOME_PAGE_DATA.testimonials,
    faq: rawData.faq || HOME_PAGE_DATA.faq,
    cta: rawData.cta || HOME_PAGE_DATA.cta,
  };

  const rawApps = partnerAppsRes?.data || [];
  const featuredPartnerApps = rawApps.length > 0 ? rawApps : EXACT_FEATURED_PARTNER_APPS;

  return (
    <>
      <FaqJsonLd faqs={data.faq?.faqs || HOME_PAGE_DATA.faq.faqs} />
      {data.hero && <Hero data={data.hero} />}
      {data.stats && <Stats data={data.stats} />}
      {data.services && <Services data={data.services} />}
      {featuredPartnerApps.length > 0 && <PartnerApps data={{ heading: "Featured Partner Apps", apps: featuredPartnerApps }} />}
      {data.whyChooseUs && <WhyChooseUs data={data.whyChooseUs} />}
      <TrustComplianceSection />
      {data.testimonials && <Testimonials data={data.testimonials} />}
      {data.faq && <FAQ data={data.faq} />}
      {data.cta && <CTA data={data.cta} />}
    </>
  );
}
