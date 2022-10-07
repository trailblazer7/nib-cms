/** @type {import('next').NextConfig} */
const nextConfig = {
  serverRuntimeConfig: {
    secret: 'THIS SECRET USED TO SIGN AND VERIFY JWT TOKEN.'
  },
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig
