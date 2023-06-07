/** @type {import('next').NextConfig} */
const nextConfig = {
    env : {
        BACKENDIP:process.env.BACKENDIP
    }
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
