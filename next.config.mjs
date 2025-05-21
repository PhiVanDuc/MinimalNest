/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'cdn.dummyjson.com',
                port: '',
                pathname: '/products/**',
            },
            {
                protocol: 'https',
                hostname: 'fastly.picsum.photos',
                port: '',
                pathname: '/id/**',
            },
            {
                protocol: 'https',
                hostname: 'res.cloudinary.com',
                port: '',
                pathname: '/**',
            },
        ]
    }
};

export default nextConfig;
