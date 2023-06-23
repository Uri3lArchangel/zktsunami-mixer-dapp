interface Token {
  logoURI: string;
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
    decimals: null,
    symbol: "",
  },

  Ethereum: {
    logoURI:
      "https://tokens.1inch.io/0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee.png",
    address: "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
    symbol: "eth-anon",
    decimals: 18,
  },
   ChainLink: {
    logoURI:
      "https://tokens.1inch.io/0x514910771af9ca656af840dff83e8264ecf986ca.png",
    address: "0x779877A7B0D9E8603169DdbD7836e478b4624789",
    symbol: "link-anon",
    decimals: 18,
  },


};
