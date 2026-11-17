/**
 * @type {import('next').NextConfig}
 */

const nextConfig = {
  reactStrictMode: true
};

const nextRedirects = {
  async redirects() {
    return [
      {
        source: '/technology-strategy-old',
        destination: '/services/technology-strategy',
        permanent: true
      },
      {
        source: '/data-strategy',
        destination: '/services/data-transformation',
        permanent: true
      },
      {
        source: '/service',
        destination: '/services',
        permanent: true
      },
      {
        source: '/business-strategy',
        destination: '/services',
        permanent: true
      },
      {
        source: '/PrivacyPolicy_Endpoint_IT.pdf',
        destination: '/privacy-policy',
        permanent: true
      },
      {
        source: '/fpc-cyber-security-course',
        destination: '/services/cyber-security',
        permanent: true
      },
      {
        source: '/strategy',
        destination: '/services',
        permanent: true
      },
      {
        source: '/services/business-intelligence',
        destination: '/services',
        permanent: true
      },
      {
        source: '/services/software-development',
        destination: '/services',
        permanent: true
      }
    ];
  }
};

module.exports = {
  ...nextConfig,
  ...nextRedirects,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.endpoint-tech.co.uk'
      }
    ]
  }
};
