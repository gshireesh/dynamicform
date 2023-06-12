/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'


const nextConfig = {
  output: 'export',
  distDir: 'docs',
  basePath: '/sgadidesi/dynamicform',
  trailingSlash: true,
  assetPrefix: isProd ? 'http://training.pacificescience.com/sgadidesi/dynamicform/' : undefined,
}

module.exports = nextConfig
