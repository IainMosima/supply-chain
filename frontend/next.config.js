/** @type {import('next').NextConfig} */
const nextConfig = {
    env : {
        BACKENDIP:process.env.BACKENDIP,
        SERVICESBUCKET: process.env.SERVICESBUCKET,
        CAROUSELBUCKET: process.env.CAROUSELBUCKET
    },
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'supply-chain-solutions-hub-limited-services-bucket.s3.amazonaws.com',
            port: '',
            pathname: '/**',
          },
        ],
    },
    // async rewrites() {
    //     return [
    //         {
    //             source: '/services',
    //             destination: 'http://ec2-54-92-246-192.compute-1.amazonaws.com:8080/api/services'
    //         },
    //     ]
    // },
}

module.exports = nextConfig
