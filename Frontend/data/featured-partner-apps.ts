export interface FeaturedAppItem {
  id: number;
  title: string;
  slug: string;
  hero: {
    badgeText: string;
    description: string;
    primaryCtaLabel: string;
    heroImage: {
      url: string;
    };
  };
  videoPreview: {
    video: {
      url: string;
    };
  };
}

export const EXACT_FEATURED_PARTNER_APPS: FeaturedAppItem[] = [
  {
    id: 9,
    title: 'Chill Chat (Chamet)',
    slug: 'chill-chat-agency',
    hero: {
      badgeText: 'Live Video Chat & Social Agency',
      description:
        'Join Chill Chat (Chamet in India) as a verified host or agent partner. Connect with high-gifting international viewers, enjoy VIP host support, and receive automated weekly payouts directly via UPI and Indian bank transfer.',
      primaryCtaLabel: 'Explore Chill Chat Agency',
      heroImage: {
        url: 'https://api.livengage.com/uploads/Gemini_Generated_Image_jluim4jluim4jlui_f29d4f72ca.png',
      },
    },
    videoPreview: {
      video: {
        url: 'https://api.livengage.com/uploads/Chamet_video_ee1d497658.mp4',
      },
    },
  },
  {
    id: 10,
    title: 'Niki Live',
    slug: 'niki-live-agency',
    hero: {
      badgeText: 'Beginner Friendly Live Streaming Agency',
      description:
        'Start broadcasting on Niki Live with Livengage. Ideal for new creators with accessible daily milestones, engaging party rooms, 1-on-1 coaching, and structured weekly agency settlements.',
      primaryCtaLabel: 'Explore Niki Live Agency',
      heroImage: {
        url: 'https://api.livengage.com/uploads/Gemini_Generated_Image_rr644orr644orr64_b3d9f6f68f.png',
      },
    },
    videoPreview: {
      video: {
        url: 'https://api.livengage.com/uploads/Niki_Live_video_b98e33a61d.mp4',
      },
    },
  },
  {
    id: 11,
    title: 'Vone App (Poppo Live)',
    slug: 'vone-app-agency',
    hero: {
      badgeText: 'Official Indian Live Streaming Network',
      description:
        'Vone App is the official Indian platform for Poppo Live. Stream live, participate in high-energy PK battles, build community party rooms, and scale your agency network with transparent diamond-to-INR conversions.',
      primaryCtaLabel: 'Explore Vone App Agency',
      heroImage: {
        url: 'https://api.livengage.com/uploads/Gemini_Generated_Image_35wf8235wf8235wf_61fde5c937.png',
      },
    },
    videoPreview: {
      video: {
        url: 'https://api.livengage.com/uploads/Poppo_Live_Video_8251861183.mp4',
      },
    },
  },
];
