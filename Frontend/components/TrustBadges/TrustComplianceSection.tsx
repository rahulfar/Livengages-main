import React from 'react';
import Link from 'next/link';

export function TrustComplianceSection() {
  const complianceFeatures = [
    {
      icon: 'verified',
      title: 'Official Platform Authorization',
      description:
        'Direct Tier-1 contracts on Chill Chat (Chamet), Vone App (Poppo Live), and Niki Live with VIP badges and zero middleman fee deductions.',
      tag: 'Direct Contract',
    },
    {
      icon: 'payments',
      title: 'Automated Weekly Settlements',
      description:
        'Transparent weekly earnings delivered directly to your bank account, UPI, or Payoneer across 50+ global countries with zero delays.',
      tag: 'Fast Payouts',
    },
    {
      icon: 'support_agent',
      title: '24/7 Dedicated Agency Support',
      description:
        'Continuous talent coaching, stream optimization, lighting/audio guides, and priority dispute mediation from experienced managers.',
      tag: '24/7 Mentorship',
    },
    {
      icon: 'lock',
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
            Livengage connects over 10,000 creators and partner sub-agencies with verified global broadcasting apps, backed by official contracts and 24/7 dedicated support.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
          {complianceFeatures.map((item, index) => (
            <div
              key={index}
              className="glass-card p-8 rounded-3xl border border-outline-variant/30 dark:border-white/10 hover:border-primary/50 dark:hover:border-primary/50 transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between group shadow-sm hover:shadow-xl"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 dark:bg-primary/20 flex items-center justify-center text-primary dark:text-[#FF5E89] group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined text-2xl">{item.icon}</span>
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
          ))}
        </div>

        {/* Live Streaming App Quick Links Strip */}
        <div className="glass-card p-8 rounded-3xl border border-outline-variant/30 dark:border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h4 className="font-bold text-lg text-on-surface dark:text-white mb-1">
              Explore Our Official Platform Partnerships
            </h4>
            <p className="text-xs text-on-surface-variant dark:text-[#94A3B8]">
              Verified application guides, agency rules, and commission schedules.
            </p>
          </div>
          <div className="flex flex-wrap gap-2.5 justify-center md:justify-end">
            {partnerPills.map((pill, idx) => (
              <Link
                key={idx}
                href={pill.href}
                className="px-4 py-2 rounded-full text-xs font-bold border border-outline-variant/40 dark:border-white/15 bg-white/60 dark:bg-white/5 hover:bg-primary hover:text-white dark:hover:bg-primary dark:hover:text-white hover:border-primary transition-all duration-200"
              >
                {pill.name} →
              </Link>
            ))}
          </div>
        </div>

        {/* Transparency / Income Disclaimer */}
        <div className="mt-8 text-center">
          <p className="text-xs text-on-surface-variant/70 dark:text-[#64748B] italic max-w-2xl mx-auto">
            *Audited Performance & Income Disclaimer: Earnings depend on streamer broadcasting hours, audience interaction, and verified viewer gifting across each host platform. Livengage provides authorized contracts, talent coaching, and VIP badges with zero upfront fees.
          </p>
        </div>
      </div>
    </section>
  );
}
