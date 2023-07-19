import { ethers } from 'ethers'
import Web3 from 'web3'
import mixerJSON from '../build/ZkTsunamiMixer.json'

const addr = "0xe2F5798d424Cb41c465f5E45e53C5205e2590f16"

export const WitdrawContract=async(addresses,tokenAddress,fees,minAmount,amounts,xy,proof)=>{
    const provider =  new ethers.BrowserProvider(window.ethereum) 
    const web3 = new Web3(window.ethereum)
    const signer = await provider.getSigner()
    const a = signer.address
    const Proof = JSON.parse(proof.status)

    const contract = new web3.eth.Contract(mixerJSON.output.abi,addr)
    let p = await contract.methods.withdrawERC20(amounts,tokenAddress,fees,addresses,minAmount,xy,Proof).send({from:a})
        
    
}