import type { NextConfig } from "next";

const urlPrefix = process.env.URL_PREFIX ? `/${process.env.URL_PREFIX}` : ``;
const nextConfig: NextConfig = {
  assetPrefix: urlPrefix,
  basePath: urlPrefix,
  output: "export",
  trailingSlash: true,
  reactStrictMode: true,
  images: { unoptimized: true },
};

export default nextConfig;
