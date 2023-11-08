/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'dnd9th6.s3.ap-northeast-2.amazonaws.com',
      'storage.googleapis.com',
      'cdn.inflearn.com',
      'lh3.googleusercontent.com',
    ],
  },
  webpack: config => {
    config.module.rules.push({
      test: /\.svg$/i,
      use: ['@svgr/webpack'],
    });
    return config;
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/main',
        permanent: true,
      },
    ];
  },
};

// eslint-disable-next-line no-undef
module.exports = nextConfig;
