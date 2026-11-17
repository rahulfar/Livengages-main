import type { Metadata } from 'next';

import { HeroSection } from '@/components/BecomeAHost/HeroSection';
import { StatsSection } from '@/components/BecomeAHost/StatsSection';
import { RequirementsSection } from '@/components/BecomeAHost/RequirementsSection';
import { BenefitsSection } from '@/components/BecomeAHost/BenefitsSection';
import { ApplicationSection } from '@/components/BecomeAHost/ApplicationSection';
import { PartnerApps } from '@/components/PartnerApps';
import { fetchAPI, getBecomeAHostPageQuery } from '@/lib/api';
import { BreadcrumbJsonLd, HowToJsonLd, FaqJsonLd } from '@/components/JsonLd';
import {
  HOST_HERO,
  HOST_STATS,
  HOST_REQUIREMENTS,
  HOST_BENEFITS,
  HOST_APPLICATION_DATA,
} from '@/constants/become-a-host';
import { EXACT_FEATURED_PARTNER_APPS } from '@/data/featured-partner-apps';

export const metadata: Metadata = {
  title: 'Become a Live Streaming Host – Free, Earn From Home',
  description:
    'Become a live streaming host on Vone, Chill Chat and Niki Live. Free to join, step-by-step training, India payouts via UPI and bank. Apply in 2 minutes.',
  alternates: {
    canonical: 'https://www.livengage.com/become-a-host',
  },
  openGraph: {
    title: 'Become a Live Streaming Host – Free, Earn From Home',
    description:
      'Become a live streaming host on Vone, Chill Chat and Niki Live. Free to join, step-by-step training, India payouts via UPI and bank. Apply in 2 minutes.',
    url: 'https://www.livengage.com/become-a-host',
    siteName: 'Livengage',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Become a Live Streaming Host – Free, Earn From Home',
    description:
      'Become a live streaming host on Vone, Chill Chat and Niki Live. Free to join, step-by-step training, India payouts via UPI and bank. Apply in 2 minutes.',
    images: ['/og-image.png'],
  },
};

export const revalidate = 0; // Disable caching for testing

const HOST_FAQS = [
  {
    question: 'How much can a live streaming host earn with Livengage?',
    answer:
      'Earnings depend on your streaming hours, content engagement, and viewer gifting. Top-performing hosts earn substantial weekly payouts through verified in-app gifting, target milestones, and agency performance bonuses.',
  },
  {
    question: 'Do I have to pay any registration fees to join?',
    answer:
      'No. Joining Livengage as a host is 100% free with zero registration fees or hidden startup costs.',
  },
  {
    question: 'Which live streaming apps can I broadcast on?',
    answer:
      'We represent creators on major global platforms including Vone App (Poppo Live), Chill Chat (Chamet), Niki Live, and Bigo Live.',
  },
  {
    question: 'How and when do I receive payouts in India?',
    answer:
      'Payouts in India are distributed weekly directly into your bank account (NEFT/IMPS) or UPI with full transparency and zero deduction fees.',
  },
  {
    question: 'What is the difference between Vone App and Poppo Live?',
    answer:
      'Vone App is the optimized regional version running on the Poppo Live video streaming architecture, allowing smooth coin and gift redemption in India.',
  },
  {
    question: 'Is Chamet now Chill Chat in India?',
    answer:
      'Yes, Chamet operates as Chill Chat in India. Creators access the same global user base, gifting rates, and live video features with complete local support.',
  },
  {
    question: 'How many hours do I need to stream daily?',
    answer:
      'Most platforms recommend a minimum of 2 hours per day (15–20 days per month) to hit active bonus thresholds, but you can set your own flexible schedule.',
  },
  {
    question: 'Do I need professional cameras or equipment to start?',
    answer:
      'No. A modern smartphone with a clear camera, stable 4G/5G or Wi-Fi internet, and good room lighting (or a basic ring light) is all you need to start.',
  },
  {
    question: 'How fast does agency verification and VIP badge activation take?',
    answer:
      'Once you submit your application, our team reviews and fast-tracks your host verification and VIP agency badge within 24 hours.',
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
      <PartnerApps data={{ heading: "Featured Partner Apps", apps: EXACT_FEATURED_PARTNER_APPS }} />

      {/* Host FAQs Section */}
      <section className="py-20 px-6 md:px-12 max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-xs uppercase font-bold text-primary tracking-widest px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 inline-block mb-3">
            Host Help & Payouts
          </span>
          <h2 className="font-display-md text-3xl md:text-5xl font-extrabold text-on-surface dark:text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-on-surface-variant dark:text-[#94A3B8] text-lg">
            Everything you need to know about starting your streaming journey, targets, and weekly India payouts.
          </p>
        </div>
        <div className="space-y-4">
          {HOST_FAQS.map((faq, index) => (
            <details
              key={index}
              className="glass-card rounded-2xl p-6 border border-outline-variant/30 dark:border-white/10 group cursor-pointer"
            >
              <summary className="font-bold text-lg text-on-surface dark:text-white list-none flex justify-between items-center select-none">
                <span>{faq.question}</span>
                <span className="material-symbols-outlined text-primary group-open:rotate-180 transition-transform">
                  keyboard_arrow_down
                </span>
              </summary>
              <p className="mt-4 text-on-surface-variant dark:text-[#94A3B8] leading-relaxed">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </section>

      <ApplicationSection data={pageData.applicationSection} />
    </main>
  );
}
