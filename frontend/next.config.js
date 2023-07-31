/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    BACKENDIP: process.env.BACKENDIP,
    SERVICESBUCKET: process.env.SERVICESBUCKET,
    CAROUSELBUCKET: process.env.CAROUSELBUCKET,
    ENVIRONMENT: process.env.ENVIRONMENT,
    DEFAULT_COUNTRY: process.env.DEFAULT_COUNTRY
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname:
          "supply-chain-solutions-hub-limited-services-bucket.s3.amazonaws.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "supply-chain-solutions-hub-limited-carousel-bucket.s3.amazonaws.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'http://ec2-54-92-246-192.compute-1.amazonaws.com:8080/api/:path*'
      },
    ];
  },
};

module.exports = nextConfig;