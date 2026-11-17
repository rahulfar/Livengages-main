import Image from 'next/image';
import { Icon } from '@/components/ui/Icon';

export function EcosystemFeatures() {
  return (
    <section className="py-[120px] px-6 md:px-12 bg-[#F8FAFC] dark:bg-[#0B0114] relative overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px] -translate-y-1/2 pointer-events-none"></div>
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[150px] -translate-y-1/2 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 reveal-on-scroll">
          <span className="inline-block px-4 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest mb-4">
            Sub-Agency Infrastructure
          </span>
          <h2 className="font-display-lg text-4xl md:text-5xl font-black text-on-surface dark:text-white mb-6">
            Everything You Need to Run an Agency
          </h2>
          <p className="font-body-lg text-lg text-on-surface-variant dark:text-[#94A3B8] leading-relaxed">
            From automated financial infrastructure to operational playbooks, we equip agency partners with enterprise tools.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 relative">
          {/* Centralized Management */}
          <div
            className="md:col-span-8 relative z-10 glass-card p-10 flex flex-col justify-between rounded-[40px] bg-white/70 dark:bg-[#1F0233]/80 backdrop-blur-3xl border border-white dark:border-white/10 shadow-2xl dark:shadow-[0_0_50px_rgba(124,58,237,0.15)] overflow-hidden transition-all duration-500 hover:-translate-y-2 group reveal-on-scroll"
            style={{ transitionDelay: '100ms' }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="relative z-10">
              <Icon
                name="dashboard"
                className="w-12 h-12 text-primary mb-6 drop-shadow-[0_0_10px_rgba(124,58,237,0.5)]"
                aria-hidden="true"
              />
              <h3 className="font-bold text-2xl mb-4 text-on-surface dark:text-white group-hover:text-primary transition-colors">
                Proprietary Agency Dashboard
              </h3>
              <p className="font-body-lg text-on-surface-variant dark:text-[#94A3B8] max-w-md leading-relaxed">
                A unified command center to manage your talent pool, monitor live streams, and track host earnings in real-time.
              </p>
            </div>
            <div className="mt-10 bg-surface-container-highest dark:bg-black/50 rounded-3xl overflow-hidden h-48 border border-outline-variant/30 dark:border-white/5 relative z-10">
              <Image
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop"
                alt="Close-up of a modern agency dashboard interface"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700 opacity-80"
                sizes="(max-width: 768px) 100vw, 66vw"
              />
            </div>
          </div>

          {/* Real-time Analytics */}
          <div
            className="md:col-span-4 relative z-10 glass-card p-10 flex flex-col rounded-[40px] bg-white/70 dark:bg-[#1F0233]/80 backdrop-blur-3xl border border-white dark:border-white/10 shadow-2xl dark:shadow-[0_0_50px_rgba(218,38,118,0.15)] overflow-hidden transition-all duration-500 hover:-translate-y-2 group reveal-on-scroll"
            style={{ transitionDelay: '200ms' }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="relative z-10 h-full flex flex-col">
              <Icon
                name="analytics"
                className="w-12 h-12 text-secondary mb-6 drop-shadow-[0_0_10px_rgba(218,38,118,0.5)]"
                aria-hidden="true"
              />
              <h3 className="font-bold text-2xl mb-4 text-on-surface dark:text-white group-hover:text-secondary transition-colors">
                Real-time Analytics
              </h3>
              <p className="font-body-lg text-on-surface-variant dark:text-[#94A3B8] leading-relaxed">
                Live reporting on audience engagement, peak viewership times, and global campaign performance.
              </p>
              <div className="mt-auto pt-10">
                <div className="space-y-4">
                  <div className="h-2 w-full bg-surface-container dark:bg-white/5 rounded-full overflow-hidden">
                    <div className="h-full bg-primary w-[85%] rounded-full shadow-[0_0_10px_rgba(124,58,237,0.8)]"></div>
                  </div>
                  <div className="h-2 w-full bg-surface-container dark:bg-white/5 rounded-full overflow-hidden">
                    <div className="h-full bg-secondary w-[62%] rounded-full shadow-[0_0_10px_rgba(218,38,118,0.8)]"></div>
                  </div>
                  <div className="h-2 w-full bg-surface-container dark:bg-white/5 rounded-full overflow-hidden">
                    <div className="h-full bg-tertiary w-[94%] rounded-full shadow-[0_0_10px_rgba(20,184,166,0.8)]"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Automated Payouts */}
          <div
            className="md:col-span-5 relative z-10 glass-card p-10 flex flex-col rounded-[40px] bg-white/70 dark:bg-[#1F0233]/80 backdrop-blur-3xl border border-white dark:border-white/10 shadow-2xl dark:shadow-[0_0_50px_rgba(20,184,166,0.15)] overflow-hidden transition-all duration-500 hover:-translate-y-2 group reveal-on-scroll"
            style={{ transitionDelay: '300ms' }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-tertiary/5 to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="relative z-10">
              <Icon
                name="account_balance_wallet"
                className="w-12 h-12 text-tertiary mb-6 drop-shadow-[0_0_10px_rgba(20,184,166,0.5)]"
                aria-hidden="true"
              />
              <h3 className="font-bold text-2xl mb-4 text-on-surface dark:text-white group-hover:text-tertiary transition-colors">
                Automated Payouts
              </h3>
              <p className="font-body-lg text-on-surface-variant dark:text-[#94A3B8] leading-relaxed">
                Prompt commission processing and automated staff payments. We handle the financial complexity so you can focus on scale.
              </p>
            </div>
          </div>

          {/* 24/7 Agency Support */}
          <div
            className="md:col-span-7 relative z-10 p-10 flex flex-col justify-center rounded-[40px] bg-gradient-to-br from-primary to-secondary text-white shadow-2xl overflow-hidden transition-all duration-500 hover:-translate-y-2 group reveal-on-scroll border border-white/20"
            style={{ transitionDelay: '400ms' }}
          >
            <div className="absolute -top-20 -right-20 w-80 h-80 bg-white/20 rounded-full blur-3xl pointer-events-none group-hover:bg-white/30 transition-colors duration-700"></div>
            <div className="relative z-10">
              <Icon
                name="support_agent"
                className="w-12 h-12 text-white mb-6 drop-shadow-md"
                aria-hidden="true"
              />
              <h3 className="font-display-lg text-4xl mb-4">24/7 Priority Support</h3>
              <p className="font-body-lg opacity-90 max-w-md leading-relaxed">
                A dedicated partner manager available around the clock to assist with crisis management, strategic planning, and scaling challenges.
              </p>
            </div>
            {/* Background Pattern */}
            <div className="absolute right-0 top-0 w-1/2 h-full opacity-10 group-hover:scale-110 transition-transform duration-700 pointer-events-none mix-blend-overlay">
              <Image
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1000&auto=format&fit=crop"
                alt="Abstract geometric network pattern"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
