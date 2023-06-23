
interface Token{
    logoURI:string,
    address: string,
    decimals: number | null,
}
interface TokenProp{
[key:string]:Token
}

export const ERC20Tokens:TokenProp = {
  "": {
    logoURI: "",
    address: "",
    decimals: null,
  },

  "Ethereum": {
    logoURI:
      "https://tokens.1inch.io/0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee.png",
    address: "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
    decimals: 18,
  },

  "Tether USD": {
    logoURI:
      "https://tokens.1inch.io/0xdac17f958d2ee523a2206206994597c13d831ec7.png",
    address: "0xdac17f958d2ee523a2206206994597c13d831ec7",
    decimals: 6,
  },

  "Matic": {
    decimals: 18,
    address: "0x7d1afa7b718fb893db30a3abc0cfc608aacfebb0",
    logoURI:
      "https://tokens.1inch.io/0x7d1afa7b718fb893db30a3abc0cfc608aacfebb0.png",
  },

  "USD Coin": {
    address: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
    decimals: 6,
    logoURI:
      "https://tokens.1inch.io/0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48.png",
  },

  Chainlink: {
    address: "0x514910771af9ca656af840dff83e8264ecf986ca",
    decimals: 18,
    logoURI:
      "https://tokens.1inch.io/0x514910771af9ca656af840dff83e8264ecf986ca.png",
  },
  Uniswap: {
    decimals: 18,
    address: "0x1f9840a85d5af5bf1d1762f925bdaddc4201f984",
    logoURI:
      "https://tokens.1inch.io/0x1f9840a85d5af5bf1d1762f925bdaddc4201f984.png",
  },

  Sand: {
    decimals: 18,
    address: "0x3845badade8e6dff049820680d1f14bd3903a5d0",
    logoURI:
      "https://tokens.1inch.io/0x3845badade8e6dff049820680d1f14bd3903a5d0.png",
  },
  "Ape Coin": {
    decimals: 18,
    address: "0x4d224452801aced8b2f0aebe155379bb5d594381",
    logoURI:
      "https://tokens.1inch.io/0x4d224452801aced8b2f0aebe155379bb5d594381.png",
  },
  "MANA": {
    address: "0x0f5d2fb29fb7d3cfee444a200298f468908cc942",
    decimals: 18,
    logoURI:
      "https://tokens.1inch.io/0x0f5d2fb29fb7d3cfee444a200298f468908cc942.png",
  },
  "Fantom Token": {
    decimals: 18,
    address: "0x4e15361fd6b4bb609fa63c81a2be19d873717870",
    logoURI:
      "https://tokens.1inch.io/0x4e15361fd6b4bb609fa63c81a2be19d873717870.png",
  },
  "Shiba Inu": {
    decimals: 18,
    address: "0x95ad61b0a150d79219dcf64e1e6cc01f0b64c4ce",
    logoURI:
      "https://tokens.1inch.io/0x95ad61b0a150d79219dcf64e1e6cc01f0b64c4ce.png",
  },
  "Wrapped Bitcoin": {
    address: "0x2260fac5e5542a773aa44fbcfedf7c193bc2c599",
    decimals: 8,
    logoURI:
      "https://tokens.1inch.io/0x2260fac5e5542a773aa44fbcfedf7c193bc2c599.png",
  },
  "Dai Stablecoin": {
    decimals: 18,
    address: "0x6b175474e89094c44da98b954eedeac495271d0f",
    logoURI:
      "https://tokens.1inch.io/0x6b175474e89094c44da98b954eedeac495271d0f.png",
  },
  "Cronos Coin": {
    decimals: 8,
    address: "0xa0b73e1ff0b80914ab6fe0444e65848c4c34450b",
    logoURI:
      "https://tokens.1inch.io/0xa0b73e1ff0b80914ab6fe0444e65848c4c34450b.png",
  },
  "Pax Dollar": {
    address: "0x8e870d67f660d95d5be530380d0ec0bd388289e1",
    decimals: 18,
    logoURI:
      "https://tokens.1inch.io/0x8e870d67f660d95d5be530380d0ec0bd388289e1_1.png",
  },
  "Aave": {
    decimals: 18,
    address: "0xba3d9687cf50fe253cd2e1cfeede1d6787344ed5",
    logoURI:
      "https://tokens.1inch.io/0xba3d9687cf50fe253cd2e1cfeede1d6787344ed5.png",
  },
  "Maker": {
    address: "0x9f8f72aa9304c8b593d555f12ef6589cc3a579a2",
    decimals: 18,
    logoURI:
      "https://tokens.1inch.io/0x9f8f72aa9304c8b593d555f12ef6589cc3a579a2.png",
  },
  "sETH": {
    decimals: 18,
    address: "0xae7ab96520de3a18e5e111b5eaab095312d7fe84",
    logoURI:
      "https://tokens.1inch.io/0xae7ab96520de3a18e5e111b5eaab095312d7fe84.png",
  },
};