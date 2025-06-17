/** @type {import('next').NextConfig} */
import autoCert from "anchor-pki/auto-cert/integrations/next";

const withAutoCert = autoCert({
  enabledEnv: "development",
});

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

export default withAutoCert(nextConfig);
