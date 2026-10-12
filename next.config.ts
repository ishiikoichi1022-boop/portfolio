import path from "node:path"
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // npm run buildで、HTML・CSS・JSをoutフォルダに書き出す（Node.jsが動かないエックスサーバーに置くため）
  output: "export",
  // /aboutをabout/index.htmlとして書き出す。Apacheでも/about/で開けるようにするため
  trailingSlash: true,
  images: {
    // 画像の最適化はサーバーが必要なので使わない。画像はpublicに置いたものをそのまま配信する
    unoptimized: true,
  },
  allowedDevOrigins: ["192.168.1.3"],
  sassOptions: {
    loadPaths: [path.join(process.cwd(), "src/styles")]
  },
};

export default nextConfig;