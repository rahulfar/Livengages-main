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
    title: 'Live Video Chat (Chamet)',
    slug: 'partner-app-1',
    hero: {
      badgeText: 'Live Video Chat & Social App',
      description:
        'Chamet is a social live-streaming and video chat app designed to help you connect with people from around the world. Discover live streams, start video chats, meet new people, and enjoy interactive social experiences from your mobile device.',
      primaryCtaLabel: 'Download Chamet',
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
    title: 'Live Streaming & Social App ( Niki Live )',
    slug: 'partner-app-2',
    hero: {
      badgeText: 'Live Streaming & Social App',
      description:
        'Niki Live is a live streaming and social entertainment app that helps users discover live broadcasts, meet new people, and interact through video, voice, and chat features. Connect globally and enjoy real-time entertainment.',
      primaryCtaLabel: 'Download Niki Live',
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
    title: 'Vone App – Live, Video Party & Fun',
    slug: 'partner-app',
    hero: {
      badgeText: 'Live Video Party & Fun',
      description:
        'Vone, known internationally as Poppo Live, lets you watch live streams, join party rooms, meet new people, and engage with vibrant global creators with daily interactive rewards.',
      primaryCtaLabel: 'Download Vone App',
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
