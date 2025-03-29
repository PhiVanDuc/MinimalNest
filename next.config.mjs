/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'fakestoreapi.com',
                port: '',
                pathname: '/img/**',
            },
            {
                protocol: 'https',
                hostname: 'fastly.picsum.photos',
                port: '',
                pathname: '/id/**',
            },
        ]
    }
};

export default nextConfig;
