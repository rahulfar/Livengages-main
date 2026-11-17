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
      // 5. /blog hub alias (Item 18 in audit)
      {
        source: '/blog',
        destination: '/blogs',
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
