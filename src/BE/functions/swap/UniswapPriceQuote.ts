import {computePoolAddress} from '@uniswap/v3-sdk'
import Quoter from '@uniswap/v3-periphery/artifacts/contracts/lens/Quoter.sol/Quoter.json'
import { ethers } from 'ethers'
import { POOL_FACTORY_CONTRACT_ADDRESS, QUOTER_CONTRACT_ADDRESS } from './libs/TokenPoolFactory'
import { getProvider } from './libs/providers'
import { CurrentConfig, tokenStructureType } from './config/config'
import IUniswapV3PoolABI from '@uniswap/v3-core/artifacts/contracts/interfaces/IUniswapV3Pool.sol/IUniswapV3Pool.json'
import { fromReadableAmount, toReadableAmount } from './libs/conversion'


export const getSwapQuote=async(T:tokenStructureType,Fee:500|3000,amount:number)=>{
    const quoterContract = new ethers.Contract(
        QUOTER_CONTRACT_ADDRESS,
        Quoter.abi,
        getProvider()
    )
    const poolData = await getPoolData(T,Fee,amount)

    const quotedAmountOut = await quoterContract.quoteExactInputSingle.staticCall(
        poolData.token0,
        poolData.token1,
        poolData.fee,
        fromReadableAmount(
            CurrentConfig(T,Fee,amount).tokens.amountIn,
            CurrentConfig(T,Fee,amount).tokens.in.decimals
        ).toString(),0
    )

    return toReadableAmount(quotedAmountOut, CurrentConfig(T,Fee,amount).tokens.out.decimals)

    
}

async function getPoolData(T:tokenStructureType,Fee:500|3000,amount:number) {
    const TokenA = CurrentConfig(T,Fee,amount).tokens.in
    const TokenB = CurrentConfig(T,Fee,amount).tokens.out

    const currentPoolAddress = computePoolAddress({
        factoryAddress:POOL_FACTORY_CONTRACT_ADDRESS,
        tokenA:TokenA,
        tokenB:TokenB,
        fee:Fee
    })
    console.log("cont",currentPoolAddress)
    console.log("t1",TokenA)
    console.log("t1",TokenB)

    const poolContract = new ethers.Contract(
        currentPoolAddress,
        IUniswapV3PoolABI.abi,
        getProvider()
    )
    const token0 = await poolContract.token0()
    const token1 = await poolContract.token1()
    const fee =await poolContract.fee()


    return {
        token0,
        token1,
        fee
    }
}