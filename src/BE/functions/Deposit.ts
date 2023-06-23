import Web3 from "web3"
import mixerJSON from '../build/ZkTsunamiMixer.json'
import { splitNumber } from "./shift"
import {proofDeposit} from '../functions/zokratesDeposit'
import { ethers } from "ethers"

const addr = "0x2952448d21f2Ee6B0253F75aE78c5231E7B48e47"

export const web3Deposit=async(amount:number,key:string)=>{
const provider =  new ethers.BrowserProvider(window.ethereum) 
const web3 = new Web3(window.ethereum)
const signer = await provider.getSigner()
const a = signer.address
const contract = new web3.eth.Contract<any>(mixerJSON.output.abi,addr)


let p = await (contract.methods.depositBase(Web3.utils.toNumber(String((amount) * parseInt('10000000000000000'))))).send({from:a,value:String((amount) * parseInt('10000000000000000'))})

let r=splitNumber(`${key}`)
r.push(`${BigInt(amount * parseInt('10000000000000000'))}`)
let hash=await proofDeposit(r)
return hash
}