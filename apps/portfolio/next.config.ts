import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/ai-portfolio",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  transpilePackages: ["@repo/shared"],
};

export default nextConfig;
