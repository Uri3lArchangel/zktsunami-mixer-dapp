import { ethers } from 'ethers'
import Web3 from 'web3'
import mixerJSON from '../build/ZkTsunamiMixer.json'

const addr = "0x2952448d21f2Ee6B0253F75aE78c5231E7B48e47"

export const WitdrawContract=async(addresses:String[],amounts:String[],xy:String[],proof:any)=>{
    const provider =  new ethers.BrowserProvider(window.ethereum) 
    const web3 = new Web3(window.ethereum)
    const signer = await provider.getSigner()
    const a = signer.address
    const Proof = JSON.parse(proof.status)
    const contract = new web3.eth.Contract<any>(mixerJSON.output.abi,addr)
    let p = await contract.methods.withdrawBase(addresses,amounts,xy,Proof).send({from:a})
        
}
