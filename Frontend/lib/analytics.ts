'use client';

/**
 * GA4 and GTM conversion event tracking
 * Audit Section 3.7 & Task 12:
 * host_form_submit, agent_form_submit, whatsapp_click, invite_link_click
 * MUST fire with an app parameter (chill_chat, vone, niki, bigo).
 */

export type TrackedApp = 'chill_chat' | 'vone' | 'niki' | 'bigo' | 'other' | 'general';

export function normalizeAppParameter(app?: string): TrackedApp {
  if (!app) return 'general';
  const lower = app.toLowerCase();
  if (lower.includes('chill') || lower.includes('chamet')) return 'chill_chat';
  if (lower.includes('vone') || lower.includes('poppo')) return 'vone';
  if (lower.includes('niki')) return 'niki';
  if (lower.includes('bigo')) return 'bigo';
  return 'other';
}

export function trackEvent(eventName: string, params: Record<string, any> = {}) {
  if (typeof window === 'undefined') return;

  try {
    // GA4 gtag
    if (typeof (window as any).gtag === 'function') {
      (window as any).gtag('event', eventName, params);
      console.log(`[GA4 Event] ${eventName}:`, params);
    }

    // GTM dataLayer
    if (Array.isArray((window as any).dataLayer)) {
      (window as any).dataLayer.push({
        event: eventName,
        ...params,
      });
      console.log(`[DataLayer Event] ${eventName}:`, params);
    }
  } catch (err) {
    console.warn('[Analytics] Track event failed:', eventName, err);
  }
}

export function trackHostFormSubmit(data?: Record<string, any>) {
  const appParam = normalizeAppParameter(data?.app || data?.targetApp || data?.platform);
  trackEvent('host_form_submit', {
    app: appParam,
    category: 'Lead Generation',
    label: 'Host Application Submitted',
    ...data,
  });
}

export function trackAgentFormSubmit(data?: Record<string, any>) {
  const appParam = normalizeAppParameter(data?.app || data?.targetApp || data?.platform || 'general');
  trackEvent('agent_form_submit', {
    app: appParam,
    category: 'Lead Generation',
    label: 'Agent Application Submitted',
    ...data,
  });
}

export function trackWhatsAppClick(appOrSource?: string, explicitSource?: string) {
  const appParam = normalizeAppParameter(appOrSource);
  const source = explicitSource || (appOrSource && !['chill_chat', 'vone', 'niki', 'bigo'].includes(appParam) ? appOrSource : 'floating_button');
  trackEvent('whatsapp_click', {
    app: appParam,
    source,
    category: 'Engagement',
    label: `WhatsApp Chat Started (${source} - ${appParam})`,
  });
}

export function trackInviteLinkClick(appName: string = 'vone', targetUrl?: string) {
  const appParam = normalizeAppParameter(appName);
  trackEvent('invite_link_click', {
    app: appParam,
    category: 'Outbound Referral',
    label: `App Partner Link Clicked (${appParam})`,
    target_url: targetUrl || '',
  });
}
