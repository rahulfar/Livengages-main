'use client';

/**
 * GA4 and GTM conversion event tracking
 * Item 31: host_form_submit, agent_form_submit, whatsapp_click, invite_link_click
 */
export function trackEvent(eventName: string, params: Record<string, any> = {}) {
  if (typeof window === 'undefined') return;

  try {
    // GA4 gtag
    if (typeof (window as any).gtag === 'function') {
      (window as any).gtag('event', eventName, params);
    }

    // GTM dataLayer
    if (Array.isArray((window as any).dataLayer)) {
      (window as any).dataLayer.push({
        event: eventName,
        ...params,
      });
    }
  } catch (err) {
    console.warn('[Analytics] Track event failed:', eventName, err);
  }
}

export function trackHostFormSubmit(data?: Record<string, any>) {
  trackEvent('host_form_submit', {
    category: 'Lead Generation',
    label: 'Host Application Submitted',
    ...data,
  });
}

export function trackAgentFormSubmit(data?: Record<string, any>) {
  trackEvent('agent_form_submit', {
    category: 'Lead Generation',
    label: 'Agent Application Submitted',
    ...data,
  });
}

export function trackWhatsAppClick(source: string = 'unknown') {
  trackEvent('whatsapp_click', {
    category: 'Engagement',
    label: `WhatsApp Chat Started (${source})`,
    source,
  });
}

export function trackInviteLinkClick(appName: string, targetUrl?: string) {
  trackEvent('invite_link_click', {
    category: 'Outbound Referral',
    label: `App Partner Link Clicked (${appName})`,
    app_name: appName,
    target_url: targetUrl,
  });
}
