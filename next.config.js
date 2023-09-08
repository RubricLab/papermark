/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "darr6llpvnyot.cloudfront.net",
      "lh3.googleusercontent.com",
      "dev-to-uploads.s3.amazonaws.com",
    ],
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/login',
        permanent: false,
      },
    ]
  },
};

module.exports = nextConfig
