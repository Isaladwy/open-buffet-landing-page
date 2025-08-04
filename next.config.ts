import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export', // Enable static export
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // Custom export path map to exclude dynamic routes
  async exportPathMap() {
    return {
      '/': { page: '/' },
      '/dashboard': { page: '/dashboard' },
      // Exclude dynamic routes like /dashboard/request/[id]
    };
  },
};

export default nextConfig;
