import type { Metadata } from 'next';
import { Inter, Plus_Jakarta_Sans } from 'next/font/google';
import Script from 'next/script';
import { ScrollRevealProvider } from '@/components/ui/ScrollRevealProvider';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { ThemeProvider } from '@/components/theme-provider';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { OrganizationJsonLd, WebSiteJsonLd } from '@/components/JsonLd';
import './globals.css';

/* ── Fonts ──────────────────────────────────────────────────────────────────
   CSS variables are injected as classes on <html> by next/font.
   They are consumed in globals.css via @theme inline.
   ─────────────────────────────────────────────────────────────────────────── */
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter-var',
  display: 'swap',
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta-var',
  display: 'swap',
});

/* ── SEO Metadata ─────────────────────────────────────────────────────────── */
export const metadata: Metadata = {
  metadataBase: new URL('https://www.livengage.com'),
  title: {
    default: 'Livengage – Live Streaming Agency for Hosts & Agents',
    template: '%s',
  },
  description:
    'Join Livengage, the live streaming agency for hosts and agents on Vone (Poppo Live), Chill Chat (Chamet), Niki Live and Bigo Live. Free to join, India support.',
  alternates: {
    canonical: 'https://www.livengage.com',
    languages: {
      'en-IN': 'https://www.livengage.com',
      'en': 'https://www.livengage.com',
      'x-default': 'https://www.livengage.com',
    },
  },
  openGraph: {
    title: 'Livengage – Live Streaming Agency for Hosts & Agents',
    description:
      'Join Livengage, the live streaming agency for hosts and agents on Vone (Poppo Live), Chill Chat (Chamet), Niki Live and Bigo Live. Free to join, India support.',
    url: 'https://www.livengage.com',
    siteName: 'Livengage',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Livengage – Live Streaming Agency for Hosts & Agents',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Livengage – Live Streaming Agency for Hosts & Agents',
    description:
      'Join Livengage, the live streaming agency for hosts and agents on Vone (Poppo Live), Chill Chat (Chamet), Niki Live and Bigo Live. Free to join, India support.',
    images: ['/og-image.png'],
  },
  verification: {
    google: 'google-site-verification-placeholder',
    other: {
      'msvalidate.01': 'bing-site-verification-placeholder',
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${plusJakartaSans.variable} scroll-smooth`}
      suppressHydrationWarning
    >
      <head>
        {/* Preconnect for Google Fonts & Icons (Core Web Vitals LCP optimization) */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Material Symbols Outlined icon font */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap"
        />
        {/* Organization and WebSite Structured Data */}
        <OrganizationJsonLd />
        <WebSiteJsonLd />
        {/* Google Tag Manager */}
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-NKB6GW2Q');`,
          }}
        />
        {/* End Google Tag Manager */}

        {/* Google Analytics 4 */}
        <Script
          id="ga4-script"
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-53RFPFQNB2"
        />
        <Script
          id="ga4-config"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-53RFPFQNB2');
            `,
          }}
        />
        {/* End Google Analytics 4 */}
      </head>
      <body className="bg-background text-on-surface font-body-md mesh-gradient overflow-x-hidden">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-NKB6GW2Q"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <ScrollRevealProvider>
            <Navbar />
            <main className="w-full overflow-x-hidden">{children}</main>
            <Footer />
            <WhatsAppButton />
          </ScrollRevealProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
