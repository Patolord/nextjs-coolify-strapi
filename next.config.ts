import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "localhost",
        pathname: "/uploads/**/*",
      },
    ],
  },
};

export default nextConfig;
