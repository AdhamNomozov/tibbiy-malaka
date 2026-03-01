import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Output standalone for Docker/VPS deployment
  output: 'standalone',
  
  // Image optimization
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ui-avatars.com',
        pathname: '/api/**',
      },
    ],
    formats: ['image/avif', 'image/webp'],
  },
  
  // Compression
  compress: true,
  
  // Production optimizations
  reactStrictMode: true,
},

export default nextConfig;
