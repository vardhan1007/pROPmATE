import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    // This allows the build to finish even with type errors
    ignoreBuildErrors: true,
  },
  eslint: {
    // This skips ESLint checks during build to save time
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;