import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export', // Enable static export
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
