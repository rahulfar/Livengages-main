import React from 'react';
import { SITE_STATS } from '@/constants/site-stats';

interface StatItem {
  value: string;
  label: string;
}

interface Props {
  data?: {
    stats?: StatItem[];
  };
}

export function Stats({ data }: Props) {
  // Filter out any broken stat like empty "$" or "Millions Earned Monthly"
  const rawStats = data?.stats || [];
  const filtered = rawStats.filter(
    (s) =>
      s.value &&
      s.value.trim() !== '$' &&
      !s.label?.toLowerCase().includes('millions')
  );

  // Standard audited verified stats
  const defaultStats: StatItem[] = [
    { value: SITE_STATS.creators, label: 'Active Creators' },
    { value: SITE_STATS.countries, label: 'Countries' },
    { value: SITE_STATS.partnerPlatforms, label: 'Partner Platforms' },
    { value: '100% Free', label: 'To Join' },
  ];

  const stats = filtered.length >= 3 ? filtered : defaultStats;

  return (
    <section className="py-12 bg-surface-container border-y border-outline-variant/50 dark:bg-surface-container/30 dark:border-outline-variant/30 dark:backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-wrap justify-between gap-12">
        {stats.map((stat, idx) => (
          <React.Fragment key={idx}>
            <div className="flex-1 min-w-[200px] text-center">
              <h3 className="text-5xl font-bold font-display-md text-primary dark:text-white mb-1 dark:drop-shadow-[0_0_10px_rgba(124,58,237,0.5)]">
                {stat.value}
              </h3>
              <p className="text-xs font-label-md uppercase tracking-widest text-on-surface-variant">
                {stat.label}
              </p>
            </div>
            {idx < stats.length - 1 && (
              <div className="w-px bg-outline-variant hidden md:block opacity-50"></div>
            )}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
