import { auditsAndAssessmentsRoutes } from '@routes/auditsAndAssessmentsRoutes';
import { businessIntelligenceRoutes } from '@routes/businessIntelligenceRoutes';
import { cloudRoutes } from '@routes/cloudRoutes';
import { designRoutes } from '@routes/designRoutes';
import { developmentRoutes } from '@routes/developmentRoutes';
import { strategicConsultancyRoutes } from '@routes/strategicConsultancyRoutes';

export const servicesRoutes = {
  strategicConsultancy: {
    root: {
      href: '/services',
      title: 'Strategic Consultancy',
      image: '/images/banner/strategic-consultancy-banner.jpg'
    },
    ...strategicConsultancyRoutes
  },
  auditsAndAssessments: {
    root: {
      href: '/services',
      title: 'Audits & Assessments',
      image: '/images/banner/audits-and-assessment-services-banner.jpg'
    },
    ...auditsAndAssessmentsRoutes
  },
  design: {
    root: {
      href: '/services',
      title: 'Design',
      image: '/images/banner/design-services-banner.jpg'
    },
    ...designRoutes
  },
  development: {
    root: {
      href: '/services',
      title: 'Development',
      image: '/images/banner/software-development-banner.jpg'
    },
    ...developmentRoutes
  },
  businessIntelligence: {
    root: {
      href: '/services',
      title: 'Business Intelligence',
      image: '/images/banner/business-intelligence-banner.jpg'
    },
    ...businessIntelligenceRoutes
  },
  cloud: {
    root: {
      href: '/services',
      title: 'Cloud',
      image: '/images/banner/cloud-services-banner.jpg'
    },
    ...cloudRoutes
  }
};
