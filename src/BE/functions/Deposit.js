import { splitNumber } from "./shift"
import {proofDeposit} from './zokratesDeposit'
import { ethers } from "ethers"
import { convertETH_WETH } from "./swap/InchRequest"
import Web3 from "web3";
import mixerJSON from '../build/ZkTsunamiMixer.json'
import IERC20 from '../build/IERC20.json'

const addr = "0xe2F5798d424Cb41c465f5E45e53C5205e2590f16"

export const web3DepositETH=async(amount,key)=>{


  const provider =  new ethers.BrowserProvider(window.ethereum) 
  const signer = await provider.getSigner()
  const a = signer.address

  
  
  let secretRefined = `${(parseInt(Math.random()*10)*(parseInt(Math.random()*25)))}${key}`
  let r=splitNumber(secretRefined)
  r.push(`${BigInt(amount * parseInt('100000000000000'))}`)
  // const data = await fetch(process.env.NODE_ENV == "development"?"/api/depositCompute_Tag001":window.location.origin +"/api/depositCompute_Tag001",{method:'POST',mode:'no-cors',body:JSON.stringify({r})})
  // const hash = await data.json()
  const hash =await proofDeposit(r)

  const Amount = (parseInt(amount) * parseInt("100000000000000"))
  
   await convertETH_WETH(Amount,a)
      
     
    
  return {hash,secretRefined}
  

}

export const web3Deposit=async(amount,key,token,max,fee)=>{
  const provider =  new ethers.BrowserProvider(window.ethereum) 
  const web3 = new Web3(window.ethereum)
  const signer = await provider.getSigner()
  const accountAddress = signer.address
  const contract = new web3.eth.Contract(mixerJSON.output.abi,addr)
  const approveContract = new web3.eth.Contract(IERC20.output.abi,token)


let secretRefined = `${(parseInt(Math.random()*10)*(parseInt(Math.random()*25)))}${key}`
let r=splitNumber(secretRefined)
r.push(`${BigInt(amount * parseInt('100000000000000'))}`)
// const data = await fetch(process.env.NODE_ENV == "development"?"/api/depositCompute_Tag001":window.location.origin +"/api/depositCompute_Tag001",{method:'POST',mode:'no-cors',body:JSON.stringify({r})})
// const hash = await data.json()
const hash =await proofDeposit(r)
const Amount = (parseInt(amount) * parseInt("100000000000000"))
let allowance = await approveContract.methods.allowance(accountAddress,addr).call()
if(((Number(allowance)))  < Number(max)){
console.log(Number(allowance),max)
await approveContract.methods.approve(addr,`${max}`).send({from:accountAddress})
}
console.log(Amount,max,fee,token)
  await contract.methods.depositBase(`${Amount}`,`${max}`,fee,token).send({from:accountAddress})
  

  
return {hash,secretRefined}

}