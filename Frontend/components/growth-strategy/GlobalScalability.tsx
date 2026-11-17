export function GlobalScalability() {
  return (
    <section className="py-section relative z-10 transition-colors pt-[80px] pb-[80px]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-section reveal-on-scroll">
          <h2 className="font-headline-xl text-headline-xl text-primary dark:text-white font-bold transition-colors">
            Global Scalability
          </h2>
          <p className="text-on-surface-variant dark:text-white/70 mt-stack-sm max-w-2xl mx-auto transition-colors pb-[40px]">
            Expanding influence across 42 countries with localized precision and centralized control.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 grid-rows-2 gap-gutter h-auto md:h-[600px]">
          {/* Map Section */}
          <div
            className="md:col-span-2 md:row-span-1 bg-surface-container/50 dark:bg-surface-container/10 border border-outline-variant/30 dark:border-white/10 backdrop-blur-md rounded-[18px] p-stack-lg flex flex-col justify-end relative overflow-hidden group transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_35px_-10px_rgba(0,0,0,0.1)] dark:hover:shadow-[0_20px_35px_-10px_rgba(0,0,0,0.5)] reveal-on-scroll"
            style={{ transitionDelay: '100ms' }}
          >
            <div
              className="absolute inset-0 z-0 opacity-20 grayscale group-hover:grayscale-0 transition-all duration-700 bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDD5D62jmqsow7r-lNWzZ0PGbA3LTwsa3P50QWO3B1hQk2WMhw9uyy-b883UIJ_wlrsEtPObLpdPNTc4M_MkzVDhPn_Hd-EMAdJOk0XoyBAwGEZo32EGA-WkJziCIbZ9rVZ8yl3Tb_owDOlQRrR5NnjiRjzcgVJECth8Ku5onRuHAGEnCGxoI6tJyeomFOgSw899cDmdVMuLrOOTtUcw0u21oFbJ-0n3RoK8RT6-KUT_NWh5ct0NC_Ix1cfSYyxfCVnJVHPMoXCLA')",
              }}
            />
            <div className="relative z-10 bg-surface-container/80 dark:bg-black/40 p-6 rounded-xl backdrop-blur-md border border-outline-variant/30 dark:border-white/10 w-max transition-colors">
              <h3 className="font-headline-lg text-headline-lg text-primary dark:text-white font-bold transition-colors">
                Global Creator Monetization
              </h3>
              <p className="text-on-surface-variant dark:text-white/80 max-w-md font-medium mt-2 transition-colors">
                High-converting live video broadcasts, viewer gifting, and PK battles connecting hosts across India, Asia, and worldwide.
              </p>
            </div>
          </div>

          {/* NOC Section */}
          <div
            className="md:col-span-1 md:row-span-2 bg-gradient-to-br from-primary to-tertiary rounded-[18px] p-stack-lg flex flex-col justify-between text-on-primary transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_35px_-10px_rgba(15,23,42,0.12)] reveal-on-scroll"
            style={{ transitionDelay: '200ms' }}
          >
            <div>
              <span
                className="material-symbols-outlined text-4xl mb-stack-md"
                style={{ fontVariationSettings: "'FILL' 1" }}
                aria-hidden="true"
              >
                support_agent
              </span>
              <h3 className="font-headline-lg text-headline-lg">24/7 Creator & Agent Support</h3>
              <p className="opacity-80 mt-stack-sm">
                Our dedicated talent operations team provides real-time guidance, stream audits, and dispute resolution for creators and agency partners 365 days a year.
              </p>
            </div>
            <div className="space-y-stack-md mt-8">
              <div className="flex justify-between border-b border-white/20 pb-2">
                <span>Active Hosts</span>
                <span className="font-bold">10,000+</span>
              </div>
              <div className="flex justify-between border-b border-white/20 pb-2">
                <span>Partner Platforms</span>
                <span className="font-bold">5+ Apps</span>
              </div>
              <div className="flex justify-between border-b border-white/20 pb-2">
                <span>Weekly Settlements</span>
                <span className="font-bold">100% on time</span>
              </div>
            </div>
          </div>

          {/* Onboarding Section */}
          <div
            className="md:col-span-1 md:row-span-1 bg-surface-container/50 dark:bg-surface-container/10 border border-outline-variant/30 dark:border-white/10 backdrop-blur-md rounded-[18px] p-stack-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_35px_-10px_rgba(0,0,0,0.1)] dark:hover:shadow-[0_20px_35px_-10px_rgba(0,0,0,0.5)] reveal-on-scroll"
            style={{ transitionDelay: '300ms' }}
          >
            <div className="w-12 h-12 rounded-full bg-secondary-container flex items-center justify-center mb-stack-md">
              <span className="material-symbols-outlined text-on-secondary-container" aria-hidden="true">
                group_add
              </span>
            </div>
            <h3 className="font-headline-lg text-body-lg font-bold mb-2 text-on-surface dark:text-white transition-colors">
              Talent Onboarding
            </h3>
            <p className="text-on-surface-variant dark:text-white/70 transition-colors">
              Automated vetting and digital identity verification for creators globally.
            </p>
          </div>

          {/* Compliance Section */}
          <div
            className="md:col-span-1 md:row-span-1 bg-surface-container/50 dark:bg-surface-container/10 border border-outline-variant/30 dark:border-white/10 backdrop-blur-md rounded-[18px] p-stack-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_35px_-10px_rgba(0,0,0,0.1)] dark:hover:shadow-[0_20px_35px_-10px_rgba(0,0,0,0.5)] reveal-on-scroll"
            style={{ transitionDelay: '400ms' }}
          >
            <div className="w-12 h-12 rounded-full bg-tertiary-container flex items-center justify-center mb-stack-md">
              <span className="material-symbols-outlined text-on-tertiary-container" aria-hidden="true">
                security
              </span>
            </div>
            <h3 className="font-headline-lg text-body-lg font-bold mb-2 text-on-surface dark:text-white transition-colors">
              Local Compliance
            </h3>
            <p className="text-on-surface-variant dark:text-white/70 transition-colors">
              Ironclad legal frameworks for every jurisdiction your brand touches.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
