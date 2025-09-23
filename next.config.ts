import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // output: "export",
  images: {
    unoptimized: true,
    // remotePatterns: [
    //   {
    //     protocol: "https",
    //     hostname: "bponi.sgp1.cdn.digitaloceanspaces.com",
    //     pathname: "/**", // সব path allow করবে
    //   },
    // ],
  },
};

export default nextConfig;
