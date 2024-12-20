/** @type {import('next').NextConfig} */
const nextConfig = {
    serverExternalPackages: ["mongoose"],
  images: {
    domains: ['lh3.googleusercontent.com', "images.unsplash.com", "ui.sharepoint.com", "www.google.com", "www.svlele.com"],
  },
  webpack(config) {
    config.experiments = {
      ...config.experiments,
      topLevelAwait: true,
    }
    return config
  }
}

module.exports = nextConfig