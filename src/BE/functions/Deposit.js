import Web3, { ContractMethod } from "web3"
import mixerJSON from '../build/ZkTsunamiMixer.json'
import { splitNumber } from "./shift"
import {proofDeposit} from './zokratesDeposit'
import { ethers } from "ethers"
import { convertETH_WETH } from "./swap/InchRequest"
import { ERC20Tokens } from "@/FE/core/ERC20Tokes"
import IERC20  from '../build/IERC20.json'

const addr = "0xe2F5798d424Cb41c465f5E45e53C5205e2590f16"

export const web3Deposit=async(amount,key,token,account,max,fee,decimal)=>{
  console.log(max)
const provider =  new ethers.BrowserProvider(window.ethereum) 
const web3 = new Web3(window.ethereum)
const signer = await provider.getSigner()
const a = signer.address
const contract = new web3.eth.Contract(mixerJSON.output.abi,addr)
const approveContract = new web3.eth.Contract(IERC20.output.abi,token)



let secretRefined = `${(parseInt(Math.random()*10)*(parseInt(Math.random()*25)))}${key}`
let r=splitNumber(secretRefined)
r.push(`${BigInt(amount * parseInt('100000000000000'))}`)
let hash=await proofDeposit(r)
const Amount = (parseInt(amount) * parseInt("100000000000000"))

if(token== "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee"){
   
    let r= await convertETH_WETH(Amount,account)
    
     if(r.status != "success"){
        hash=null
        secretRefined=null
     }
  }else{
  await approveContract.methods.approve(addr,max).send({from:a})
   await contract.methods.depositBase(Amount,max,fee,token).send({from:a,value:Amount})

  }
return {hash,secretRefined}

}