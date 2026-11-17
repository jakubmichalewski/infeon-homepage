import { caseStudyRoutes } from '@routes/caseStudyRoutes';
import { externalRoutes } from '@routes/externalRoutes';
import { servicesRoutes } from '@routes/servicesRoutes';

export const routes = {
  home: {
    root: {
      href: '/',
      title: 'IT Services',
      description:
        'Grow your business with Infeon Tech, a Poland-based company specialising in data, automation, and technology consulting.',
      image: '/images/hero/home-hero.jpg'
    }
  },
  services: {
    root: {
      href: '/services',
      title: 'Services',
      description:
        'Align technology to your strategy, improve operations, improve customer service, and reduce cost and risk',
      image: '/images/hero/services-hero.jpg'
    },
    ...servicesRoutes
  },
  caseStudies: {
    root: {
      href: '/case-studies',
      title: 'Case Studies',
      description:
        'Learn how other clients have benefited from our expertise and approach'
    },
    ...caseStudyRoutes
  },
  aboutUs: {
    root: {
      href: '/about-us',
      title: 'About Us',
      description: 'Learn more about Infeon Tech, a technology company based in Poland.',
      image: '/images/hero/about-us-hero.jpg'
    }
  },
  contact: {
    root: {
      href: '/contact',
      title: 'Contact Us',
      description:
        'Whenever you have a question about our services, need a consultancy, ideas or anything else, we are ready to help you.'
    }
  },
  ourTeam: {
    root: {
      href: '/our-team',
      title: 'Our Team',
      description: 'Meet the Infeon Tech team.'
    }
  },
  thankYou: {
    root: {
      href: '/thank-you',
      title: 'Thank you',
      description: 'Thank you for contacting Infeon Tech'
    }
  },
  termsOfUse: {
    root: {
      href: '/terms-and-conditions',
      title: 'Terms and conditions'
    }
  },
  privacyPolicy: {
    root: {
      href: '/privacy-policy',
      title: 'Privacy policy'
    }
  },
  daxFormatter: {
    root: {
      href: '/dax-formatter',
      title: 'Dax Formatter',
      description: 'Format your DAX code using our simple tool.'
    }
  },

  secretShare: {
    root: {
      href: '/secret-share',
      title: 'Secret Share',
      description: 'Securely share passwords or other text messages.'
    }
  },
  external: {
    ...externalRoutes
  }
};
