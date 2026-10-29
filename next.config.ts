import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  skipTrailingSlashRedirect: true,
  reactCompiler: true,
  logging: {
    browserToTerminal: "warn",
  },
  devIndicators: false,
  images: {
    unoptimized: process.env.NODE_ENV === "production"
  }
};

export default nextConfig;
