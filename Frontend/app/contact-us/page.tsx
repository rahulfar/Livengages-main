import type { Metadata } from 'next';
import { ChevronDown } from 'lucide-react';
import {
  ContactHero,
  ContactForm,
  ContactInfoCards,
  OperationalNetworks,
  GlobalMap,
} from '@/components/contact';
import { PartnerApps } from '@/components/PartnerApps';
import {
  CONTACT_HERO,
  CONTACT_CHANNELS,
  OPERATIONAL_NETWORKS,
  GLOBAL_MAP_DATA,
} from '@/constants/contact';
import { BreadcrumbJsonLd, FaqJsonLd } from '@/components/JsonLd';
import { EXACT_FEATURED_PARTNER_APPS } from '@/data/featured-partner-apps';

export const metadata: Metadata = {
  title: 'Contact Livengage – WhatsApp & Email Support',
  description:
    'Questions about becoming a host or agent? Chat with Livengage on WhatsApp or email our support team. We reply in minutes, 24/7.',
  alternates: {
    canonical: 'https://www.livengage.com/contact-us',
  },
  openGraph: {
    title: 'Contact Livengage – WhatsApp & Email Support',
    description:
      'Questions about becoming a host or agent? Chat with Livengage on WhatsApp or email our support team. We reply in minutes, 24/7.',
    url: 'https://www.livengage.com/contact-us',
    siteName: 'Livengage',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Livengage – WhatsApp & Email Support',
    description:
      'Questions about becoming a host or agent? Chat with Livengage on WhatsApp or email our support team. We reply in minutes, 24/7.',
    images: ['/og-image.png'],
  },
};

const CONTACT_FAQS = [
  {
    question: 'How fast does Livengage review host applications?',
    answer:
      'Our dedicated talent acquisition team reviews and processes host applications within 24 hours. Once accepted, you will receive personalized onboarding and account setup assistance.',
  },
  {
    question: 'How do live streaming payouts work for creators in India and globally?',
    answer:
      'Livengage supports direct bank transfers, UPI, Payoneer, and international wire transfers with automated weekly and bi-weekly settlements in local currencies.',
  },
  {
    question: 'Can I register as an agency if I already manage streamers?',
    answer:
      'Yes. Livengage offers enterprise sub-agency partnerships with direct platform contracts on Chill Chat (Chamet), Vone, and Niki Live, offering highest commission overrides.',
  },
  {
    question: 'What are the technical requirements to start live streaming?',
    answer:
      'All you need is a smartphone with a quality camera, a stable internet connection (Wi-Fi or 4G/5G), and an engaging personality. We provide coaching to maximize your earnings.',
  },
];

export default function ContactPage() {
  const showForm = true;

  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Contact Us', url: '/contact-us' },
  ];

  return (
    <main className="bg-[#F8FAFC] dark:bg-gradient-to-b dark:from-[#160126] dark:to-[#0B0114] text-on-background overflow-x-hidden pt-20 min-h-screen">
      <BreadcrumbJsonLd items={breadcrumbs} />
      <FaqJsonLd faqs={CONTACT_FAQS} />

      <ContactHero data={CONTACT_HERO} />

      {/* Contact Channels & Form Grid */}
      <section className="max-w-[1280px] mx-auto px-[32px] mb-[80px] mt-[80px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left: Inquiry Form */}
          {showForm && (
            <div className="lg:col-span-8">
              <ContactForm />
            </div>
          )}
          {/* Right: Contact Channels */}
          <div className={showForm ? 'lg:col-span-4' : 'lg:col-span-12'}>
            <ContactInfoCards data={{ items: CONTACT_CHANNELS as any }} />
          </div>
        </div>
      </section>

      {/* Operational Networks Section */}
      <section className="bg-surface-container-low dark:bg-[#150222] py-[80px]">
        <div className="max-w-[1280px] mx-auto px-[32px]">
          <OperationalNetworks data={{ networks: OPERATIONAL_NETWORKS as any }} />
          <GlobalMap data={GLOBAL_MAP_DATA} />
        </div>
      </section>

      <PartnerApps data={{ heading: "Featured Partner Apps", apps: EXACT_FEATURED_PARTNER_APPS }} />

      {/* Support FAQ Section (Item 38 in audit) */}
      <section className="py-[80px] max-w-4xl mx-auto px-6 md:px-12">
        <div className="text-center mb-12">
          <h2 className="font-display-md text-3xl md:text-4xl font-bold text-on-surface dark:text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-on-surface-variant dark:text-[#94A3B8]">
            Quick answers about applying, payments, and agency partnerships.
          </p>
        </div>
        <div className="space-y-4">
          {CONTACT_FAQS.map((faq, index) => (
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
    </main>
  );
}
