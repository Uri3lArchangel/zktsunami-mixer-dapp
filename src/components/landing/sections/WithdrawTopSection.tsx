import { ERC20Tokens } from "@/FE/core/testnet/ERC20Tokes";
import { droptokens, generateRandomString } from "@/FE/functions/interact";
import Image from "next/image";
import React, { useRef, useState } from "react";
import { AiFillCaretDown, AiFillCaretUp, AiOutlinePlus } from "react-icons/ai";
import utils from "../../../styles/utils.module.css";
import DropdownTokens from "../sections/Dropdown";

const WithdrawTopSection = () => {
  const [token, selectToken] = useState("");
  const input_tokenRef = useRef<HTMLInputElement>(null);
  const [val, setVal] = useState<number | undefined>();

 
 

  return (
    <>
      {" "}
      <div className={utils.withdrawTopInnerContainer}>
        <div>
          <input
            type="text"
            className={utils.receipientInput}
            placeholder="Enter Receipient Address"
            id="addresesRec"
          />
          <div className={utils.inp2Container + " relative"}>
            <input
              type="text"
              placeholder="Enter token name or address"
              defaultValue={token}
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
