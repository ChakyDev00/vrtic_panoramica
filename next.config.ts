import type { NextConfig } from "next";

const isProduction = process.env.NODE_ENV === "production";
const basePath = isProduction ? "/vrtic_panoramica" : "";

const nextConfig: NextConfig = {
  output: isProduction ? "export" : undefined,
  basePath,
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  // Partial prerendering requires a server and cannot be statically exported.
  cacheComponents: !isProduction,
  partialPrefetching: !isProduction,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
