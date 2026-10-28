import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  logging: {
    browserToTerminal: "warn",
  },
  devIndicators: false,
};

export default nextConfig;
