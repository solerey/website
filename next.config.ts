import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true, // For static export; use next/image loader on Vercel
  },
  trailingSlash: false,
};

export default nextConfig;
