import bnb from "cryptocurrency-icons/128/color/bnb.png";
import inch from "cryptocurrency-icons/128/color/1inch.png";
import yfi from "cryptocurrency-icons/128/color/yfi.png";

import { StaticImageData } from "next/image";

interface Token {
  logoURI: string | StaticImageData;
  address: string;
  decimals: number | null;
  symbol: string;
}
interface TokenProp {
  [key: string]: Token;
}

export const ERC20Tokens: TokenProp = {
  "": {
    logoURI: "",
    address: "",
    symbol: "ETH",
    decimals: null,
  },


  "Tether USD": {
    logoURI:
      "https://tokens.1inch.io/0xdac17f958d2ee523a2206206994597c13d831ec7.png",
    address: "0xdac17f958d2ee523a2206206994597c13d831ec7",
    decimals: 6,
    symbol: "USDT",
  },
  "Binance USD": {
    logoURI: bnb,
    symbol: "BUSD",
    address: "0x4Fabb145d64652a948d72533023f6E7A623C7C53",
    decimals: 18,
  },

  "Matic Token": {
    decimals: 18,
    symbol: "MATIC",

    address: "0x7d1afa7b718fb893db30a3abc0cfc608aacfebb0",
    logoURI:
      "https://tokens.1inch.io/0x7d1afa7b718fb893db30a3abc0cfc608aacfebb0.png",
  },

  "USD Coin": {
    address: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
    decimals: 6,
    symbol: "USDC",

    logoURI:
      "https://tokens.1inch.io/0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48.png",
  },

  Chainlink: {
    address: "0x514910771af9ca656af840dff83e8264ecf986ca",
    decimals: 18,
    symbol: "LINK",

    logoURI:
      "https://tokens.1inch.io/0x514910771af9ca656af840dff83e8264ecf986ca.png",
  },
  Uniswap: {
    decimals: 18,
    symbol: "UNI",

    address: "0x1f9840a85d5af5bf1d1762f925bdaddc4201f984",
    logoURI:
      "https://tokens.1inch.io/0x1f9840a85d5af5bf1d1762f925bdaddc4201f984.png",
  },

  Balancer: {
    decimals: 18,
    symbol: "BAL",
    address: "0xba100000625a3754423978a60c9317c58a424e3D",
    logoURI:
      "https://tokens.1inch.io/0xba100000625a3754423978a60c9317c58a424e3d.png",
  },
  "Ape Coin": {
    decimals: 18,
    symbol: "APE",
    address: "0x4d224452801aced8b2f0aebe155379bb5d594381",
    logoURI:
      "https://tokens.1inch.io/0x4d224452801aced8b2f0aebe155379bb5d594381.png",
  },
  Decentraland: {
    address: "0x0f5d2fb29fb7d3cfee444a200298f468908cc942",
    decimals: 18,
    symbol: "MANA",
    logoURI:
      "https://tokens.1inch.io/0x0f5d2fb29fb7d3cfee444a200298f468908cc942.png",
  },
  "Fantom Token": {
    decimals: 18,
    symbol: "FTM",

    address: "0x4e15361fd6b4bb609fa63c81a2be19d873717870",
    logoURI:
      "https://tokens.1inch.io/0x4e15361fd6b4bb609fa63c81a2be19d873717870.png",
  },
  "Shiba Inu": {
    decimals: 18,
    symbol: "SHIB",

    address: "0x95ad61b0a150d79219dcf64e1e6cc01f0b64c4ce",
    logoURI:
      "https://tokens.1inch.io/0x95ad61b0a150d79219dcf64e1e6cc01f0b64c4ce.png",
  },
  "Wrapped Bitcoin": {
    address: "0x2260fac5e5542a773aa44fbcfedf7c193bc2c599",
    decimals: 8,
    symbol: "WBTC",

    logoURI:
      "https://tokens.1inch.io/0x2260fac5e5542a773aa44fbcfedf7c193bc2c599.png",
  },
  "Dai Stablecoin": {
    decimals: 18,
    symbol: "DAI",

    address: "0x6b175474e89094c44da98b954eedeac495271d0f",
    logoURI:
      "https://tokens.1inch.io/0x6b175474e89094c44da98b954eedeac495271d0f.png",
  },
  "1INCH Token": {
    decimals: 18,
    symbol: "1INCH",
    address: "0x111111111117dC0aa78b770fA6A738034120C302",
    logoURI: inch,
  },
  "Basic Attention Token": {
    symbol: "BAT",
    address: "0x8e870d67f660d95d5be530380d0ec0bd388289e1",
    decimals: 18,
    logoURI:
      "https://tokens.1inch.io/0x0d8775f648430679a709e98d2b0cb6250d2887ef.png",
  },
  Gnosis: {
    decimals: 18,
    symbol: "GNO",
    address: "0x6810e776880C02933D47DB1b9fc05908e5386b96",
    logoURI:"https://tokens.1inch.io/0x6810e776880c02933d47db1b9fc05908e5386b96.png",
  },
  Maker: {
    address: "0x9f8f72aa9304c8b593d555f12ef6589cc3a579a2",
    decimals: 18,
    symbol: "MKR",
    logoURI:
      "https://tokens.1inch.io/0x9f8f72aa9304c8b593d555f12ef6589cc3a579a2.png",
  },
  dYdX: {
    symbol: "DYDX",

    decimals: 18,
    address: "0x92D6C1e31e14520e676a687F0a93788B716BEff5",
    logoURI:
      "https://assets.coingecko.com/coins/images/17500/large/hjnIm9bV.jpg?1628009360",
  },
  BitDAO: {
    decimals: 18,
    symbol: "BIT",
    address: "0x1A4b46696b2bB4794Eb3D4c26f1c55F9170fa4C5",
    logoURI:
      "https://tokens.1inch.io/0x1a4b46696b2bb4794eb3d4c26f1c55f9170fa4c5.png",
  },
  Quant: {
    decimals: 18,
    symbol: "QNT",
    address: "0x4a220e6096b25eadb88358cb44068a3248254675",
    logoURI:
      "https://tokens.1inch.io/0x4a220e6096b25eadb88358cb44068a3248254675.png",
  },
};
