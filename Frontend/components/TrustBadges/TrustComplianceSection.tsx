import React from 'react';
import Link from 'next/link';
import { ShieldCheck, CreditCard, Headphones, Lock, ArrowRight } from 'lucide-react';
import { SITE_STATS } from '@/constants/site-stats';

export function TrustComplianceSection() {
  const complianceFeatures = [
    {
      icon: ShieldCheck,
      title: 'Official Platform Authorization',
      description:
        'Direct Tier-1 contracts on Chill Chat (Chamet), Vone App (Poppo Live), and Niki Live with VIP badges and zero middleman fee deductions.',
      tag: 'Direct Contract',
    },
    {
      icon: CreditCard,
      title: 'Automated Weekly Settlements',
      description:
        'Transparent weekly earnings delivered directly to your bank account, UPI, or Payoneer across 50+ global countries with zero delays.',
      tag: 'Fast Payouts',
    },
    {
      icon: Headphones,
      title: '24/7 Dedicated Agency Support',
      description:
        'Continuous talent coaching, stream optimization, lighting/audio guides, and priority dispute mediation from experienced managers.',
      tag: '24/7 Mentorship',
    },
    {
      icon: Lock,
      title: 'Zero Upfront Fees & Safety',
      description:
        '100% free registration for hosts and partner agents. No registration fees, no hidden startup costs, and full privacy protection.',
      tag: '0% Startup Fees',
    },
  ];

  const partnerPills = [
    { name: 'Vone App (Poppo Live)', href: '/vone-app-agency', active: true },
    { name: 'Chill Chat (Chamet)', href: '/chill-chat-agency', active: true },
    { name: 'Niki Live', href: '/niki-live-agency', active: true },
    { name: 'Bigo Live', href: '/services', active: true },
    { name: 'Crush Live', href: '/services', active: true },
  ];

  return (
    <section className="py-[90px] relative overflow-hidden bg-surface-container-lowest/60 dark:bg-[#070110]/80 border-t border-outline-variant/30 dark:border-white/5">
      {/* Background glow orbs */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] bg-secondary-container/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary dark:text-[#FF5E89] text-xs font-bold uppercase tracking-widest mb-4">
            Official Agency Network & Trust
          </span>
          <h2 className="font-display-md text-3xl md:text-5xl font-black text-on-surface dark:text-white tracking-tight mb-6">
            Enterprise Management. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              Transparent Creator Monetization.
            </span>
          </h2>
          <p className="text-on-surface-variant dark:text-[#94A3B8] text-lg leading-relaxed">
            Livengage connects over {SITE_STATS.creators} creators and partner sub-agencies with verified global broadcasting apps, backed by official contracts and 24/7 dedicated support.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
          {complianceFeatures.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div
                key={index}
                className="glass-card p-8 rounded-3xl border border-outline-variant/30 dark:border-white/10 hover:border-primary/50 dark:hover:border-primary/50 transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between group shadow-sm hover:shadow-xl"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-primary/10 dark:bg-primary/20 flex items-center justify-center text-primary dark:text-[#FF5E89] group-hover:scale-110 transition-transform">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-surface-container dark:bg-white/5 text-on-surface-variant dark:text-[#CBD5E1]">
                      {item.tag}
                    </span>
                  </div>
                  <h3 className="font-bold text-xl text-on-surface dark:text-white mb-3">
                    {item.title}
                  </h3>
                  <p className="text-sm text-on-surface-variant dark:text-[#94A3B8] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Live Streaming App Quick Links Strip */}
        <div className="glass-card p-8 rounded-3xl border border-outline-variant/30 dark:border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h4 className="font-bold text-lg text-on-surface dark:text-white mb-1">
              Explore Our Official Platform Partnerships
            </h4>
            <p className="text-xs text-on-surface-variant dark:text-[#94A3B8]">
              Direct contracts, dedicated support managers, and weekly verified payouts.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            {partnerPills.map((pill, idx) => (
              <Link
                key={idx}
                href={pill.href}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold transition-all border border-outline-variant/40 dark:border-white/10 bg-surface dark:bg-white/5 text-on-surface dark:text-white hover:border-primary hover:text-primary dark:hover:text-[#FF5E89] shadow-sm hover:shadow"
              >
                <span>{pill.name}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
