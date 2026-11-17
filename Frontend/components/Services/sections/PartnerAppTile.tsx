import Link from 'next/link';
import { Video, MessagesSquare, Star, Sparkles } from 'lucide-react';

type AccentColor = 'primary' | 'secondary' | 'tertiary' | 'outline';

interface PartnerAppTileProps {
  icon?: string;
  title?: string;
  badge?: string;
  name?: string;
  description?: string;
  accentColor?: AccentColor;
}

const colorMap = {
  primary: 'text-primary',
  secondary: 'text-secondary',
  tertiary: 'text-[#2563EB]',
  outline: 'text-gray-800 dark:text-gray-200',
};

function resolveTileLink(titleOrName: string): string {
  const lower = titleOrName.toLowerCase();
  if (lower.includes('chamet') || lower.includes('chill')) return '/chill-chat-agency';
  if (lower.includes('poppo') || lower.includes('vone')) return '/vone-app-agency';
  if (lower.includes('niki')) return '/niki-live-agency';
  return '/become-a-host';
}

function renderAppIcon(titleOrName: string, iconColor: string) {
  const lower = titleOrName.toLowerCase();
  if (lower.includes('chamet') || lower.includes('chill')) {
    return <Video className={`w-8 h-8 ${iconColor}`} />;
  }
  if (lower.includes('poppo') || lower.includes('vone')) {
    return <MessagesSquare className={`w-8 h-8 ${iconColor}`} />;
  }
  if (lower.includes('niki')) {
    return <Star className={`w-8 h-8 ${iconColor}`} />;
  }
  return <Sparkles className={`w-8 h-8 ${iconColor}`} />;
}

export function PartnerAppTile({ icon, title, badge, name, description, accentColor = 'primary' }: PartnerAppTileProps) {
  const iconColor = colorMap[accentColor] || colorMap.primary;

  const displayBadge = badge || name;
  const displayTitle = (title || description)?.trim() || 'Partner App';
  const targetHref = resolveTileLink(displayTitle);

  return (
    <Link
      href={targetHref}
      className="bg-surface-container-lowest dark:bg-white/5 dark:hover:bg-white/10 rounded-2xl p-8 flex flex-col items-center justify-center gap-4 hover:-translate-y-2 hover:shadow-xl transition-all duration-300 border border-outline-variant/20 dark:border-white/10 group cursor-pointer"
    >
      <div className={`w-16 h-16 rounded-2xl bg-primary/10 dark:bg-primary/20 flex items-center justify-center group-hover:scale-110 transition-transform`}>
        {renderAppIcon(displayTitle, iconColor)}
      </div>
      {displayBadge && (
        <span className="text-xs font-bold text-gray-500 dark:text-[#94A3B8] uppercase tracking-widest">
          {displayBadge}
        </span>
      )}
      <h4 className="font-bold text-lg text-on-surface dark:text-white group-hover:text-primary transition-colors text-center">
        {displayTitle}
      </h4>
      <span className="text-xs font-semibold text-primary opacity-0 group-hover:opacity-100 transition-opacity">
        View Agency Details →
      </span>
    </Link>
  );
}
