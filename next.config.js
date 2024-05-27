/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: ["lh3.googleusercontent.com", "res.cloudinary.com"],
    },
    eslint: {
      ignoreDuringBuilds: false,
    },
  };
  
  module.exports = nextConfig;