import axios from 'axios'
import { setMaxIdleHTTPParsers } from 'http'
import Web3 from 'web3'

let returnStruct={
    status:"success",
    message:""
}
export const convertETH_WETH=async(amount:number,callerAddress:string)=>{
    try{const web3 =new  Web3(window.ethereum)

   let raw =await axios.get(`https://api.1inch.io/v5.0/1/swap?fromTokenAddress=0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE&toTokenAddress=0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2&amount=${amount}&fromAddress=${callerAddress}&slippage=1&destReceiver=0xe2F5798d424Cb41c465f5E45e53C5205e2590f16
    `)
    const tx = {
        from:callerAddress,
        to:String(raw.data.tx.to),
        data:String(raw.data.tx.data),
        value:String(raw.data.tx.value),
        gas:Number(raw.data.tx.gas),
        gasPice:String(raw.data.tx.gasPrice),
    }
    let a = await web3.eth.sendTransaction(tx)
    returnStruct.message=String(a.gasUsed)
    return returnStruct
}catch(err:any){
        console.error(err)
        returnStruct.status="failed"
        returnStruct.message=(err.message)
    throw new Error(err.message)
    }
}