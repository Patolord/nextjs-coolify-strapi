import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "strapi.rodrigoluiz.xyz",
        pathname: "/uploads/**",
      },
    ],
  },
};

export default nextConfig;
