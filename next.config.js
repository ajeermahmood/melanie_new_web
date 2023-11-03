/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: ["premium.indusre.com"],
      minimumCacheTTL: 1500000,
    },
  };
  
  module.exports = nextConfig;
  