/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    loader: "default",
    disableStaticImages: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "premium.indusre.com",
      },
    ],
    // deviceSizes: [320, 420, 768, 1024, 1200],
    minimumCacheTTL: 0,
    // unoptimized: true,
  },
};

module.exports = nextConfig;
