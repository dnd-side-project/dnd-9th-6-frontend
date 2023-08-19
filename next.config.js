/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: config => {
    config.module.rules.push({
      test: /\.svg$/i,
      use: ['@svgr/webpack'],
    });
    return config;
  },
  /* config options here */
  compiler: {
    transpilePackages: ['lodash'],
  },
};

// eslint-disable-next-line no-undef
module.exports = nextConfig;
