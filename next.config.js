/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["localhost", "46.101.147.9", "strapi.falkoproject.com"],
  },
  i18n: {
    locales: ["en", "pl-PL"],
    defaultLocale: "pl-PL",
  },
};

module.exports = nextConfig;
