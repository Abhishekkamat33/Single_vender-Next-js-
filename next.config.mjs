/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'res.cloudinary.com',
      'images.pexels.com',  // Pexels domain
      'images.unsplash.com',  // Unsplash domain
    ],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
      },
      {
        protocol: 'https',
        hostname: 'images.pexels.com',  // Pexels remote pattern
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',  // Unsplash remote pattern
      },
    ],
  },
};

export default nextConfig;
