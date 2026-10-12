import path from "node:path"
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["192.168.1.3"],
  sassOptions: {
    loadPaths: [path.join(process.cwd(), "src/styles")]
  },
};

export default nextConfig;