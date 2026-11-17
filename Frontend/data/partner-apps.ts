export interface FallbackPartnerApp {
  slug: string;
  name: string;
  appName: string;
  metaTitle: string;
  metaDescription: string;
  operatingSystem: string;
  ratingValue: string;
  reviewCount: string;
  hero: {
    badgeText: string;
    titlePart1: string;
    titleHighlight: string;
    description: string;
    primaryCtaLabel: string;
    primaryCtaUrl: string;
    secondaryCtaLabel: string;
    secondaryCtaUrl: string;
    statsValue: string;
    statsLabel: string;
    heroImage?: {
      url: string;
      alternativeText: string;
    };
  };
  benefits?: {
    heading: string;
    description: string;
    benefits: Array<{
      title: string;
      description: string;
      icon?: string;
    }>;
  };
  faqs?: {
    heading: string;
    faqs: Array<{
      question: string;
      answer: string;
    }>;
  };
}

export const FALLBACK_PARTNER_APPS: Record<string, FallbackPartnerApp> = {
  'vone-app-agency': {
    slug: 'vone-app-agency',
    name: 'Vone App (Poppo Live)',
    appName: 'Vone App',
    metaTitle: 'Vone App (Poppo Live) Agency India – Livengage',
    metaDescription:
      'Join the Vone app (Poppo Live) as a host or agent in India. How Vone works, how hosts earn, payouts via UPI and bank, and free registration with Livengage.',
    operatingSystem: 'Android, iOS',
    ratingValue: '4.9',
    reviewCount: '3420',
    hero: {
      badgeText: 'Verified Agency Program',
      titlePart1: 'Earn on the Vone App (Poppo Live) as a Host or Agent',
      titleHighlight: '',
      description:
        'Connect with global callers, convert gifts to cash, and scale your sub-agency with guaranteed high traffic and instant weekly settlements.',
      primaryCtaLabel: 'Apply as a Host',
      primaryCtaUrl: '/become-a-host',
      secondaryCtaLabel: 'Register Sub-Agency',
      secondaryCtaUrl: '/become-an-agent',
      statsValue: 'Weekly',
      statsLabel: 'Direct Bank & UPI Settlements',
      heroImage: {
        url: 'https://images.unsplash.com/photo-1516251193007-45ef944ab0c6?q=80&w=1200&auto=format&fit=crop',
        alternativeText: 'Vone App live streaming interface and host broadcast',
      },
    },
    benefits: {
      heading: 'Why Stream on Vone App with Livengage?',
      description:
        'Vone App delivers explosive engagement for 1-on-1 video match callers and party room entertainers with unmatched agency backing.',
      benefits: [
        {
          title: 'High Call Velocity',
          description: 'Instant global call queueing keeps your screen active and multiplies your earning potential.',
          icon: 'call',
        },
        {
          title: 'Direct Agency VIP Status',
          description: 'Livengage provides verified host shields, priority server ranking, and dispute mediation.',
          icon: 'verified',
        },
        {
          title: 'Instant Weekly Withdrawals',
          description: 'Weekly automated transfers directly to your bank account, UPI, or Payoneer.',
          icon: 'payments',
        },
      ],
    },
    faqs: {
      heading: 'Vone App FAQs',
      faqs: [
        {
          question: 'What is Vone App?',
          answer:
            'Vone App is a premier video calling and live streaming application partnered with Poppo Live, offering high-paying 1-on-1 interactions and party broadcasting.',
        },
        {
          question: 'How do I join Vone App as an agency creator?',
          answer:
            'Apply through Livengage by submitting your basic details on our Become a Host page. We assign your agency ID and complete verification within 24 hours.',
        },
      ],
    },
  },
  'chill-chat-agency': {
    slug: 'chill-chat-agency',
    name: 'Chill Chat (Chamet)',
    appName: 'Chill Chat',
    metaTitle: 'Chill Chat (Chamet) Agency India: Host Registration',
    metaDescription:
      'Chamet is now Chill Chat in India. Join Chill Chat as a host or agent with Livengage: how it works, how hosts earn, and free registration with full support.',
    operatingSystem: 'Android, iOS',
    ratingValue: '4.8',
    reviewCount: '5890',
    hero: {
      badgeText: 'Top Tier Global Platform',
      titlePart1: 'Join Chill Chat (Chamet) as a Host or Agent in India',
      titleHighlight: '',
      description:
        "Join the world's leading video chat platform. Unlock top-tier gifting rates, round-the-clock call requests, and full sub-agency management support.",
      primaryCtaLabel: 'Apply as a Host',
      primaryCtaUrl: '/become-a-host',
      secondaryCtaLabel: 'Become an Agent',
      secondaryCtaUrl: '/become-an-agent',
      statsValue: '$40M+',
      statsLabel: 'Paid to Creators Globally',
      heroImage: {
        url: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1200&auto=format&fit=crop',
        alternativeText: 'Chill Chat Chamet live streaming host video interface',
      },
    },
    benefits: {
      heading: 'The Global Power of Chill Chat (Chamet)',
      description:
        'With hundreds of millions of users globally, Chamet is the premier visual video chat network for high-earning talent.',
      benefits: [
        {
          title: 'Massive International Gifting',
          description: 'High-spender audiences across North America, Europe, and the Middle East.',
          icon: 'loyalty',
        },
        {
          title: 'Top Agency Commission Rates',
          description: 'Sub-agencies receive the highest override tier with zero platform deductions.',
          icon: 'trending_up',
        },
      ],
    },
    faqs: {
      heading: 'Chill Chat (Chamet) FAQs',
      faqs: [
        {
          question: 'Is Chill Chat the same as Chamet?',
          answer:
            'Yes. Chill Chat is the official, rebranded global application running on the Chamet video architecture.',
        },
        {
          question: 'How do host payouts work on Chill Chat in India?',
          answer:
            'Payouts are processed weekly via direct bank transfer (IMPS/NEFT) and UPI at competitive currency conversion rates.',
        },
      ],
    },
  },
  'niki-live-agency': {
    slug: 'niki-live-agency',
    name: 'Niki Live',
    appName: 'Niki Live',
    metaTitle: 'Niki Live Agency – Host Registration & Earnings',
    metaDescription:
      'Become a Niki Live host or agent with Livengage. How Niki Live works, how hosts earn from gifts and calls, and how to register for free.',
    operatingSystem: 'Android, iOS',
    ratingValue: '4.7',
    reviewCount: '2100',
    hero: {
      badgeText: 'Beginner Friendly Platform',
      titlePart1: 'Earn on Niki Live as a Host',
      titleHighlight: '',
      description:
        'Turn your talent into daily earnings with flexible party room streaming, accessible payout targets, and high commission agency structures.',
      primaryCtaLabel: 'Become a Host',
      primaryCtaUrl: '/become-a-host',
      secondaryCtaLabel: 'Agency Registration',
      secondaryCtaUrl: '/become-an-agent',
      statsValue: '100%',
      statsLabel: 'Free Agency Onboarding',
      heroImage: {
        url: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1200&auto=format&fit=crop',
        alternativeText: 'Niki Live streaming host interactive room',
      },
    },
    benefits: {
      heading: 'Why Creators Love Niki Live',
      description:
        'An accessible, welcoming streaming platform with lower threshold targets and vibrant community games.',
      benefits: [
        {
          title: 'Accessible Daily Targets',
          description: 'Reach withdrawal eligibility faster with creator-friendly milestone thresholds.',
          icon: 'flag',
        },
        {
          title: 'Party Room Games',
          description: 'Interactive multiplayer rooms keep audiences engaged and gifting consistently.',
          icon: 'sports_esports',
        },
      ],
    },
    faqs: {
      heading: 'Niki Live FAQs',
      faqs: [
        {
          question: 'Can beginners join Niki Live?',
          answer:
            'Yes! Niki Live is ideal for new streamers. Livengage provides 1-on-1 coaching to help you hit your initial payout targets quickly.',
        },
      ],
    },
  },
  'poppo-live-agency': {
    slug: 'poppo-live-agency',
    name: 'Poppo Live',
    appName: 'Poppo Live',
    metaTitle: 'Vone App (Poppo Live) Agency India – Livengage',
    metaDescription:
      'Join the Vone app (Poppo Live) as a host or agent in India. How Vone works, how hosts earn, payouts via UPI and bank, and free registration with Livengage.',
    operatingSystem: 'Android, iOS',
    ratingValue: '4.8',
    reviewCount: '4500',
    hero: {
      badgeText: 'Official Agency Partner',
      titlePart1: 'Earn on the Vone App (Poppo Live) as a Host or Agent',
      titleHighlight: '',
      description:
        'Start your live streaming career or build your sub-agency network on Poppo Live. Enjoy flexible hours, instant weekly payouts, and round-the-clock agency support.',
      primaryCtaLabel: 'Apply as a Host',
      primaryCtaUrl: '/become-a-host',
      secondaryCtaLabel: 'Register Agency',
      secondaryCtaUrl: '/become-an-agent',
      statsValue: '24/7',
      statsLabel: 'Active Host Community',
      heroImage: {
        url: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop',
        alternativeText: 'Poppo Live verified host and agency community',
      },
    },
    benefits: {
      heading: 'Poppo Live Agency Advantages',
      description:
        'Superior host support structures, community challenges, and proven long-term earnings stability.',
      benefits: [
        {
          title: 'Stable Weekly Income',
          description: 'Reliable payment schedules with instant settlements for verified creators.',
          icon: 'account_balance',
        },
      ],
    },
    faqs: {
      heading: 'Poppo Live FAQs',
      faqs: [
        {
          question: 'How do agency creators get verified on Poppo Live?',
          answer:
            'Livengage fast-tracks host verification with official agency recommendation badges within 24 hours of application.',
        },
      ],
    },
  },
};

// Aliases mapping old slugs to fallback items
FALLBACK_PARTNER_APPS['partner-app'] = FALLBACK_PARTNER_APPS['poppo-live-agency'];
FALLBACK_PARTNER_APPS['partner-app-1'] = FALLBACK_PARTNER_APPS['vone-app-agency'];
FALLBACK_PARTNER_APPS['partner-app-2'] = FALLBACK_PARTNER_APPS['chill-chat-agency'];
FALLBACK_PARTNER_APPS['partner-app-3'] = FALLBACK_PARTNER_APPS['niki-live-agency'];
FALLBACK_PARTNER_APPS['poppo'] = FALLBACK_PARTNER_APPS['poppo-live-agency'];
FALLBACK_PARTNER_APPS['vone'] = FALLBACK_PARTNER_APPS['vone-app-agency'];
FALLBACK_PARTNER_APPS['chamet'] = FALLBACK_PARTNER_APPS['chill-chat-agency'];
FALLBACK_PARTNER_APPS['chill-chat'] = FALLBACK_PARTNER_APPS['chill-chat-agency'];
FALLBACK_PARTNER_APPS['niki'] = FALLBACK_PARTNER_APPS['niki-live-agency'];
