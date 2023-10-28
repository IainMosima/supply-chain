/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    BACKENDIP: process.env.BACKENDIP,
    SERVICESBUCKET: process.env.SERVICESBUCKET,
    CAROUSELBUCKET: process.env.CAROUSELBUCKET,
    COUNTRIESBUCKET: process.env.COUNTRIESBUCKET,
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
      {
        protocol: "https",
        hostname: "supply-chain-solutions-hub-limited-country-bucket.s3.amazonaws.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'http://ec2-35-171-84-134.compute-1.amazonaws.com:8080/api/:path*'
      },
    ];
  },
};

module.exports = nextConfig;