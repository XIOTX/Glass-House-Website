/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  images: {
    domains: [
      'i.imgur.com',
      'ext.same-assets.com',
      'www.viima.com',
      'glasshouserecovery.com'
    ],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.imgur.com',
      },
      {
        protocol: 'https',
        hostname: 'ext.same-assets.com',
      },
      {
        protocol: 'https',
        hostname: 'www.viima.com',
      },
      {
        protocol: 'https',
        hostname: 'glasshouserecovery.com',
      }
    ]
  }
}

module.exports = nextConfig
