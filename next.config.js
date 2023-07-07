/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        domains:["tokens.1inch.io","assets.coingecko.com"]
    },
    webpack: config => {
        config.resolve.fallback = { fs: false, net: false, tls: false };
        return config;
      },
}

module.exports = nextConfig
