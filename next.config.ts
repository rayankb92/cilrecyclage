import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Metadata blocking for all user agents — ensures title/description
  // are present in <head> at first byte (critical for SEO crawlers).
  htmlLimitedBots: /.*/,
};

export default nextConfig;
