import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // GitHub Pages (Smart-create001.github.io) ต้องเป็น static export
  // รันด้วย EXPORT_STATIC=1 npx next build -> จะออกไปที่ out/
  ...(process.env.EXPORT_STATIC === "1"
    ? {
        output: "export" as const,
        images: { unoptimized: true },
        typescript: { ignoreBuildErrors: true },
        eslint: { ignoreDuringBuilds: true },
      }
    : {}),
};

export default nextConfig;
