/** @type {import('next').NextConfig} */
const nextConfig = {
  // Only use static export in production builds
  ...(process.env.NODE_ENV === 'production' && { output: 'export' }),
  images: {
    unoptimized: true, // Required for static export
  },
  reactStrictMode: true,
  // Optional: Configure for subdirectory deployment
  // Uncomment and set basePath if deploying to a subdirectory (e.g., GitHub Pages project site)
  // basePath: '/your-repo-name',
  // assetPrefix: '/your-repo-name',
  trailingSlash: true, // Ensures proper routing for static hosting
};

module.exports = nextConfig;
