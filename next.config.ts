import type { NextConfig } from "next";
import { links } from "./src/lib/site";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/", destination: "/en", permanent: false },
      {
        source: "/documents/CV%20Software%20Engineer%20OCT2027.pdf",
        destination: links.resume,
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
