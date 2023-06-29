import Web3 from 'web3'
import IERC20Json from '../../build/IERC20.json'




export const approve =async()=>{

 const web3 = new Web3(window.ethereum)
 const token = new web3.eth.Contract(IERC20Json.output.abi,"0x326C977E6efc84E512bB9C30f76E30c160eD06FB")
const acc = await web3.eth.requestAccounts()
console.log(acc[0])
await token.methods.approve("0xa44a5D59D6742A492eB381e7d1E072e27f14399b",'6000000000000000000').send({from:acc[0]})
}