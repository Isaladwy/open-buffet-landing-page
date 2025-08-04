/** @type {import('next').NextConfig} */
const nextConfig = {
  // no `output` set
  experimental: {
    serverActions: true // optional, only if you use server actions
  }
};

module.exports = nextConfig;
