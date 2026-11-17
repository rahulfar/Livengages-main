import type { Metadata } from 'next';
import Link from 'next/link';

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
import { CreditCard, Landmark, ShieldCheck, Zap, HelpCircle, ChevronDown, CheckCircle2 } from 'lucide-react';

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
      'Earnings depend on your streaming hours, content engagement, and viewer gifting. Dedicated hosts streaming 2 to 3 hours daily typically earn between ₹25,000 and ₹75,000+ per month, with top-tier creators on Chill Chat (Chamet) and Vone App (Poppo Live) exceeding ₹1,50,000 monthly through direct virtual gifting, PK event bonuses, and private video call rewards.',
  },
  {
    question: 'Do I have to pay any registration or onboarding fees to join?',
    answer:
      'No. Joining Livengage as a verified creator is 100% free. We never charge registration fees, security deposits, training costs, or franchise royalties. Our agency is compensated directly by partner platforms as an operational bonus, so 100% of your platform coin and bean earnings remain yours.',
  },
  {
    question: 'Which live streaming apps can I broadcast on in India?',
    answer:
      'We represent creators on leading global platforms including Chill Chat (the official compliant Indian app for Chamet), Vone App (the official Indian app for Poppo Live), and Niki Live. We match you with the platform that best fits your personality, language, and content style.',
  },
  {
    question: 'How and when do I receive payouts in India?',
    answer:
      'Payouts in India are processed weekly with direct settlements into your verified Indian bank account via IMPS/NEFT or to your registered UPI ID (Google Pay, PhonePe, Paytm, BHIM). Livengage provides transparent coin-to-INR statements with zero hidden deduction fees.',
  },
  {
    question: 'What is the relationship between Vone App and Poppo Live?',
    answer:
      'Vone App is the official, compliant application operating on the Poppo Live video streaming infrastructure specifically designed for creators in India. It shares the same global callers, live audience rooms, and diamond monetization with direct Indian payment integration.',
  },
  {
    question: 'Why is Chamet known as Chill Chat in India?',
    answer:
      'Chamet officially operates under the brand name Chill Chat in India. Creators access the exact same international caller base across North America, Europe, and the Middle East with identical per-minute call rates, gifting rewards, and full local customer support.',
  },
  {
    question: 'How many hours do I need to stream each day?',
    answer:
      'You have complete flexibility over your broadcast schedule. Most successful hosts broadcast 2 to 3 hours daily, preferably during peak evening traffic windows (8:00 PM – 11:30 PM IST). Hitting minimum monthly day targets unlocks additional platform tier bonuses.',
  },
  {
    question: 'Do I need professional studio cameras or lighting equipment to start?',
    answer:
      'No. Over 95% of our highest-earning streamers broadcast using everyday smartphones. A smartphone with a clean front camera, stable 4G/5G or Wi-Fi internet, and basic soft front lighting (or an inexpensive ring light) is all you need to start.',
  },
  {
    question: 'How fast does agency verification and VIP badge activation take?',
    answer:
      'Once you submit your application through our form, our talent management team reviews your details and fast-tracks your host verification and VIP agency badge within 24 hours so you can go live immediately.',
  },
  {
    question: 'What safety and privacy protections are in place for female hosts?',
    answer:
      'Host safety is our absolute priority. All partner apps offer instant user-blocking, room-moderation tools, and real-time AI moderation against harassment. Furthermore, creators use stage aliases and never reveal personal phone numbers or residential addresses.',
  },
];

