/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
   images: {
      domains: ['localhost', "46.101.147.9", "strapi.falkoproject.com"],
   }
}

module.exports = nextConfig