interface ServicesHeroProps {
  data?: {
    badge?: string;
    heading?: string;
    description?: string;
  }
}

export function ServicesHero({ data }: ServicesHeroProps) {
  if (!data) return null;

  const { badge, heading, description } = data;

  const lines = heading ? heading.split('\n') : [];

  return (
    <section className="relative pt-32 pb-40 overflow-hidden bg-surface-container-low dark:bg-transparent mesh-gradient dark:bg-none transform-gpu">
      {/* Animated Floating Orbs */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-[0.03] dark:opacity-[0.1] mix-blend-overlay pointer-events-none"></div>
      <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-primary-container/30 dark:bg-primary/20 rounded-full blur-[120px] dark:blur-[150px] kinetic-shape pointer-events-none"></div>
      <div className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] bg-secondary-container/30 dark:bg-secondary-container/20 rounded-full blur-[100px] dark:blur-[150px] kinetic-shape pointer-events-none" style={{ animationDelay: '-5s' }}></div>

      <div className="max-w-5xl mx-auto px-6 md:px-12 text-center relative z-10">
        {badge && (
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-surface-container-highest dark:bg-white/5 border border-outline-variant/20 dark:border-white/10 shadow-sm mb-8">
            <span className="font-label-sm md:text-[12px] font-bold uppercase tracking-widest text-primary dark:text-on-surface-variant">
              {badge}
            </span>
          </div>
        )}

        <h1 className="font-display-lg text-4xl sm:text-5xl md:text-6xl lg:text-[76px] font-black text-on-surface dark:text-white mb-8 tracking-tight leading-tight drop-shadow-sm">
          Live Streaming Agency Services{' '}
          <span className="text-gradient italic pr-2 block sm:inline">
            for Hosts and Agents
          </span>
        </h1>

        {description && (
          <p className="font-body-lg text-xl md:text-2xl text-on-surface-variant max-w-3xl mx-auto leading-relaxed">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
