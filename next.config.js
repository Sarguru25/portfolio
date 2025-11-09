/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false, // Keep this as false to avoid double-rendering in development
  // Remove experimental turbopack config to avoid warnings
};

module.exports = nextConfig;
