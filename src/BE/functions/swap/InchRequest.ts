import axios from 'axios'
import Web3 from 'web3'

let returnStruct={
    status:"success",
    message:""
}
export const convertETH_WETH=async(amount:number,callerAddress:string)=>{
    try{
        const web3 =new  Web3(window.ethereum)
        const body = {amount,callerAddress}
       const data = await fetch(process.env.NODE_ENV == 'production'?window.location.origin+"/api/depositETH_WETH":"/api/depositETH_WETH",{
        method:'POST',
        mode:'no-cors',
        body:JSON.stringify(body)
       })
       const raw = await data.json()
       if(raw.statusCode && raw.statusCode != 200){
        throw new Error(raw.description)
       }
       console.log(raw.tx)

  
    let a = await web3.eth.sendTransaction(raw.tx)
    returnStruct.message=String(a.gasUsed)
    return returnStruct
}catch(err:any){
        console.error(err)
        returnStruct.status="failed"
        returnStruct.message=(err.message)
    throw new Error(err.message)
    }
}