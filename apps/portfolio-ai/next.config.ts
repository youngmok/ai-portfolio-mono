import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  transpilePackages: ["@repo/shared"],
};

export default nextConfig;
