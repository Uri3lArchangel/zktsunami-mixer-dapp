import { ethers } from 'ethers'

// Provider Functions

export function getProvider(): ethers.Provider {
  return new ethers.JsonRpcProvider("https://mainnet.infura.io/v3/874d9ca546c443be90882161ff27c213")
}