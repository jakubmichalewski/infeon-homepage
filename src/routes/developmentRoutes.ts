import { webDevelopmentRoutes } from '@routes/webDevelopmentRoutes';

export const developmentRoutes = {
  minimumViableProduct: {
    root: {
      href: '/services/minimum-viable-product',
      title: 'Minimum Viable Product',
      description:
        'Swiftly developing secure Minimum Viable Product (MVP) applications to assist you in validating your concept and pinpointing early enhancements, accelerating your path to market success.',
      image: '/images/hero/minimum-viable-product-hero.jpg',
      icon: 'minimum-viable-product'
    }
  },
  webDevelopment: {
    root: {
      href: '/services/web-development',
      title: 'Web Development',
      description:
        'Offering tailored web design and development services, catering to a variety of application types and designed to meet the diverse needs of all industries and businesses.',
      image: '/images/hero/web-development-hero.jpg',
      icon: 'web-development'
    },
    ...webDevelopmentRoutes
  },
  mobileDevelopment: {
    root: {
      href: '/services/mobile-development',
      title: 'Mobile Development',
      description:
        'Comprehensive mobile app development services covering every stage from concept to maintenance, tailored for all platforms to align with and achieve your business objectives.',
      image: '/images/hero/mobile-development-hero.jpg',
      icon: 'mobile-development'
    }
  },
  lowCodeDevelopment: {
    root: {
      href: '/services/low-code-development',
      title: 'Low-Code Development',
      description:
        'Fast-paced application development services designed to provide bespoke software solutions, efficiently meeting your specific requirements.',
      image: '/images/hero/low-code-development-hero.jpg',
      icon: 'low-code-development'
    }
  },
  databaseDevelopment: {
    root: {
      href: '/services/database-development',
      title: 'Database Development',
      description: `Database development services dedicated to constructing new information infrastructure for your company or enhancing and maintaining your current systems.`,
      image: '/images/hero/database-development-hero.jpg',
      icon: 'database-development'
    }
  }
};
