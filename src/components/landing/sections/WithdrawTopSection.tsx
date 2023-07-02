import { ERC20Tokens } from "@/FE/core/withdrawTokenData/ERC20Tokes";
import { droptokens, generateRandomString } from "@/FE/functions/interact";
import Image from "next/image";
import React, { useRef, useState } from "react";
import { AiFillCaretDown, AiFillCaretUp, AiOutlinePlus } from "react-icons/ai";
import utils from "../../../styles/utils.module.css";
import DropdownTokens from "../sections/DropdownW";
interface obj{
  [key:string]:number
}

const WithdrawTopSection = () => {
  const [token, selectToken] = useState("");
  const input_tokenRef = useRef<HTMLInputElement>(null);
  const [val, setVal] = useState<number | undefined>();
  const [Index,setIndex] = useState(0)
  let total=0;
const change=()=>{
  const len = (document.querySelectorAll('#tokenamount') as NodeListOf<HTMLInputElement>);
  let a:obj={
    "1":0,
    "2":0,
    "3":0,
    "4":0,
    "5":0
  }
  for(let i=0;i<len.length;i++){
    if(!isNaN(parseFloat(len[i].value))){
    a[`${i+1}`]=parseFloat(len[i].value);
    }
  };
 total=a['1']+a['2']+a["3"]+a["4"]+a["5"];
(document.getElementById('totalTag') as HTMLSpanElement).innerHTML=`${total}`;
return


  
}
  

  return (
    <>
      {" "}
      <div className={utils.withdrawTopInnerContainer}>
        <div>
          <input
            type="text"
            className={utils.receipientInput}
            placeholder="Enter Recipient Address"
            id="addresesRec"
          />
          <div className={utils.inp2Container + " relative"}>
            <input
              type="text"
              placeholder="Enter token name or address"
              defaultValue={token}
              id="tokenAddressesRec"
              value={token}
            />
            {ERC20Tokens[token].logoURI ? (
              <span
                onClick={(e) => {
                  droptokens("w",e);
                }}
                className={utils.withdrawIcons}
                id={`${generateRandomString()}`}
              >
                <Image
                  src={ERC20Tokens[token].logoURI}
                  width="120"
                  height="120"
                  alt={token}
                />
                <DropdownTokens select={selectToken} />
              </span>
            ) : (
              <span  onClick={(e) => {
                droptokens("w",e);
              }}
              id={`${generateRandomString()}`}
              className={utils.withdrawIcons}
              >
                <AiFillCaretDown
                 
                />
                <DropdownTokens select={selectToken} />
              </span>
            )}
          </div>
          <div className={utils.withdrawAmountInput}>
            <input
              id="tokenamount"
              ref={input_tokenRef}
              accept="number"
              value={val}
              defaultValue={val}
              min={1}
              onChange={(e)=>{change()}}
              type="number"
              className="no-arrows"
              placeholder="Enter token amount in units"
            />
           
          </div>
        </div>
      </div>
    </>
  );
};

export default WithdrawTopSection;
