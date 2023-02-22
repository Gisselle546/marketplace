/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["res.cloudinary.com", "https://api.cloudinary.com"],
  },
  compiler: {
    styledComponents: true,
  },
}

module.exports = nextConfig
