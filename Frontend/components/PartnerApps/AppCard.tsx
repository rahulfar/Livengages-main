import Link from 'next/link';
import { Star } from 'lucide-react';
import type { PartnerAppProps } from './PartnerApps.types';

function resolveAppUrl(slug?: string): string {
  if (!slug) return '/services';
  if (slug.startsWith('/')) return slug;
  if (slug === 'chill-chat-agency' || slug === 'partner-app-1' || slug === 'chamet') return '/chill-chat-agency';
  if (slug === 'niki-live-agency' || slug === 'partner-app-2' || slug === 'niki') return '/niki-live-agency';
  if (slug === 'vone-app-agency' || slug === 'partner-app' || slug === 'vone') return '/vone-app-agency';
  if (slug === 'poppo-live-agency' || slug === 'poppo') return '/poppo-live-agency';
  if (slug.endsWith('-agency')) return `/${slug}`;
  return `/${slug}-agency`;
}

export function AppCard({
  title,
  description,
  applyLabel,
  bgImage,
  videoUrl,
  slug,
}: PartnerAppProps) {
  const targetUrl = resolveAppUrl(slug);

  return (
    <div className="app-wheel-card relative flex-1 min-w-[200px] min-h-[280px] lg:h-full rounded-[2.5rem] bg-surface-container overflow-hidden p-8 group">
      {/* Background Image (Default) */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-opacity duration-500 group-hover:opacity-0"
        style={{ backgroundImage: `url('${bgImage}')` }}
        aria-hidden="true"
      >
        {/* Dark overlay so text remains readable */}
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Hover Video */}
      {videoUrl && (
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-90"
            src={videoUrl}
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
      )}

      {/* Card content */}
      <div className="relative z-10 h-full flex flex-col justify-between text-white">
        <div>
          {/* Icon */}
          <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center mb-8 shadow-sm border border-white/30">
            <Star className="w-8 h-8 text-white fill-white/20" />
          </div>

          {/* Title */}
          <h4 className="text-2xl font-black uppercase tracking-tighter mb-4 text-white drop-shadow-lg">
            {title}
          </h4>

          {/* Description — revealed on hover */}
          <p className="opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0 max-w-xs text-sm leading-relaxed text-white/90 drop-shadow-md">
            {description}
          </p>
        </div>

        {/* Apply CTA — revealed on hover */}
        <Link
          href={targetUrl}
          className="cursor-pointer text-center w-full py-4 rounded-full bg-white text-primary font-bold opacity-0 group-hover:opacity-100 transition-all translate-y-4 group-hover:translate-y-0 shadow-lg"
        >
          {applyLabel || 'Explore Agency'}
        </Link>
      </div>
    </div>
  );
}
