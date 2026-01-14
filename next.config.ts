import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  // domains: ["images.unsplash.com"],
  images: {
    remotePatterns:[
      {
        protocol: "https",
        hostname: "**"
      }
    ],
  },
};

export default nextConfig;
