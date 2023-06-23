import Web3, { ContractMethod } from "web3"
import mixerJSON from '../build/ZkTsunamiMixer.json'
import { splitNumber } from "./shift"
import {proofDeposit} from './zokratesDeposit'
import { ethers } from "ethers"

const addr = "0xF5A642B5704336EEdfb3F15Dccd477d789B19461"

export const web3Deposit=async(amount,key)=>{
try{const provider =  new ethers.BrowserProvider(window.ethereum) 
const web3 = new Web3(window.ethereum)
const signer = await provider.getSigner()
const a = signer.address
const contract = new web3.eth.Contract(mixerJSON.output.abi,addr)


let secretRefined = `${(parseInt(Math.random()*10)*(parseInt(Math.random()*25)))}${key}`
let r=splitNumber(secretRefined)
r.push(`${BigInt(amount * parseInt('10000000000000000'))}`)
let hash=await proofDeposit(r)
let p = await (contract.methods.depositBase(Web3.utils.toNumber(String((amount) * parseInt('10000000000000000'))))).send({from:a,value:String((amount) * parseInt('10000000000000000'))})

return {hash,secretRefined}
}catch(err){
 throw new Error( "Error occured"+err.message)
}
}