export default async function BecomeAHostPage() {
  let raw: any = {};
  try {
    const query = getBecomeAHostPageQuery();
    const strapiRes = await fetchAPI(`/api/become-a-host-page?${query}`);
    raw = strapiRes?.data?.attributes || strapiRes?.data || {};
  } catch (err) {
    console.warn('[BecomeAHostPage] Using fallback data:', err);
  }

  const rawRequirements = raw.Requirements || raw.requirements;
  const rawBenefits = raw.Benefits || raw.benefits;
  const rawAppSection = raw.ApplicationSection || raw.applicationSection;

  const pageData = {
    hero: {
      ...HOST_HERO,
      heading: 'Become a Live Streaming Host and Start Earning',
      description:
        'Join Livengage to broadcast on top global live streaming platforms including Vone App (Poppo Live), Chill Chat (Chamet), and Niki Live with full agency support, 1-on-1 coaching, and weekly India payouts via UPI and bank transfer.',
      primaryCtaLabel: 'Apply as a Host Now',
      primaryCtaHref: '#apply-now',
      secondaryCtaLabel: 'Join Vone with our invite link',
      secondaryCtaHref: 'https://invite-vone.com/fnP7Zr',
    },
    stats: { stats: HOST_STATS },
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
      name: 'Submit Host Application',
      text: 'Fill out the host application form with your name, WhatsApp number, and chosen streaming platform.',
    },
    {
      name: 'Platform Matching & Orientation',
      text: 'Our talent coordinators connect via WhatsApp to evaluate your content style and assign your official agency ID.',
    },
    {
      name: 'Account Verification & VIP Badge',
      text: 'Complete basic in-app KYC verification and receive your VIP agency badge for priority server discoverability.',
    },
    {
      name: 'Go Live & Collect Weekly Earnings',
      text: 'Start broadcasting to global audiences, earn virtual gifts and call rewards, and receive automated weekly payouts.',
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

      {/* India Payouts & Settlement Methods Section */}
      <section className="py-20 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest mb-4">
            <Zap className="w-3.5 h-3.5" />
            Fast, Reliable Creator Settlements
          </div>
          <h2 className="font-display-md text-3xl md:text-5xl font-black text-on-surface dark:text-white mb-6">
            Transparent Weekly Payouts in India
          </h2>
          <p className="text-on-surface-variant dark:text-[#94A3B8] text-base md:text-lg leading-relaxed">
            We understand that timely, reliable compensation is vital for creator confidence. Livengage operates an automated settlement framework ensuring every bean and diamond you earn converts smoothly into Indian Rupees (INR) with zero platform deductions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="glass-card rounded-[28px] p-8 border border-outline-variant/30 dark:border-white/10 space-y-4 hover:border-primary/40 transition-all">
            <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6">
              <Zap className="w-7 h-7" />
            </div>
            <h3 className="font-bold text-2xl text-on-surface dark:text-white">
              UPI Instant Transfer
            </h3>
            <p className="text-on-surface-variant dark:text-[#94A3B8] leading-relaxed text-sm md:text-base">
              Receive your weekly earnings directly to any verified UPI ID including Google Pay, PhonePe, Paytm, or BHIM. Settlements reflect immediately with zero processing delays.
            </p>
            <ul className="space-y-2 pt-2 text-sm text-on-surface dark:text-white/90">
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" /> Zero transaction fees</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" /> Instant notification alerts</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" /> Works with all Indian banks</li>
            </ul>
          </div>

          <div className="glass-card rounded-[28px] p-8 border border-outline-variant/30 dark:border-white/10 space-y-4 hover:border-primary/40 transition-all">
            <div className="w-14 h-14 rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary mb-6">
              <Landmark className="w-7 h-7" />
            </div>
            <h3 className="font-bold text-2xl text-on-surface dark:text-white">
              Direct Bank Deposit (IMPS/NEFT)
            </h3>
            <p className="text-on-surface-variant dark:text-[#94A3B8] leading-relaxed text-sm md:text-base">
              Prefer direct bank credit? Register your Indian bank account with IFSC code. Automated payouts process every Tuesday, crediting directly to your savings or current account.
            </p>
            <ul className="space-y-2 pt-2 text-sm text-on-surface dark:text-white/90">
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" /> Supported by SBI, HDFC, ICICI, etc.</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" /> Official bank UTR tracking</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" /> Automated GST / TDS invoices</li>
            </ul>
          </div>

          <div className="glass-card rounded-[28px] p-8 border border-outline-variant/30 dark:border-white/10 space-y-4 hover:border-primary/40 transition-all">
            <div className="w-14 h-14 rounded-2xl bg-tertiary/10 flex items-center justify-center text-tertiary mb-6">
              <ShieldCheck className="w-7 h-7" />
            </div>
            <h3 className="font-bold text-2xl text-on-surface dark:text-white">
              Agency Payment Protection
            </h3>
            <p className="text-on-surface-variant dark:text-[#94A3B8] leading-relaxed text-sm md:text-base">
              Never worry about held funds or payment bugs. Our agency finance team provides 24/7 payment reconciliation and disputes directly with platform headquarters on your behalf.
            </p>
            <ul className="space-y-2 pt-2 text-sm text-on-surface dark:text-white/90">
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" /> 100% earnings pass-through</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" /> Real-time exchange rate parity</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" /> Dedicated WhatsApp finance helpdesk</li>
            </ul>
          </div>
        </div>
      </section>

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
                <ChevronDown className="w-5 h-5 text-primary group-open:rotate-180 transition-transform" />
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
