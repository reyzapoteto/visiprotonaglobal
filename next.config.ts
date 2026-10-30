import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  images: {
    // Temporary: assets are hot-linked from the live site.
    // Remove once files are downloaded to public/images (see lib/assets.ts).
    remotePatterns: [
      {
        protocol: "https",
        hostname: "visiprotonaglobal.com",
        pathname: "/wp-content/uploads/**",
      },
    ],
  },
};

export default nextConfig;
