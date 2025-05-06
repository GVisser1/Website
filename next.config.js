/** @type {import('next').NextConfig} */
const nextConfig = {
  devIndicators: false,
  images: {
    remotePatterns: [new URL("https://raw.githubusercontent.com/**")],
  },
};

module.exports = nextConfig;
