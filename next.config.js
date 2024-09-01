/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config) => {
        config.resolve.alias.canvas = false;

        return config;
    },
    output: 'export',
    images: {
        unoptimized: true,
      },
};

module.exports = nextConfig;
