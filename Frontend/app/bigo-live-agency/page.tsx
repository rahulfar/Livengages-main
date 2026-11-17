import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, ShieldCheck, CreditCard, Headphones, Sparkles } from 'lucide-react';
import { FaqJsonLd, BreadcrumbJsonLd } from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Bigo Live Agency: Join as a Host or Agency Partner – Livengage',
  description:
    'Join Livengage, an official Bigo Live agency. Direct agency family ID, bean incentives, official PK battles, monthly salary bonuses, and dedicated talent management.',
  alternates: {
    canonical: 'https://www.livengage.com/bigo-live-agency',
  },
  openGraph: {
    title: 'Bigo Live Agency: Join as a Host or Agency Partner – Livengage',
    description:
      'Join Livengage, an official Bigo Live agency. Direct agency family ID, bean incentives, official PK battles, monthly salary bonuses, and dedicated talent management.',
    url: 'https://www.livengage.com/bigo-live-agency',
    siteName: 'Livengage',
    locale: 'en_IN',
    type: 'website',
  },
};

const BIGO_FAQS = [
  {
    question: 'Why should I join Bigo Live through an agency like Livengage?',
    answer:
      'Joining Bigo Live through Livengage gives you an official agency contract, an official Family ID, access to monthly base targets (salary in beans), priority PK battle invitations, protection against unjust bans, and professional streaming coaching.',
  },
  {
    question: 'What are the minimum requirements to become an official Bigo Live host?',
    answer:
      'You need a smartphone with a quality camera, a stable internet connection, an engaging personality, and the ability to stream at least 30–40 hours per month across 15–20 active days.',
  },
  {
    question: 'How do payouts work on Bigo Live?',
    answer:
      'Hosts receive beans during live broadcasts and through official monthly quota achievements. 210 beans equals $1 USD. Payouts can be cashed out directly through the Bigo Live wallet or via Livengage agency bank wire / UPI settlements.',
  },
  {
    question: 'Can I recruit other broadcasters as a Bigo sub-agent?',
    answer:
      'Yes. Livengage offers sub-agency partnership arrangements where you recruit creators under our master agency ID and receive direct commission overrides on your entire team monthly volume.',
  },
];

export default function BigoLiveAgencyPage() {
  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Partner Apps', url: '/services' },
    { name: 'Bigo Live Agency', url: '/bigo-live-agency' },
  ];

  return (
    <main className="bg-background text-on-background min-h-screen pt-28 pb-20 overflow-x-hidden">
      <BreadcrumbJsonLd items={breadcrumbs} />
      <FaqJsonLd faqs={BIGO_FAQS} />

      {/* Hero Section */}
      <section className="relative px-6 md:px-12 max-w-7xl mx-auto py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider mb-6">
              Official Partner Agency
            </span>
            <h1 className="font-display-lg text-4xl md:text-6xl font-black text-on-surface dark:text-white mb-6 leading-tight">
              Bigo Live Agency: <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                Monetize Your Talent with an Official Contract
              </span>
            </h1>
            <p className="text-on-surface-variant text-lg leading-relaxed mb-8 max-w-2xl">
              Elevate your broadcasting career on the world’s leading live streaming network. Livengage provides direct Bigo Live agency contracts, family tier boosts, and dedicated streamer support.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/become-a-host"
                className="btn-gradient px-8 py-4 rounded-full text-white font-bold text-lg flex items-center justify-center gap-2 hover:scale-105 transition-all shadow-lg"
              >
                <span>Apply as a Host</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/become-an-agent"
                className="px-8 py-4 rounded-full border-2 border-outline-variant text-on-surface dark:text-white font-bold text-lg flex items-center justify-center hover:bg-surface-container transition-colors"
              >
                Register as an Agent
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5 glass-card p-8 rounded-3xl border border-outline-variant/30">
            <h3 className="font-bold text-xl text-on-surface dark:text-white mb-6">
              Bigo Agency Key Advantages
            </h3>
            <ul className="space-y-4">
              {[
                'Official contract eligibility and monthly bean salary targets',
                'VIP streamer protection and account mediation',
                'Official PK tournament matchmaking against top agencies',
                'Stream coaching: audio, lighting, retention, and gifting psychology',
                'Fast settlements via local bank transfer or UPI',
              ].map((feat, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-on-surface-variant">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 max-w-4xl mx-auto px-6 md:px-12">
        <h2 className="font-display-md text-3xl font-bold text-center text-on-surface dark:text-white mb-10">
          Bigo Live Agency FAQs
        </h2>
        <div className="space-y-4">
          {BIGO_FAQS.map((faq, i) => (
            <div key={i} className="glass-card p-6 rounded-2xl border border-outline-variant/30">
              <h3 className="font-bold text-lg text-on-surface dark:text-white mb-2">
                {faq.question}
              </h3>
              <p className="text-on-surface-variant text-sm leading-relaxed">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
