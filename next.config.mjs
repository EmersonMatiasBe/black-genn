/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    minimumCacheTTL: 31536000,
  },
  eslint: {
    ignoreDuringBuilds: true
  }
};

export default nextConfig;
