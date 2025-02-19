import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", 
  images: { unoptimized: true }, 
  trailingSlash: true, 
  assetPrefix:"/assets",
};

export default nextConfig;
