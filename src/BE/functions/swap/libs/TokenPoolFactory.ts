
import {Token,SUPPORTED_CHAINS} from '@uniswap/sdk-core'

export const POOL_FACTORY_CONTRACT_ADDRESS = '0x1F98431c8aD98523631AE4a59f267346ea31F984'

export const QUOTER_CONTRACT_ADDRESS = '0xb27308f9F90D607463bb33eA1BeBb41C27CE5AB6'


export const Token1=(addr:string,decimal:number,symbol:string,name:string)=>{

    return new Token(
        SUPPORTED_CHAINS[0],
        addr,
        decimal,
        symbol,
        name
    )
}
export const Token2=(addr:string,decimal:number,symbol:string,name:string)=>{

    return new Token(
        SUPPORTED_CHAINS[0],
        addr,
        decimal,
        symbol,
        name
    )
}