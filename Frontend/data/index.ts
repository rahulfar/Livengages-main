import { HOME_PAGE_DATA } from './home';
import { ABOUT_US_PAGE_DATA } from './about-us';
import { FALLBACK_PARTNER_APPS } from './partner-apps';

// Import all dummy data from constants
import * as AboutData from '../constants/about';
import * as ServicesData from '../constants/services';
import * as JoinUsData from '../constants/join-us';
import * as HostData from '../constants/become-a-host';
import * as AgentData from '../constants/agent-ecosystem';
import * as ContactData from '../constants/contact';
import * as BecomeAnAgentData from '../constants/become-an-agent';

export function getDummyDataForPath(path: string) {
  if (path.includes('/api/home-page')) {
    return { data: HOME_PAGE_DATA };
  }
  
  if (path.includes('/api/about-us-page')) {
    return { 
      data: {
        Hero: ABOUT_US_PAGE_DATA.hero || AboutData.ABOUT_HERO,
        MissionVision: ABOUT_US_PAGE_DATA.missionVision || AboutData.MISSION_VISION,
        CoreValues: { items: ABOUT_US_PAGE_DATA.coreValues.items || AboutData.CORE_VALUES },
        Timeline: { items: ABOUT_US_PAGE_DATA.timeline.items || AboutData.TIMELINE_MILESTONES },
        Leadership: { members: ABOUT_US_PAGE_DATA.leadership.members || AboutData.LEADERSHIP_TEAM },
        CTA: ABOUT_US_PAGE_DATA.cta || AboutData.ABOUT_CTA
      }
    };
  }

  if (path.includes('/api/services-page')) {
    return {
      data: {
        Hero: ServicesData.SERVICES_HERO,
        ServicesList: { items: ServicesData.SERVICES_LIST },
        PartnerApps: ServicesData.PARTNER_APPS_SECTION,
        Stats: { stats: ServicesData.SERVICES_STATS },
        CTA: ServicesData.SERVICES_CTA
      }
    };
  }

  if (path.includes('/api/become-a-host-page')) {
    return {
      data: {
        Hero: HostData.HOST_HERO,
        Stats: { stats: HostData.HOST_STATS },
        Requirements: { items: HostData.HOST_REQUIREMENTS },
        Benefits: { items: HostData.HOST_BENEFITS },
        ApplicationSection: HostData.HOST_APPLICATION_DATA
      }
    };
  }

  if (path.includes('/api/become-an-agent-page')) {
    return {
      data: {
        Hero: BecomeAnAgentData.BECOME_AN_AGENT_HERO,
        ResponsibilitiesSection: BecomeAnAgentData.BECOME_AN_AGENT_RESPONSIBILITIES,
        revenueModelSection: BecomeAnAgentData.BECOME_AN_AGENT_REVENUE_MODEL,
        ApplicationSection: BecomeAnAgentData.BECOME_AN_AGENT_APPLICATION
      }
    };
  }

  if (path.includes('/api/partner-apps')) {
    return {
      data: Object.values(FALLBACK_PARTNER_APPS)
    };
  }

  if (path.includes('/api/join-us-page')) {
    return {
      data: {
        hero: JoinUsData.JOIN_HERO,
        roleCards: { items: JoinUsData.JOIN_ROLE_CARDS },
        benefits: JoinUsData.JOIN_BENEFITS,
        stats: { stats: JoinUsData.JOIN_STATS }
      }
    };
  }

  if (path.includes('/api/contact-us-page')) {
    return {
      data: {
        Hero: ContactData.CONTACT_HERO,
        ContactChannels: { items: ContactData.CONTACT_CHANNELS },
        OperationalNetworks: { networks: ContactData.OPERATIONAL_NETWORKS },
        GlobalMap: ContactData.GLOBAL_MAP_DATA
      }
    };
  }

  return null;
}
