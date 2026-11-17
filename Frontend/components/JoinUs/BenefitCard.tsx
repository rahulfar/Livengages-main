import { Icon } from '@/components/ui/Icon';

type BenefitSpan = 'single' | 'wide';

interface BenefitCardProps {
  icon?: string;
  title?: string;
  description?: string;
  span?: BenefitSpan;
}

export function BenefitCard({ icon, title, description, span = 'single' }: BenefitCardProps) {
  const isWide = span === 'wide';

  return (
    <div
      className={`bg-surface dark:bg-[#2A0545] p-6 rounded-xl border border-outline-variant/30 dark:border-white/10 hover:border-primary/30 dark:hover:border-primary/50 transition-colors reveal-on-scroll ${
        isWide ? 'md:col-span-2' : ''
      }`}
    >
      {isWide ? (
        /* Wide variant: horizontal icon + text layout */
        <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
          {icon && (
            <Icon name={icon} className="w-12 h-12 text-primary mb-4 md:mb-0 shrink-0" aria-hidden="true" />
          )}
          <div>
            {title && <h3 className="text-2xl font-semibold text-on-surface dark:text-white mb-2">{title}</h3>}
            {description && (
              <p className="text-sm text-on-surface-variant dark:text-[#94A3B8] leading-relaxed">
                {description}
              </p>
            )}
          </div>
        </div>
      ) : (
        /* Single variant: stacked icon + text layout */
        <>
          {icon && (
            <Icon name={icon} className="w-9 h-9 text-primary mb-4 block" aria-hidden="true" />
          )}
          {title && <h3 className="text-2xl font-semibold text-on-surface dark:text-white mb-2">{title}</h3>}
          {description && (
            <p className="text-sm text-on-surface-variant dark:text-[#94A3B8] leading-relaxed">
              {description}
            </p>
          )}
        </>
      )}
    </div>
  );
}
