import React from 'react'
import utils from "../../../styles/utils.module.css";
import {tokens} from '../../../FE/core/withdrawTokenData/ERC20TokensData'
import Image from 'next/image';
interface Props{
    select: React.Dispatch<React.SetStateAction<string>>

}
const DropdownTokens = ({select}:Props) => {
  return (
    <ul className={utils.dropDown} id="erc20">
    {tokens.map((token,index)=>(<li className='cursor-pointer' key={index} onClick={()=>{select(token.name)}} >{token.logoURI?<Image src={token.logoURI} width="100" height="100" alt={token.name} />:<></>}{token.name}</li>))}
    </ul>
  )
}

export default DropdownTokens