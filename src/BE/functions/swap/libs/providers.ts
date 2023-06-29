import {ethers} from 'ethers'
import { CurrentConfig } from '../config/config'


export function getProvider(){
    return new ethers.JsonRpcProvider("https://mainnet.infura.io/v3/874d9ca546c443be90882161ff27c213")
}