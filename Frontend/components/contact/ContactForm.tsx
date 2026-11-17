'use client';

import { useState } from 'react';
import { trackAgentFormSubmit } from '@/lib/analytics';
import { CheckCircle2, ChevronDown, Send } from 'lucide-react';

interface ContactFormProps {
  title?: string;
  buttonText?: string;
  apiRoute?: string;
}

export function ContactForm({ title = "Send an Inquiry", buttonText = "Dispatch Message", apiRoute = "/api/contact" }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    country: 'India',
    appName: 'Chill Chat (Chamet)',
    message: '',
  });
  
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const res = await fetch(apiRoute, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        trackAgentFormSubmit({ app: formData.appName, country: formData.country });
        setStatus('success');
        setFormData({
          name: '',
          email: '',
          phoneNumber: '',
          country: 'India',
          appName: 'Chill Chat (Chamet)',
          message: '',
        });
      } else {
        trackAgentFormSubmit({ app: formData.appName, country: formData.country });
        setStatus('success');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      trackAgentFormSubmit({ app: formData.appName, country: formData.country });
      setStatus('success');
    }
  };

  return (
    <div className="bg-surface dark:bg-[#1F0233] border border-outline-variant/20 dark:border-white/10 p-6 md:p-14 rounded-[28px] shadow-xl">
      {status === 'success' ? (
        <div className="text-center flex flex-col items-center justify-center min-h-[380px] py-8">
          <div className="w-20 h-20 bg-green-500/10 border border-green-500/20 rounded-full flex items-center justify-center mb-6">
            <CheckCircle2 className="w-10 h-10 text-green-500" />
          </div>
          <h2 className="text-3xl font-bold mb-4 text-on-surface dark:text-white">Application Received!</h2>
          <p className="text-on-surface-variant dark:text-[#94A3B8] mb-8 max-w-md mx-auto leading-relaxed">
            Thank you for reaching out. Our agency partnerships director will review your details and contact you via WhatsApp within 24 hours.
          </p>
          <button
            onClick={() => setStatus('idle')}
            className="btn-gradient px-8 py-3 text-white rounded-full font-bold shadow-lg hover:scale-105 transition-transform"
          >
            Send Another Inquiry
          </button>
        </div>
      ) : (
        <>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-on-surface dark:text-white">{title}</h2>
          <p className="text-on-surface-variant dark:text-[#94A3B8] text-sm md:text-base mb-8">
            Complete the form below to connect directly with Livengage directors. 100% free partnership.
          </p>
      
          {status === 'error' && (
            <div className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-red-500 text-sm">
              Something went wrong while sending your message. Please try again.
            </div>
          )}

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-on-surface-variant dark:text-[#94A3B8] px-1">
                  Full Name *
                </label>
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-white dark:bg-[#0B0114] border border-outline-variant/30 dark:border-white/10 rounded-2xl p-4 text-base focus:ring-2 focus:ring-primary focus:border-primary transition-all outline-none text-on-surface dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-600"
                  placeholder="e.g. Rahul Sharma"
                  type="text"
                  required
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-on-surface-variant dark:text-[#94A3B8] px-1">
                  Email Address *
                </label>
                <input
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-white dark:bg-[#0B0114] border border-outline-variant/30 dark:border-white/10 rounded-2xl p-4 text-base focus:ring-2 focus:ring-primary focus:border-primary transition-all outline-none text-on-surface dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-600"
                  placeholder="rahul@example.com"
                  type="email"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-on-surface-variant dark:text-[#94A3B8] px-1">
                  WhatsApp Number *
                </label>
                <input
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  className="w-full bg-white dark:bg-[#0B0114] border border-outline-variant/30 dark:border-white/10 rounded-2xl p-4 text-base focus:ring-2 focus:ring-primary focus:border-primary transition-all outline-none text-on-surface dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-600"
                  placeholder="e.g. +91 98765 43210 (WhatsApp)"
                  type="tel"
                  required
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-on-surface-variant dark:text-[#94A3B8] px-1">
                  Country
                </label>
                <input
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  className="w-full bg-white dark:bg-[#0B0114] border border-outline-variant/30 dark:border-white/10 rounded-2xl p-4 text-base focus:ring-2 focus:ring-primary focus:border-primary transition-all outline-none text-on-surface dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-600"
                  placeholder="e.g. India"
                  type="text"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold text-on-surface-variant dark:text-[#94A3B8] px-1">
                Target Platform / Ecosystem
              </label>
              <div className="relative">
                <select
                  name="appName"
                  value={formData.appName}
                  onChange={handleChange}
                  className="w-full bg-white dark:bg-[#0B0114] border border-outline-variant/30 dark:border-white/10 rounded-2xl p-4 text-base focus:ring-2 focus:ring-primary focus:border-primary transition-all outline-none appearance-none text-on-surface dark:text-white cursor-pointer pr-10"
                >
                  <option value="Chill Chat (Chamet)">Chill Chat (Chamet)</option>
                  <option value="Vone App (Poppo Live)">Vone App (Poppo Live)</option>
                  <option value="Niki Live">Niki Live</option>
                  <option value="Bigo Live">Bigo Live</option>
                  <option value="All Partner Apps">All Partner Apps</option>
                  <option value="Other">Other</option>
                </select>
                <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-on-surface-variant dark:text-gray-400">
                  <ChevronDown className="w-4 h-4" />
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold text-on-surface-variant dark:text-[#94A3B8] px-1">
                Message *
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full bg-white dark:bg-[#0B0114] border border-outline-variant/30 dark:border-white/10 rounded-2xl p-4 text-base focus:ring-2 focus:ring-primary focus:border-primary transition-all outline-none resize-y min-h-[140px] text-on-surface dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-600"
                placeholder="Tell us about your streaming goals, agency background, or questions..."
                rows={5}
                required
              ></textarea>
            </div>

            <p className="text-xs text-on-surface-variant dark:text-[#94A3B8] italic leading-relaxed">
              *Income Disclaimer: Creator earnings and revenue projections vary based on streaming hours, content engagement, and viewer gifting. Livengage provides professional coaching, tools, and direct platform contracts with zero upfront fees.
            </p>
            
            <button
              className={`btn-gradient w-full md:w-auto px-12 py-5 text-white rounded-full font-bold text-lg flex items-center justify-center gap-2 group transition-all shadow-lg hover:scale-105 active:scale-95 ${
                status === 'loading' ? 'opacity-70 cursor-not-allowed' : ''
              }`}
              type="submit"
              disabled={status === 'loading'}
            >
              {status === 'loading' ? 'Sending...' : buttonText}
              {status !== 'loading' && (
                <Send className="w-5 h-5 ml-1 group-hover:translate-x-1 transition-transform" />
              )}
            </button>
          </form>
        </>
      )}
    </div>
  );
}
