/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "192.168.1.17",
        port: "4000",
        pathname: "/images/**",
      },
    ],
  },
};

export default nextConfig;
