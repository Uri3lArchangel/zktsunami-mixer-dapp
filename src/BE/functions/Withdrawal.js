import { ethers } from 'ethers'
import Web3 from 'web3'
import mixerJSON from '../build/ZkTsunamiMixer.json'

const addr = "0xF5A642B5704336EEdfb3F15Dccd477d789B19461"

export const WitdrawContract=async(addresses,amounts,xy,proof)=>{
    const provider =  new ethers.BrowserProvider(window.ethereum) 
    const web3 = new Web3(window.ethereum)
    const signer = await provider.getSigner()
    const a = signer.address
    const Proof = JSON.parse(proof.status)
    console.log(xy)
    const contract = new web3.eth.Contract(mixerJSON.output.abi,addr)
    let p = await contract.methods.withdrawBase(addresses,amounts,xy,Proof).send({from:a})
        
}
