// next.config.ts
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  compress: true,
  images: {
    // This tells Next.js to bypass the local proxy optimizer for local images, 
    // which completely fixes the "private ip" crash during development.
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
      // 1. Broken subfolder relative links from footer (Item 1 in audit)
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
      // 2. /join-us duplicates host page (Item 17 in audit)
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
      // 4. Partner app legacy URLs without keywords to keyword-rich URLs (Item 5 in audit)
      {
        source: '/partner-app',
        destination: '/poppo-live-agency',
        permanent: true,
      },
      {
        source: '/partner-app-1',
        destination: '/vone-app-agency',
        permanent: true,
      },
      {
        source: '/partner-app-2',
        destination: '/chill-chat-agency',
        permanent: true,
      },
      {
        source: '/partner-app-3',
        destination: '/niki-live-agency',
        permanent: true,
      },
      {
        source: '/partner-apps/partner-app',
        destination: '/poppo-live-agency',
        permanent: true,
      },
      {
        source: '/partner-apps/partner-app-1',
        destination: '/vone-app-agency',
        permanent: true,
      },
      {
        source: '/partner-apps/partner-app-2',
        destination: '/chill-chat-agency',
        permanent: true,
      },
      {
        source: '/partner-apps/partner-app-3',
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
      // 5. /blogs to /blog guides hub (Item 18 in audit)
      {
        source: '/blogs',
        destination: '/blog',
        permanent: true,
      },
      // 6. Old blog slugs with random IDs and typos to clean keyword URLs (Section 5 & 13 in audit)
      {
        source: '/blogs/livengage-camera-guide--di7bl9tg',
        destination: '/blog/live-streaming-camera-setup-tips',
        permanent: true,
      },
      {
        source: '/blogs/algorithm-hacks-how-to-get-featured-on-popular-page-poppo-chamet',
        destination: '/blog/live-streaming-camera-setup-tips',
        permanent: true,
      },
      {
        source: '/blogs/a-practicaguide-to-building-a-successful-live-streaming-agency--e5uu',
        destination: '/blog/how-to-build-a-live-streaming-agency',
        permanent: true,
      },
      {
        source: '/blogs/how-to-start-and-scale-a-live-streaming-sub-agency',
        destination: '/blog/how-to-build-a-live-streaming-agency',
        permanent: true,
      },
      {
        source: '/blogs/how-to-earn-on-chamet-app-a-host-guide--zz6o',
        destination: '/blog/how-to-earn-on-chill-chat-chamet',
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
        source: '/blogs/how-to-start-streaming-build-an-audience-earn--eiw2',
        destination: '/blog/how-to-start-live-streaming-and-earn',
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
    ];
  },
  async rewrites() {
    return [
      {
        source: '/blog',
        destination: '/blogs',
      },
      {
        source: '/blog/:slug',
        destination: '/blogs/:slug',
      },
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
