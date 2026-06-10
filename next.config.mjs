/** @type {import('next').NextConfig} */
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

const config = () => {
  /** @type {import('next').NextConfig} */
  const config = {
    redirects: async () => {
      return [
        {
          source: "/",
          destination: "/guide",
          permanent: true,
        },
      ];
    },
    rewrites: async () => {
      return [
        {
          source: "/proxy/assets/:path*",
          destination: "https://api.miex.one/api/v1/public/:path*",
        },
        {
          source: "/proxy/swap/:path*",
          destination: "https://devgateway.miex.one/api/swap/public/:path*",
        },
      ];
    },
    env: {},
    reactStrictMode: false,
    images: {
      unoptimized: true,
    },
  };

  return withNextIntl(config);
};

export default config;
