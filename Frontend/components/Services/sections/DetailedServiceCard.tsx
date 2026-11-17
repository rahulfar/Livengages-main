import Link from 'next/link';
import { CheckCircle2, ArrowRight } from 'lucide-react';

interface FeatureItem {
  id?: number;
  text?: string;
  name?: string;
}

interface DetailedServiceCardProps {
  icon?: string;
  title?: string;
  description?: string;
  features?: (string | FeatureItem)[];
  linkText?: string;
  href?: string;
  accentColor?: 'primary' | 'secondary' | 'tertiary';
}

const accentMap = {
  primary: {
    iconBg: 'bg-primary-container text-on-primary-container',
    shadow: 'hover:shadow-primary-container/20',
    linkText: 'text-primary',
    checkText: 'text-primary',
  },
  secondary: {
    iconBg: 'bg-secondary-container text-on-secondary-container',
    shadow: 'hover:shadow-secondary-container/20',
    linkText: 'text-secondary',
    checkText: 'text-secondary',
  },
  tertiary: {
    iconBg: 'bg-tertiary-container text-on-tertiary-container',
    shadow: 'hover:shadow-tertiary-container/20',
    linkText: 'text-tertiary',
    checkText: 'text-tertiary',
  },
};

export function DetailedServiceCard({
  icon,
  title,
  description,
  features,
  linkText,
  href,
  accentColor = 'primary',
  ...rest
}: DetailedServiceCardProps) {
  const normalizedFeatures = features || (rest as any).Features;
  const accent = accentMap[accentColor] || accentMap.primary;

  // Sanitize links according to Task 9: no links to /join-us, /contact-us
  let targetHref = href || '/become-a-host';
  if (targetHref === '/join-us' || targetHref === '/contact-us' || targetHref.includes('google.com')) {
    targetHref = '/become-a-host';
  }
  if (targetHref === '/agent-onboarding') {
    targetHref = '/become-an-agent';
  }

  return (
    <div
      className={`bg-surface dark:bg-[#1F0233]/60 dark:backdrop-blur-[16px] rounded-2xl p-8 shadow-xl ${accent.shadow} hover:-translate-y-2 transition-transform duration-300 border border-outline-variant/20 dark:border-[#7C3AED]/15 flex flex-col h-full reveal-on-scroll`}
    >
      {/* Title */}
      {title && (
        <h3 className="text-2xl font-bold text-on-surface dark:text-white mb-4">
          {title}
        </h3>
      )}

      {/* Description */}
      {description && (
        <p className="text-on-surface-variant dark:text-[#94A3B8] leading-relaxed mb-6">
          {description}
        </p>
      )}

      {/* Features list */}
      {normalizedFeatures && normalizedFeatures.length > 0 && (
        <ul className="space-y-3 mb-8 flex-1">
          {normalizedFeatures.map((item: any, index: number) => {
            const featureText = typeof item === 'string' ? item : item?.text || item?.name || '';
            return (
              <li key={index} className="flex items-center gap-2 text-sm text-on-surface-variant dark:text-[#E2E8F0]">
                <CheckCircle2 className={`w-4 h-4 ${accent.checkText} shrink-0`} />
                {featureText}
              </li>
            );
          })}
        </ul>
      )}

      {/* CTA */}
      {linkText && (
        <Link
          href={targetHref}
          className={`inline-flex items-center gap-2 ${accent.linkText} font-semibold hover:gap-3 transition-all mt-auto`}
          aria-label={`${linkText} — ${title}`}
        >
          {linkText}
          <ArrowRight className="w-4 h-4" />
        </Link>
      )}
    </div>
  );
}
