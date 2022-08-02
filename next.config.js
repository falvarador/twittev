/** @type {import('next').NextConfig} */
const withPreact = require('next-plugin-preact')
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['avatars.githubusercontent.com'],
    formats: ['image/avif', 'image/webp']
  },
  experimental: {
    images: {
      allowFutureImage: true
    }
  }
}

module.exports = withPreact({
  ...nextConfig,
  experimental: { images: { allowFutureImage: true } }
})
