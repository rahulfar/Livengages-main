import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, HelpCircle, ShieldCheck, DollarSign, Users, BookOpen } from 'lucide-react';
import { FaqJsonLd, BreadcrumbJsonLd } from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Agency Partner Help Center & Support – Livengage',
  description:
    'Dedicated support and guidance for Livengage sub-agents. Host recruitment strategies, commission payout cycles, agency dashboard setup, and policy compliance.',
  alternates: {
    canonical: 'https://www.livengage.com/agent-help',
  },
  openGraph: {
    title: 'Agency Partner Help Center & Support – Livengage',
    description:
      'Dedicated support and guidance for Livengage sub-agents. Host recruitment strategies, commission payout cycles, agency dashboard setup, and policy compliance.',
    url: 'https://www.livengage.com/agent-help',
    siteName: 'Livengage',
    locale: 'en_IN',
    type: 'website',
  },
};

const AGENT_HELP_TOPICS = [
  {
    title: 'How to Onboard New Hosts to Your Team',
    desc: 'Step-by-step instructions for sending your agency invitation link, guiding hosts through facial verification, and getting them active within 24 hours.',
    href: '/become-an-agent#benefits',
  },
  {
    title: 'Understanding Agency Commission Tiers',
    desc: 'How tier overrides work on Chill Chat (Chamet), Vone (Poppo), and Niki Live. Real calculation examples in INR and USD.',
    href: '/blog/how-to-build-a-live-streaming-agency',
  },
  {
    title: 'Weekly Payout Schedules & Bank Setup',
    desc: 'Everything you need to know about settlement cutoff days, UPI transfer rules, and Indian bank account verification.',
    href: '/become-a-host',
  },
  {
    title: 'App Community Policies & Ban Appeals',
    desc: 'Guidelines on content standards, prohibited behaviors on partner apps, and the official procedure to appeal host account flags.',
    href: '/terms-and-conditions',
  },
];

export default function AgentHelpPage() {
  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Agents', url: '/become-an-agent' },
    { name: 'Agent Help', url: '/agent-help' },
  ];

  return (
    <main className="bg-background text-on-background min-h-screen pt-28 pb-20 overflow-x-hidden">
      <BreadcrumbJsonLd items={breadcrumbs} />

      <section className="px-6 md:px-12 max-w-7xl mx-auto py-16">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider mb-4">
            Partner Operations
          </span>
          <h1 className="font-display-lg text-4xl md:text-5xl font-black text-on-surface dark:text-white mb-6">
            Agency Partner Help & Support Center
          </h1>
          <p className="text-on-surface-variant text-lg leading-relaxed">
            Resources, operational playbooks, and direct WhatsApp support to help Livengage agency leaders scale, manage, and monetize their host roster.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {AGENT_HELP_TOPICS.map((topic, i) => (
            <div key={i} className="glass-card p-8 rounded-3xl border border-outline-variant/30 flex flex-col justify-between hover:border-primary/50 transition-all">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6">
                  <BookOpen className="w-6 h-6" />
                </div>
                <h2 className="font-bold text-xl text-on-surface dark:text-white mb-3">
                  {topic.title}
                </h2>
                <p className="text-sm text-on-surface-variant leading-relaxed mb-6">
                  {topic.desc}
                </p>
              </div>
              <Link href={topic.href} className="text-primary font-bold flex items-center gap-1.5 text-sm hover:underline">
                <span>Read Guide</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>

        {/* Dedicated Support Box */}
        <div className="glass-card p-10 rounded-3xl border border-outline-variant/30 text-center max-w-2xl mx-auto">
          <h3 className="font-bold text-2xl text-on-surface dark:text-white mb-3">
            Need Immediate Agent Assistance?
          </h3>
          <p className="text-on-surface-variant text-sm mb-6">
            Our agency operations managers are on duty 24/7 on WhatsApp to solve technical issues and assist with host onboarding.
          </p>
          <a
            href="https://wa.me/918796802120?text=Hi%20Livengage,%20I%20need%20assistance%20with%20my%20agency%20account"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gradient inline-flex items-center gap-2 px-8 py-4 rounded-full text-white font-bold text-sm shadow-lg hover:scale-105 transition-all"
          >
            <span>Chat with Agency Support</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>
    </main>
  );
}
