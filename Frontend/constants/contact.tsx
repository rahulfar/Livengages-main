import {
  ContactHeroContent,
  ContactChannel,
  RegionNode,
  MapData,
} from '@/types/contact';

export const CONTACT_HERO: ContactHeroContent = {
  titleStart: 'Contact',
  highlightWord: 'Livengage',
  description:
    'Questions about becoming a host or agent? Chat with Livengage on WhatsApp or email our support team. We reply in minutes, 24/7.',
};

export const CONTACT_CHANNELS: ContactChannel[] = [
  {
    icon: 'mail',
    iconBgClass: 'bg-primary/10',
    iconColorClass: 'text-primary',
    title: 'Email Support (24/7)',
    description: 'Dedicated support for host onboarding, agency contracts, and payment inquiries. Support hours: 24/7, Mon - Sun.',
    linkText: 'support@livengage.com',
    linkHref: 'mailto:support@livengage.com',
  },
  {
    icon: 'forum',
    iconBgClass: 'bg-[#25D366]/10',
    iconColorClass: 'text-[#25D366]',
    title: 'WhatsApp Support',
    description: 'Instant assistance for urgent host queries, verification status, and agent onboarding.',
    linkText: 'Chat on WhatsApp',
    linkHref: 'https://wa.me/918796802120?text=Hello%20Livengage%20Team!%20I%20would%20like%20to%20connect%20regarding%20live%20streaming.',
  },
  {
    icon: 'location_on',
    iconBgClass: 'bg-secondary/10',
    iconColorClass: 'text-secondary',
    title: 'Global Headquarters',
    description: (
      <>
        LIVENGAGE<br />
        1 Wallich St, Guocotower, Floor 1<br />
        Singapore 078881
      </>
    ),
    linkText: 'View on Map',
    linkHref: 'https://maps.google.com/?q=1+Wallich+St+Guocotower+Singapore+078881',
  },
];

export const OPERATIONAL_NETWORKS: RegionNode[] = [
  {
    region: 'North America',
    cities: ['New York', 'Los Angeles', 'Chicago', 'Miami'],
  },
  {
    region: 'Europe & UK',
    cities: ['London', 'Paris', 'Berlin', 'Milan'],
  },
  {
    region: 'Asia Pacific',
    cities: ['Singapore', 'New Delhi', 'Mumbai', 'Tokyo'],
  },
  {
    region: 'Middle East',
    cities: ['Dubai', 'Abu Dhabi', 'Riyadh', 'Doha'],
  },
];

export const GLOBAL_MAP_DATA: MapData = {
  backgroundImageUrl:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuD156XgUFV-B3wX7rgzSsEXQLUqU33mdVSfMNlry9lpnCGyKMLnBwF-xe9R7KU1-Jwvg5MeevSOwjYyA4_0_XLeSNuVD1ANAHZK4ycsSPje5u__ymk3sVWt5hR8QlaMlmnp3fPMizwfnmWZPmT2NZB4xcTJGxgt6RqxQqRGlYrSbPMCZpCo80UHcPQhbHxnBZunGovv9iMATwN33Yv6_eUfdBtf1JHfmF7iKGHn0HhGcp1NBrdzC4X7Ur_tebB4bYOKNhaQofV8wQ',
  statusLabel: 'Live Network',
  statusValue: '24/7',
  statusSubtext: 'Active Creator & Agent Support Across 20+ Countries',
};
