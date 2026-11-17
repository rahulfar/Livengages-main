import React from 'react';
import { CheckCircle2, ShieldCheck } from 'lucide-react';
import {
  PrivacyHeroContent,
  PrivacyNavItem,
  PrivacySection,
  PrivacyCTAContent,
} from '@/types/privacy-policy';

export const PRIVACY_HERO: PrivacyHeroContent = {
  badge: 'LEGAL DOCUMENTATION',
  title: 'Privacy Policy',
  lastUpdated: 'Last updated: November 17, 2026.',
  description:
    'Your privacy is paramount at Livengage. This policy outlines how we handle your data with precision, transparency, and integrity across our live streaming agency network.',
};

export const PRIVACY_NAV_ITEMS: PrivacyNavItem[] = [
  { id: 'collection', title: 'Information Collection' },
  { id: 'usage', title: 'Data Usage' },
  { id: 'third-party', title: 'Third-Party Sharing' },
  { id: 'rights', title: 'User Rights' },
];

export const PRIVACY_SECTIONS: PrivacySection[] = [
  {
    id: 'collection',
    title: '1. Information Collection',
    content: (
      <div className="space-y-stack-lg text-on-surface-variant leading-relaxed">
        <p>
          Livengage collects information to provide better services to our talent, hosts, and partner agents. We collect information in the following ways:
        </p>
        <ul className="list-none space-y-stack-md ml-0">
          <li className="flex gap-stack-md items-start">
            <CheckCircle2 className="w-5 h-5 text-primary mt-1 shrink-0" aria-hidden="true" />
            <span>
              <strong>Personal Information:</strong> Includes your name, email address, WhatsApp/phone number, social media handles, streaming platform user IDs, and payment details (UPI/Bank) required for weekly commission payouts.
            </span>
          </li>
          <li className="flex gap-stack-md items-start">
            <CheckCircle2 className="w-5 h-5 text-primary mt-1 shrink-0" aria-hidden="true" />
            <span>
              <strong>Performance Data:</strong> Data retrieved from partner applications, including streaming hours, audience engagement metrics, and virtual gift revenue.
            </span>
          </li>
          <li className="flex gap-stack-md items-start">
            <CheckCircle2 className="w-5 h-5 text-primary mt-1 shrink-0" aria-hidden="true" />
            <span>
              <strong>Cookies & Tracking:</strong> We use standard technologies to collect and store information when you visit the Livengage website to improve your browsing experience.
            </span>
          </li>
        </ul>
      </div>
    ),
  },
  {
    id: 'usage',
    title: '2. How We Use Information',
    content: (
      <div className="space-y-stack-md text-on-surface-variant leading-relaxed">
        <p>
          We use the collected information for talent onboarding, contract management, matching you with appropriate platforms (such as Chill Chat, Vone, and Niki Live), and disbursing earnings via direct bank deposit or UPI.
        </p>
        <p>
          We do not sell, rent, or trade your personal information to third parties for marketing purposes.
        </p>
      </div>
    ),
  },
  {
    id: 'third-party',
    title: '3. Third-Party Platform Sharing',
    content: (
      <div className="space-y-stack-md text-on-surface-variant leading-relaxed">
        <p>
          As an official talent agency, we share necessary creator identification data with authorized platform partners (e.g., Chill Chat, Vone App, Niki Live, Bigo Live) strictly to register your host profile, activate VIP bonus tiers, and track revenue shares.
        </p>
      </div>
    ),
  },
  {
    id: 'rights',
    title: '4. Your Data Rights & Contact',
    content: (
      <div className="space-y-stack-md text-on-surface-variant leading-relaxed">
        <p>
          You have the right to request access to, correction of, or deletion of your personal data held by Livengage. To exercise these rights, please contact our privacy compliance officer at <a href="mailto:support@livengage.com" className="text-primary hover:underline">support@livengage.com</a>.
        </p>
      </div>
    ),
  },
];

export const PRIVACY_CTA: PrivacyCTAContent = {
  heading: 'Have questions about your data?',
  description:
    'Our compliance team is available 24/7 to address any data protection or privacy concerns.',
  primaryButtonText: 'Contact Support',
  primaryButtonLink: '/contact-us',
  secondaryButtonText: 'Become a Host',
  secondaryButtonLink: '/become-a-host',
};
