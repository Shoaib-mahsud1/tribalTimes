/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ['en', 'ur'],
    defaultLocale: 'en',
    localeDetection: false,
  },
  images: {
    formats: ['image/webp'],
  }
};

module.exports = nextConfig;
