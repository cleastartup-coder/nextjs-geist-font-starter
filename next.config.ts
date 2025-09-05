import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
        pathname: '/photos/**',
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: '/',
        destination: '/dashboard.html',
      },
    ]
  },
}

export default nextConfig
