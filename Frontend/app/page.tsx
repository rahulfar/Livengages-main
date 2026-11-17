import { Hero } from '@/components/Hero';
import { Stats } from '@/components/Stats';
import { Services } from '@/components/Services';
import { PartnerApps } from '@/components/PartnerApps';
import { WhyChooseUs } from '@/components/WhyChooseUs';
import { Testimonials } from '@/components/Testimonials';
import { FAQ } from '@/components/FAQ';
import { CTA } from '@/components/CTA';
import { FaqJsonLd } from '@/components/JsonLd';
import { HOME_PAGE_DATA } from '@/data/home';
import { FALLBACK_PARTNER_APPS } from '@/data/partner-apps';

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
  const exactLivengageFeaturedApps = [
    {
      id: 9,
      title: 'Live Video Chat (Chamet)',
      slug: 'partner-app-1',
      hero: {
        badgeText: 'Live Video Chat & Social App',
        description:
          'Chamet is a social live-streaming and video chat app designed to help you connect with people from around the world. Discover live streams, start video chats, meet new people, and enjoy interactive social experiences from your mobile device.',
        primaryCtaLabel: 'Download Chamet',
        heroImage: {
          url: 'https://api.livengage.com/uploads/Gemini_Generated_Image_jluim4jluim4jlui_f29d4f72ca.png',
        },
      },
      videoPreview: {
        video: {
          url: 'https://api.livengage.com/uploads/Chamet_video_ee1d497658.mp4',
        },
      },
    },
    {
      id: 10,
      title: 'Live Streaming & Social App ( Niki Live )',
      slug: 'partner-app-2',
      hero: {
        badgeText: 'Live Streaming & Social App',
        description:
          'Niki Live is a live streaming and social entertainment app that helps users discover live broadcasts, meet new people, and interact through video, voice, and chat features. Connect globally and enjoy real-time entertainment.',
        primaryCtaLabel: 'Download Niki Live',
        heroImage: {
          url: 'https://api.livengage.com/uploads/Gemini_Generated_Image_rr644orr644orr64_b3d9f6f68f.png',
        },
      },
      videoPreview: {
        video: {
          url: 'https://api.livengage.com/uploads/Niki_Live_video_b98e33a61d.mp4',
        },
      },
    },
    {
      id: 11,
      title: 'Vone App – Live, Video Party & Fun',
      slug: 'partner-app',
      hero: {
        badgeText: 'Live Video Party & Fun',
        description:
          'Vone, known internationally as Poppo Live, lets you watch live streams, join party rooms, meet new people, and engage with vibrant global creators with daily interactive rewards.',
        primaryCtaLabel: 'Download Vone App',
        heroImage: {
          url: 'https://api.livengage.com/uploads/Gemini_Generated_Image_35wf8235wf8235wf_61fde5c937.png',
        },
      },
      videoPreview: {
        video: {
          url: 'https://api.livengage.com/uploads/Poppo_Live_Video_8251861183.mp4',
        },
      },
    },
  ];
  const featuredPartnerApps = rawApps.length > 0 ? rawApps : exactLivengageFeaturedApps;

  return (
    <>
      <FaqJsonLd faqs={data.faq?.faqs || HOME_PAGE_DATA.faq.faqs} />
      {data.hero && <Hero data={data.hero} />}
      {data.stats && <Stats data={data.stats} />}
      {data.services && <Services data={data.services} />}
      {featuredPartnerApps.length > 0 && <PartnerApps data={{ heading: "Featured Partner Apps", apps: featuredPartnerApps }} />}
      {data.whyChooseUs && <WhyChooseUs data={data.whyChooseUs} />}
      {data.testimonials && <Testimonials data={data.testimonials} />}
      {data.faq && <FAQ data={data.faq} />}
      {data.cta && <CTA data={data.cta} />}
    </>
  );
}
