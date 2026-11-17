'use client';

import { getMediaUrl } from '@/lib/api';
import { trackInviteLinkClick } from '@/lib/analytics';
import { ArrowRight } from 'lucide-react';

interface HeroData {
  badge?: string;
  heading?: string;
  description?: string;
  primaryCtaLabel?: string;
  primaryCtaHref?: string;
  secondaryCtaLabel?: string;
  secondaryCtaHref?: string;
  image?: any;
}

interface HeroSectionProps {
  data?: HeroData;
}

export function HeroSection({ data }: HeroSectionProps) {
  if (!data) return null;

  const {
    badge = 'Live Streaming Careers',
    heading = 'Become a Live Streaming Host and Start Earning',
    description,
    primaryCtaLabel = 'Apply as a Host Now',
    primaryCtaHref = '#apply-now',
    secondaryCtaLabel,
    secondaryCtaHref = 'https://invite-vone.com/fnP7Zr',
    image,
  } = data;

  // Clean description of unproven guarantee text
  const cleanDescription = (description || '')
    .replace(/and real growth guaranteed\./gi, 'with professional mentorship and weekly payouts.')
    .replace(/real growth guaranteed/gi, 'dedicated talent mentorship')
    || 'Join Livengage to broadcast on top global live streaming platforms including Vone App (Poppo Live), Chill Chat (Chamet), and Niki Live with full agency support, 1-on-1 coaching, and weekly India payouts via UPI and bank transfer.';

  const displayHeading = 'Become a Live Streaming Host and Start Earning';
  const displaySecondaryLabel = 'Join Vone with our invite link';

  // Strapi 5: image is a media object with .url directly
  const imageUrl = getMediaUrl(image?.url || image?.data?.attributes?.url) || null;
  const imageAlt = image?.alternativeText || image?.data?.attributes?.alternativeText || 'Professional live streamer broadcasting with phone and ring light';

  return (
    <section className="relative pt-[160px] pb-[80px] min-h-[716px] flex items-center overflow-hidden mesh-gradient">
      {/* Background Orbs */}
      <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-secondary-container/30 rounded-full blur-[120px] kinetic-shape pointer-events-none"></div>
      <div 
        className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-primary-container/30 rounded-full blur-[100px] kinetic-shape pointer-events-none" 
        style={{ animationDelay: '-5s' }}
      ></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-section grid md:grid-cols-2 gap-gutter items-center">
        {/* Content Side */}
        <div className="text-on-surface dark:text-white reveal-on-scroll order-2 md:order-1 mt-8 md:mt-0">
          {badge && (
            <span className="inline-block px-4 py-1.5 rounded-full bg-secondary-container/20 border border-secondary-container/30 text-secondary text-xs md:text-sm font-bold mb-6 uppercase tracking-wider">
              {badge}
            </span>
          )}
          
          <h1 className="font-display-lg text-4xl sm:text-5xl md:text-6xl lg:text-[72px] font-black text-on-surface dark:text-white mb-6 tracking-tight leading-[1.1] drop-shadow-sm">
            Become a <span className="text-gradient italic pr-2">Live Streaming Host</span> and Start Earning
          </h1>
          
          <p className="text-on-surface-variant dark:text-[#94A3B8] text-base md:text-lg max-w-xl mb-8 leading-relaxed">
            {cleanDescription}
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              className="btn-gradient px-8 py-4 rounded-full text-white font-bold text-base md:text-lg flex items-center gap-2 hover:scale-105 transition-all shadow-lg"
              href={primaryCtaHref}
            >
              {primaryCtaLabel}
              <ArrowRight className="w-5 h-5" />
            </a>
            
            <a
              className="px-8 py-4 rounded-full border-2 border-outline-variant/40 dark:border-white/20 text-on-surface dark:text-white font-bold text-base md:text-lg hover:bg-surface-container dark:hover:border-primary transition-colors flex items-center gap-2"
              href={secondaryCtaHref}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackInviteLinkClick('vone', secondaryCtaHref)}
            >
              {displaySecondaryLabel}
              <ArrowRight className="w-4 h-4 opacity-70" />
            </a>
          </div>
        </div>

        {/* Image Side */}
        <div className="relative order-1 md:order-2 h-[350px] md:h-[500px] w-full reveal-on-scroll" style={{ transitionDelay: '200ms' }}>
          <div className="absolute -inset-4 bg-gradient-to-tr from-primary to-tertiary rounded-[2rem] opacity-20 blur-2xl pointer-events-none"></div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            alt={imageAlt}
            fetchPriority="high"
            className="w-full h-full object-cover rounded-[2rem] shadow-2xl relative z-10"
            src={imageUrl || "https://images.unsplash.com/photo-1616469829581-73993eb86b02?q=80&w=2000&auto=format&fit=crop"}
          />
        </div>
      </div>
    </section>
  );
}
