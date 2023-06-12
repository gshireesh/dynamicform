/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'


const nextConfig = {
  output: 'export',
  distDir: 'docs',
  assetPrefix: isProd ? 'https://gshireesh.github.io/dynamicform/' : undefined,
}

module.exports = nextConfig
