import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  compress: true,
  images: {
    unoptimized: process.env.NODE_ENV === 'development',
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'i.pravatar.cc',
      },
      {
        protocol: 'https',
        hostname: 'cdn-icons-png.flaticon.com',
      },
      {
        protocol: 'https',
        hostname: 'api.livengage.com',
        pathname: '/**',
      },
      {
        protocol: 'http',
        hostname: '127.0.0.1',
        port: '1337',
        pathname: '/**',
      },
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '1337',
        pathname: '/**',
      },
    ],
  },
  async redirects() {
    return [
      // 1. Broken subfolder footer relative links
      {
        source: '/blogs/agent-ecosystem',
        destination: '/agent-ecosystem',
        permanent: true,
      },
      {
        source: '/partner-apps/agent-ecosystem',
        destination: '/agent-ecosystem',
        permanent: true,
      },

      // 2. /join-us duplicate of host page
      {
        source: '/join-us',
        destination: '/become-a-host',
        permanent: true,
      },

      // 3. /contact alias
      {
        source: '/contact',
        destination: '/contact-us',
        permanent: true,
      },

      // 4. Critical fix: Partner apps correct 1-to-1 redirect mapping (Audit Section 2.1 & 4 Task 1)
      {
        source: '/partner-apps/partner-app',
        destination: '/vone-app-agency',
        permanent: true,
      },
      {
        source: '/partner-app',
        destination: '/vone-app-agency',
        permanent: true,
      },
      {
        source: '/partner-apps/partner-app-1',
        destination: '/chill-chat-agency',
        permanent: true,
      },
      {
        source: '/partner-app-1',
        destination: '/chill-chat-agency',
        permanent: true,
      },
      {
        source: '/partner-apps/partner-app-2',
        destination: '/niki-live-agency',
        permanent: true,
      },
      {
        source: '/partner-app-2',
        destination: '/niki-live-agency',
        permanent: true,
      },
      {
        source: '/partner-apps/partner-app-3',
        destination: '/niki-live-agency',
        permanent: true,
      },
      {
        source: '/partner-app-3',
        destination: '/niki-live-agency',
        permanent: true,
      },
      {
        source: '/partner-apps/vone',
        destination: '/vone-app-agency',
        permanent: true,
      },
      {
        source: '/partner-apps/chamet',
        destination: '/chill-chat-agency',
        permanent: true,
      },
      {
        source: '/partner-apps/niki',
        destination: '/niki-live-agency',
        permanent: true,
      },
      {
        source: '/partner-apps/poppo',
        destination: '/poppo-live-agency',
        permanent: true,
      },

      // 5. Staging duplicate blog URLs (Section 2.3 & Task 1)
      {
        source: '/blog/blog-3',
        destination: '/blog/live-streaming-camera-setup-tips',
        permanent: true,
      },
      {
        source: '/blog/blog-2',
        destination: '/blog/how-to-build-a-live-streaming-agency',
        permanent: true,
      },
      {
        source: '/blog/blog-1',
        destination: '/blog/how-to-earn-on-chill-chat-chamet',
        permanent: true,
      },
      {
        source: '/blog/blog',
        destination: '/blog/how-to-start-live-streaming-and-earn',
        permanent: true,
      },

      // 6. Old live blog URLs with random IDs & slugs to new canonical URLs (Section 2.3 & Task 1)
      {
        source: '/blogs/livengage-camera-guide-:slug(.*)',
        destination: '/blog/live-streaming-camera-setup-tips',
        permanent: true,
      },
      {
        source: '/blogs/a-practicaguide-to-building-a-successful-live-streaming-agency-:slug(.*)',
        destination: '/blog/how-to-build-a-live-streaming-agency',
        permanent: true,
      },
      {
        source: '/blogs/how-to-earn-on-chamet-app-a-host-guide-:slug(.*)',
        destination: '/blog/how-to-earn-on-chill-chat-chamet',
        permanent: true,
      },
      {
        source: '/blogs/how-to-start-streaming-build-an-audience-earn-:slug(.*)',
        destination: '/blog/how-to-start-live-streaming-and-earn',
        permanent: true,
      },
      {
        source: '/blogs/algorithm-hacks-how-to-get-featured-on-popular-page-poppo-chamet',
        destination: '/blog/live-streaming-camera-setup-tips',
        permanent: true,
      },
      {
        source: '/blogs/how-to-start-and-scale-a-live-streaming-sub-agency',
        destination: '/blog/how-to-build-a-live-streaming-agency',
        permanent: true,
      },
      {
        source: '/blogs/how-to-earn-on-chamet-app-host-guide',
        destination: '/blog/how-to-earn-on-chill-chat-chamet',
        permanent: true,
      },
      {
        source: '/blogs/top-live-streaming-apps-for-creators-in-india',
        destination: '/blog/how-to-earn-on-chill-chat-chamet',
        permanent: true,
      },
      {
        source: '/blogs/live-streamer-monetization-guide-gifts-targets-payouts',
        destination: '/blog/how-to-start-live-streaming-and-earn',
        permanent: true,
      },
      {
        source: '/blog/chill-chat/how-to-earn-on-chill-chat-chamet',
        destination: '/blog/how-to-earn-on-chill-chat-chamet',
        permanent: true,
      },

      // 7. Base /blogs and catch-all /blogs/:slug to /blog
      {
        source: '/blogs',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/blogs/:slug*',
        destination: '/blog',
        permanent: true,
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: '/vone-app-agency',
        destination: '/partner-apps/vone-app-agency',
      },
      {
        source: '/chill-chat-agency',
        destination: '/partner-apps/chill-chat-agency',
      },
      {
        source: '/niki-live-agency',
        destination: '/partner-apps/niki-live-agency',
      },
      {
        source: '/poppo-live-agency',
        destination: '/partner-apps/poppo-live-agency',
      },
    ];
  },
};

export default nextConfig;
