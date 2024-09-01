/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config) => {
        config.resolve.alias.canvas = false;

        return config;
    },
    output: 'export',
    images: {
        loader: 'custom',
        loaderFile: './loaders/loader.js',
    },
};

module.exports = nextConfig;
