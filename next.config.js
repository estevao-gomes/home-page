/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    images: {
      allowFutureImage: true,
    },
  },
  images: {
    dangerouslyAllowSVG: true,
    domains: ["i.imgur.com"],
  },
};

module.exports = nextConfig;
