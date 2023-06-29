import { Token } from '@uniswap/sdk-core'
import { FeeAmount } from '@uniswap/v3-sdk'
import { Token1, Token2 } from '../libs/TokenPoolFactory'

// Inputs that configure this example to run
export interface ExampleConfig {
  rpc: {
    local: string
    mainnet: string
  }
  tokens: {
    in: Token
    amountIn: number
    out: Token
    poolFee: number
  }
}

export interface tokenStructureType{
     in:{
        address: string,
        decimal:number,
        symbol:string,
        name:string
    },
    out:{
        address: string,
        decimal:number,
        symbol:string,
        name:string
    }
}

// Example Configuration

export const CurrentConfig =(Token:tokenStructureType,fee:500 | 3000,amount:number)=> {
const data:ExampleConfig ={
    rpc: {
      local: '',
      mainnet: 'https://mainnet.infura.io/v3/874d9ca546c443be90882161ff27c213',
    },
    tokens: {
      in: Token1(Token.in.address,Token.in.decimal,Token.in.symbol,Token.in.name),
      amountIn: amount,
      out: Token2(Token.out.address,Token.out.decimal,Token.out.symbol,Token.out.name),
      poolFee: fee,
    } 
  
  } 
    return data
}