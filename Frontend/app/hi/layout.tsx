import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Livengage – लाइव स्ट्रीमिंग होस्ट और एजेंसी पार्टनर बनें',
  description:
    'Livengage भारत की प्रमुख लाइव स्ट्रीमिंग एजेंसी है। Vone (Poppo Live), Chill Chat (Chamet), Niki Live पर होस्ट या एजेंट बनकर हर हफ्ते UPI और बैंक में कमाई करें।',
  alternates: {
    canonical: 'https://www.livengage.com/hi',
    languages: {
      'en-IN': 'https://www.livengage.com',
      'hi-IN': 'https://www.livengage.com/hi',
      'en': 'https://www.livengage.com',
      'x-default': 'https://www.livengage.com',
    },
  },
  openGraph: {
    title: 'Livengage – लाइव स्ट्रीमिंग होस्ट और एजेंसी पार्टनर बनें',
    description:
      'Livengage भारत की प्रमुख लाइव स्ट्रीमिंग एजेंसी है। Vone (Poppo Live), Chill Chat (Chamet), Niki Live पर होस्ट या एजेंट बनकर हर हफ्ते UPI और बैंक में कमाई करें।',
    url: 'https://www.livengage.com/hi',
    siteName: 'Livengage',
    locale: 'hi_IN',
    type: 'website',
  },
};

export default function HindiLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div lang="hi">{children}</div>;
}
