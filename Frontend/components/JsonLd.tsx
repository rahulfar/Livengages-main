import React from 'react';

/**
 * Organization Schema (Item 7)
 */
export function OrganizationJsonLd() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': 'https://www.livengage.com/#organization',
    name: 'Livengage',
    url: 'https://www.livengage.com',
    logo: {
      '@type': 'ImageObject',
      url: 'https://www.livengage.com/Light.svg',
      width: 150,
      height: 40,
    },
    description:
      'Premier global live streaming agency connecting creators, hosts, and agents with top streaming apps including Chill Chat (Chamet), Vone App, Poppo Live, and Niki Live.',
    email: 'support@livengage.com',
    telephone: '+918796802120',
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: '+918796802120',
        contactType: 'customer support',
        email: 'support@livengage.com',
        availableLanguage: ['English', 'Hindi'],
        areaServed: ['IN', 'US', 'GB', 'AE', 'SG'],
      },
    ],
    sameAs: [
      'https://www.instagram.com/livengage',
      'https://www.facebook.com/livengage',
      'https://www.youtube.com/@livengage',
      'https://twitter.com/livengage',
      'https://www.linkedin.com/company/livengage',
    ],
    address: {
      '@type': 'PostalAddress',
      streetAddress: '1 Wallich St, Guocotower, Floor 1',
      addressLocality: 'Singapore',
      postalCode: '078881',
      addressCountry: 'SG',
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

/**
 * WebSite Schema (Item 7)
 */
export function WebSiteJsonLd() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': 'https://www.livengage.com/#website',
    url: 'https://www.livengage.com',
    name: 'Livengage',
    publisher: {
      '@id': 'https://www.livengage.com/#organization',
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://www.livengage.com/blogs?q={search_term_string}',
      'query-input': 'required name=search_term_string',
    },
    inLanguage: ['en-IN', 'en'],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

/**
 * BreadcrumbList Schema (Item 7)
 */
export function BreadcrumbJsonLd({
  items,
}: {
  items: Array<{ name: string; url: string }>;
}) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url.startsWith('http') ? item.url : `https://www.livengage.com${item.url}`,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

/**
 * FAQPage Schema (Item 7)
 */
export function FaqJsonLd({
  faqs,
}: {
  faqs: Array<{ question: string; answer: string }>;
}) {
  if (!faqs || faqs.length === 0) return null;

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

/**
 * Article / BlogPosting Schema (Item 7, 16, 46, 47)
 */
export function ArticleJsonLd({
  headline,
  description,
  url,
  image,
  datePublished,
  dateModified,
  authorName = 'Livengage Editorial Team',
}: {
  headline: string;
  description?: string;
  url: string;
  image?: string;
  datePublished?: string;
  dateModified?: string;
  authorName?: string;
}) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline,
    description: description || headline,
    url,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url,
    },
    image: image ? [image] : ['https://www.livengage.com/og-image.png'],
    datePublished: datePublished || '2026-11-01T00:00:00Z',
    dateModified: dateModified || datePublished || '2026-11-16T00:00:00Z',
    author: {
      '@type': 'Person',
      name: authorName,
      url: 'https://www.livengage.com/about-us',
    },
    publisher: {
      '@id': 'https://www.livengage.com/#organization',
    },
    inLanguage: 'en-IN',
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

/**
 * SoftwareApplication Schema (Item 7)
 */
export function SoftwareApplicationJsonLd({
  name,
  operatingSystem = 'Android, iOS',
  applicationCategory = 'SocialNetworkingApplication',
  description,
  url,
  ratingValue = '4.8',
  reviewCount = '1250',
}: {
  name: string;
  operatingSystem?: string;
  applicationCategory?: string;
  description: string;
  url: string;
  ratingValue?: string;
  reviewCount?: string;
}) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name,
    operatingSystem,
    applicationCategory,
    description,
    url,
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue,
      reviewCount,
    },
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

/**
 * HowTo Schema for Host Onboarding (Item 7)
 */
export function HowToJsonLd({
  name = 'How to Become a Live Streaming Host with Livengage',
  description = 'Follow these simple steps to apply, get verified, and start earning on top global live streaming apps.',
  steps,
}: {
  name?: string;
  description?: string;
  steps: Array<{ name: string; text: string }>;
}) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name,
    description,
    step: steps.map((s, idx) => ({
      '@type': 'HowToStep',
      position: idx + 1,
      name: s.name,
      text: s.text,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
