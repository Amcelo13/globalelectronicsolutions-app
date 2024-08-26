/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'plc-sensors.com',
            pathname: '**',
          },
        ],
        unoptimized: true,
      },
};

export default nextConfig;
