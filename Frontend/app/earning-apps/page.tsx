import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, ShieldCheck, DollarSign, Smartphone } from 'lucide-react';
import { FaqJsonLd, BreadcrumbJsonLd } from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Top Live Streaming Earning Apps in India (2026 Comparison) – Livengage',
  description:
    'Compare top live streaming earning apps in India: Chill Chat (Chamet), Vone App (Poppo Live), Niki Live, and Bigo Live. Payout methods, beans conversion, and agency bonuses.',
  alternates: {
    canonical: 'https://www.livengage.com/earning-apps',
  },
  openGraph: {
    title: 'Top Live Streaming Earning Apps in India (2026 Comparison) – Livengage',
    description:
      'Compare top live streaming earning apps in India: Chill Chat (Chamet), Vone App (Poppo Live), Niki Live, and Bigo Live. Payout methods, beans conversion, and agency bonuses.',
    url: 'https://www.livengage.com/earning-apps',
    siteName: 'Livengage',
    locale: 'en_IN',
    type: 'website',
  },
};

const APPS_LIST = [
  {
    name: 'Chill Chat (Chamet)',
    slug: '/chill-chat-agency',
    earningModel: '1-on-1 Video Calls, Private Audio, Virtual Gifts',
    payoutSpeed: 'Weekly via UPI & Direct Indian Bank Deposit',
    bestFor: 'Female broadcasters seeking high hourly earning potential',
    minRequirements: 'Android smartphone, verified KYC, stable 4G/Wi-Fi',
  },
  {
    name: 'Vone App (Poppo Live)',
    slug: '/vone-app-agency',
    earningModel: 'Live Broadcasts, PK Battles, Party Rooms, Hourly Tasks',
    payoutSpeed: 'Daily & Weekly via UPI, Bank Transfer & Epay',
    bestFor: 'Talented talk show hosts, singers, gamers, and party room leads',
    minRequirements: 'iOS or Android phone, facial recognition verification',
  },
  {
    name: 'Niki Live',
    slug: '/niki-live-agency',
    earningModel: 'Multi-seat Audio/Video Rooms, Virtual Gifting, Official PKs',
    payoutSpeed: 'Weekly Settlements directly to your verified account',
    bestFor: 'Group entertainment, conversational streams, and beginner hosts',
    minRequirements: 'Smartphone with front camera, 18+ years of age',
  },
  {
    name: 'Bigo Live',
    slug: '/bigo-live-agency',
    earningModel: 'Monthly Bean Quotas, VIP Gifting, Agency Family Contests',
    payoutSpeed: 'Monthly and weekly via in-app wallet and agency payouts',
    bestFor: 'High-production creators seeking massive global visibility',
    minRequirements: 'Consistent streaming schedule (30+ hours/month)',
  },
];

const EARNING_FAQS = [
  {
    question: 'Which live streaming app pays the most in India?',
    answer:
      'Chill Chat (Chamet) and Vone App (Poppo Live) consistently offer the highest hourly earning potential in India for dedicated hosts, with top creators earning between ₹30,000 and ₹1,50,000+ monthly through 1-on-1 calls and PK gifting.',
  },
  {
    question: 'Can I stream on multiple live earning apps at the same time?',
    answer:
      'Yes, as long as you fulfill each platform minimum active streaming hour commitments. Many Livengage creators stream on Vone in the morning and Chill Chat in the evening to maximize daily revenue.',
  },
  {
    question: 'Do I have to pay any registration fee to start earning?',
    answer:
      'No. Livengage registration is 100% free for both hosts and agents. Never pay any agency or agent asking for upfront registration fees.',
  },
];

export default function EarningAppsPage() {
  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Guides', url: '/blog' },
    { name: 'Earning Apps', url: '/earning-apps' },
  ];

  return (
    <main className="bg-background text-on-background min-h-screen pt-28 pb-20 overflow-x-hidden">
      <BreadcrumbJsonLd items={breadcrumbs} />
      <FaqJsonLd faqs={EARNING_FAQS} />

      <section className="px-6 md:px-12 max-w-7xl mx-auto py-16">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider mb-4">
            2026 Comprehensive Comparison
          </span>
          <h1 className="font-display-lg text-4xl md:text-5xl font-black text-on-surface dark:text-white mb-6">
            Top Live Streaming Earning Apps in India
          </h1>
          <p className="text-on-surface-variant text-lg leading-relaxed">
            Discover verified platforms where content creators, conversationalists, and performers earn real income through gift monetization, hourly incentives, and agency bonuses.
          </p>
        </div>

        {/* Comparison Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {APPS_LIST.map((app, i) => (
            <div
              key={i}
              className="glass-card p-8 rounded-3xl border border-outline-variant/30 flex flex-col justify-between hover:border-primary/50 transition-all hover:-translate-y-1"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h2 className="font-bold text-2xl text-on-surface dark:text-white">{app.name}</h2>
                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-primary/10 text-primary">
                    Verified Partner
                  </span>
                </div>
                <div className="space-y-3 mb-6 text-sm text-on-surface-variant">
                  <p>
                    <strong className="text-on-surface dark:text-white">Monetization: </strong>
                    {app.earningModel}
                  </p>
                  <p>
                    <strong className="text-on-surface dark:text-white">Payout Method: </strong>
                    {app.payoutSpeed}
                  </p>
                  <p>
                    <strong className="text-on-surface dark:text-white">Ideal For: </strong>
                    {app.bestFor}
                  </p>
                  <p>
                    <strong className="text-on-surface dark:text-white">Requirements: </strong>
                    {app.minRequirements}
                  </p>
                </div>
              </div>

              <div className="pt-6 border-t border-outline-variant/30 flex items-center justify-between">
                <Link
                  href={app.slug}
                  className="font-bold text-primary flex items-center gap-1.5 hover:underline"
                >
                  <span>View Agency Guide</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/become-a-host"
                  className="px-5 py-2.5 rounded-full btn-gradient text-white text-xs font-bold"
                >
                  Apply to Stream
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* FAQs */}
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display-md text-3xl font-bold text-center text-on-surface dark:text-white mb-10">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {EARNING_FAQS.map((faq, i) => (
              <div key={i} className="glass-card p-6 rounded-2xl border border-outline-variant/30">
                <h3 className="font-bold text-lg text-on-surface dark:text-white mb-2">
                  {faq.question}
                </h3>
                <p className="text-on-surface-variant text-sm leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
