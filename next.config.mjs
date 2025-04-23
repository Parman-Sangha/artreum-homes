/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["artreumhomes.com"],
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  experimental: {
    optimizeCss: true,
  },
  // Enable static exports for better SEO
  output: "standalone",
  // Enable compression for better performance
  compress: true,
};

export default nextConfig;
