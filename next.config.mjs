/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'www.plc-sensors.com',
            pathname: '**',
          },
        ],
        // unoptimized: true,
      },
};

export default nextConfig;
