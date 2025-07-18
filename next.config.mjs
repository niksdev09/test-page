/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
        dangerouslyAllowSVG: true,
        unoptimized: true
    },
    eslint: {
        ignoreDuringBuilds: true,
    }
};

export default nextConfig;
