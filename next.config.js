/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        domains:["tokens.1inch.io","assets.coingecko.com"]
    },
    async headers() {
        return [
          {
            source: '/app',
            headers: [
              {
                key: 'Access-Control-Allow-Origin',
                value:'*',
              },
              {
                key: "Access-Control-Allow-Headers",
                value: '*',
              }, {
                key: "Access-Control-Allow-Methods",
                value: '*',
              },
            ],
          },
        ]
      },
    webpack: config => {
        config.resolve.fallback = { fs: false, net: false, tls: false };
        return config;
      },
}

module.exports = nextConfig
