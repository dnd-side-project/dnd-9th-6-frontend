/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  compiler: {
    styledComponents: true,
    transpilePackages: ['lodash'],
  },
};

// eslint-disable-next-line no-undef
module.exports = nextConfig;
