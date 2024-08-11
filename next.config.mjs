/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode:true,
    basePath:'/telemune',
    assetPrefix: '/telemune/', // Add this line
    trailingSlash: true, // Add this line to ensure trailing slashes in paths
};

export default nextConfig;
