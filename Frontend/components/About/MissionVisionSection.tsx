interface MissionVisionProps {
  data?: {
    missionHeading?: string;
    missionDescription?: string;
    visionHeading?: string;
    visionDescription?: string;
  };
}

export function MissionVisionSection({ data }: MissionVisionProps) {
  if (!data) return null;

  const { missionHeading, missionDescription, visionHeading, visionDescription } = data;
  if (!missionHeading && !missionDescription && !visionHeading && !visionDescription) return null;

  return (
    <section id="story" className="py-[100px] bg-surface-container-low dark:bg-transparent mesh-gradient dark:bg-none relative overflow-hidden transform-gpu">
      {/* Dynamic Glowing Ambient Orbs */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-[30%] -right-[10%] w-[600px] h-[600px] bg-primary/20 dark:bg-primary/10 rounded-full blur-[120px] kinetic-shape mix-blend-multiply dark:mix-blend-normal"></div>
        <div className="absolute -bottom-[30%] -left-[10%] w-[600px] h-[600px] bg-[#E11D48]/10 dark:bg-secondary-container/10 rounded-full blur-[120px] kinetic-shape mix-blend-multiply dark:mix-blend-normal" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
        {/* Mission */}
        {(missionHeading || missionDescription) && (
          <div className="relative bg-white dark:glass-card rounded-3xl p-10 md:p-12 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(124,58,237,0.2)] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-outline-variant/30 dark:border-white/10 group overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-primary/10 to-transparent rounded-bl-full opacity-50 group-hover:opacity-100 transition-opacity duration-500"></div>

            <div className="relative z-10">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 dark:bg-white/5 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500 shadow-inner border border-primary/10 dark:border-white/10">
                <span
                  className="material-symbols-outlined text-primary text-[40px]"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                  aria-hidden="true"
                >
                  rocket_launch
                </span>
              </div>
              {missionHeading && (
                <h2 className="font-display-md text-3xl font-black text-on-surface dark:text-white mb-4 tracking-tight group-hover:text-primary transition-colors duration-300">
                  {missionHeading}
                </h2>
              )}
              {missionDescription && (
                <p className="font-body-lg text-lg text-on-surface-variant dark:text-white/80 leading-relaxed">
                  {missionDescription}
                </p>
              )}
            </div>
          </div>
        )}

        {/* Vision */}
        {(visionHeading || visionDescription) && (
          <div className="relative bg-white dark:glass-card rounded-3xl p-10 md:p-12 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(218,38,118,0.2)] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-outline-variant/30 dark:border-white/10 group overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-secondary-container/10 to-transparent rounded-bl-full opacity-50 group-hover:opacity-100 transition-opacity duration-500"></div>

            <div className="relative z-10">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-secondary-container/10 to-secondary-container/5 dark:bg-white/5 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-500 shadow-inner border border-secondary-container/10 dark:border-white/10">
                <span
                  className="material-symbols-outlined text-secondary-container text-[40px]"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                  aria-hidden="true"
                >
                  visibility
                </span>
              </div>
              {visionHeading && (
                <h2 className="font-display-md text-3xl font-black text-on-surface dark:text-white mb-4 tracking-tight group-hover:text-secondary-container transition-colors duration-300">
                  {visionHeading}
                </h2>
              )}
              {visionDescription && (
                <p className="font-body-lg text-lg text-on-surface-variant dark:text-white/80 leading-relaxed">
                  {visionDescription}
                </p>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
