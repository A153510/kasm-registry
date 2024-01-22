/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'John\'s Test Registry',
    description: 'Test registry for creating new workspaces.',
    icon: '/img/logo.svg',
    listUrl: 'https://a153510.github.io/kasm-registry/',
    contactUrl: 'https://github.com/A153510/kasm-registry/issues',
  },
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/kasm-registry/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
