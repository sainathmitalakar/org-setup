/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'
const repoName = 'org-setup' // 
MUST MATCH YOUR REPO NAME

const nextConfig = {
  output: 'export',
  trailingSlash: true,

  basePath: isProd ? `/${repoName}` : '',
  assetPrefix: isProd ? `/${repoName}/` : '',

  images: {
    unoptimized: true,
  },

  experimental: {
    mdxRs: false,
  },
}

const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
})

module.exports = withMDX(nextConfig)
