import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, ShieldCheck, CreditCard, Headphones, Smartphone } from 'lucide-react';
import { FaqJsonLd } from '@/components/JsonLd';
import { SITE_STATS } from '@/constants/site-stats';

const HINDI_FAQS = [
  {
    question: 'लाइव स्ट्रीमिंग होस्ट कैसे बनें?',
    answer:
      'हमारे "होस्ट बनें" फॉर्म को भरें या व्हाट्सएप पर हमसे संपर्क करें। हमारी टीम 24 घंटे में आपका प्रोफाइल बनाकर आपको Vone (Poppo) या Chill Chat (Chamet) पर लाइव शुरू करवाएगी।',
  },
  {
    question: 'भारत में कमाई का भुगतान कैसे मिलता है?',
    answer:
      'Livengage के माध्यम से आपको हर हफ्ते सीधे आपके बैंक खाते या UPI (Google Pay, PhonePe, Paytm) में आपकी कमाई बिना किसी कटौती के प्राप्त होती है।',
  },
  {
    question: 'क्या जॉइन करने के लिए कोई फीस देनी होती है?',
    answer:
      'बिल्कुल नहीं। Livengage में होस्ट या सब-एजेंट बनना 100% मुफ्त है। कभी भी किसी भी एजेंट को कोई रजिस्ट्रेशन फीस न दें।',
  },
  {
    question: 'एजेंसी पार्टनर (सब-एजेंट) बनकर कितनी कमाई हो सकती है?',
    answer:
      'सब-एजेंट अपने द्वारा जोड़े गए होस्ट्स की कमाई पर 10% से 20% तक का ऑफिशियल कमीशन प्राप्त करते हैं। 20-50 होस्ट्स की टीम बनाकर आप महीने का ₹50,000 से ₹2,50,000+ तक कमा सकते हैं।',
  },
];

const PARTNER_APPS = [
  {
    name: 'Vone App (Poppo Live)',
    desc: 'भारत में सबसे लोकप्रिय वीडियो ब्रॉडकास्टिंग और पार्टी रूम ऐप। दैनिक व साप्ताहिक UPI भुगतान।',
    link: '/vone-app-agency',
  },
  {
    name: 'Chill Chat (Chamet)',
    desc: '1-ऑन-1 वीडियो कॉल और प्राइवेट चैट के लिए बेहतरीन अर्निंग ऐप। उच्च डॉलर प्रति घंटा कमाई।',
    link: '/chill-chat-agency',
  },
  {
    name: 'Niki Live',
    desc: 'शुरुआती क्रिएटर्स और ऑडियो/वीडियो टॉक शो होस्ट्स के लिए सबसे आसान और सुरक्षित प्लेटफॉर्म।',
    link: '/niki-live-agency',
  },
];

export default function HindiHomePage() {
  return (
    <main className="bg-background text-on-background min-h-screen pt-28 pb-20 overflow-x-hidden">
      <FaqJsonLd faqs={HINDI_FAQS} />

      {/* Hero */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto py-16 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest mb-6">
          आधिकारिक लाइव स्ट्रीमिंग एजेंसी
        </div>
        <h1 className="font-display-lg text-4xl md:text-6xl font-black text-on-surface dark:text-white mb-6 leading-tight max-w-4xl mx-auto">
          लाइव स्ट्रीमिंग होस्ट या एजेंसी पार्टनर बनकर{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
            हर महीने कमाई करें
          </span>
        </h1>
        <p className="text-on-surface-variant text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          Livengage भारत और दुनिया भर में {SITE_STATS.creators} से अधिक क्रिएटर्स और एजेंट्स का भरोसेमंद नेटवर्क है। Vone App (Poppo Live), Chill Chat (Chamet) और Niki Live पर सीधे बैंक व UPI में साप्ताहिक भुगतान पाएं।
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
          <Link
            href="/become-a-host"
            className="btn-gradient px-8 py-4 rounded-full text-white font-bold text-lg flex items-center justify-center gap-2 hover:scale-105 transition-all shadow-xl"
          >
            <span>होस्ट के लिए आवेदन करें</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
          <Link
            href="/become-an-agent"
            className="px-8 py-4 rounded-full border-2 border-outline-variant text-on-surface dark:text-white font-bold text-lg flex items-center justify-center hover:bg-surface-container transition-colors"
          >
            एजेंट के रूप में जुड़ें
          </Link>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto glass-card p-8 rounded-3xl border border-outline-variant/30">
          <div>
            <div className="text-3xl md:text-4xl font-black text-primary mb-1">{SITE_STATS.creators}</div>
            <div className="text-xs text-on-surface-variant font-bold uppercase">सक्रिय क्रिएटर्स</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-black text-primary mb-1">{SITE_STATS.countries}</div>
            <div className="text-xs text-on-surface-variant font-bold uppercase">देश</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-black text-primary mb-1">100% फ्री</div>
            <div className="text-xs text-on-surface-variant font-bold uppercase">जॉइनिंग फीस</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-black text-primary mb-1">साप्ताहिक</div>
            <div className="text-xs text-on-surface-variant font-bold uppercase">UPI व बैंक भुगतान</div>
          </div>
        </div>
      </section>

      {/* Partner Apps */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto py-16">
        <div className="text-center mb-12">
          <h2 className="font-display-md text-3xl md:text-4xl font-black text-on-surface dark:text-white mb-3">
            हमारे प्रमुख पार्टनर ऐप्स
          </h2>
          <p className="text-on-surface-variant text-base">
            आधिकारिक कॉन्ट्रैक्ट और पूरी सुरक्षा के साथ टॉप ऐप्स पर लाइव आएं।
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PARTNER_APPS.map((app, i) => (
            <div key={i} className="glass-card p-8 rounded-3xl border border-outline-variant/30 flex flex-col justify-between hover:border-primary/50 transition-all">
              <div>
                <h3 className="font-bold text-2xl text-on-surface dark:text-white mb-3">{app.name}</h3>
                <p className="text-sm text-on-surface-variant leading-relaxed mb-6">{app.desc}</p>
              </div>
              <Link href={app.link} className="text-primary font-bold flex items-center gap-1 text-sm hover:underline">
                <span>पूरी जानकारी देखें</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* FAQs */}
      <section className="px-6 md:px-12 max-w-4xl mx-auto py-16">
        <h2 className="font-display-md text-3xl font-bold text-center text-on-surface dark:text-white mb-10">
          अक्सर पूछे जाने वाले सवाल (FAQs)
        </h2>
        <div className="space-y-4">
          {HINDI_FAQS.map((faq, i) => (
            <div key={i} className="glass-card p-6 rounded-2xl border border-outline-variant/30">
              <h3 className="font-bold text-lg text-on-surface dark:text-white mb-2">{faq.question}</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
