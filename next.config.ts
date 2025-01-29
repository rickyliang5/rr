/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Enables static export
  basePath: '/rr', // Required for GitHub Pages
  images: {
    unoptimized: true, // Disable Next.js image optimization for static export
  },
};

module.exports = nextConfig;
