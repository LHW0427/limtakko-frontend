import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  output: "export",  // ← 정적 HTML export 활성화
};

export default nextConfig;
