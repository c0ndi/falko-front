/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["localhost", "46.101.147.9", "strapi.falkoproject.com"],
  },
  i18n: {
    locales: ["en", "pl"],
    defaultLocale: "pl",
  },
};

module.exports = nextConfig;
