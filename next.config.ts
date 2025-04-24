import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    remotePatterns: [new URL("https://cdn.simpleicons.org/**")],
  },
};

export default nextConfig;
