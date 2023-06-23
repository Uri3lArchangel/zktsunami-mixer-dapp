import React, { useEffect, useRef, useState } from "react";
import utils from "../../../styles/utils.module.css";
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";
import { btnclick, btnunClick, droptokens } from "@/FE/functions/interact";
import DropdownTokens from "../sections/Dropdown";
import Image from "next/image";
import { ethers } from "ethers";
import { ERC20Tokens } from "@/FE/core/testnet/ERC20Tokes";
import { splitNumber } from "@/BE/functions/shift";
import { web3Deposit } from "@/BE/functions/Deposit";
import { message } from "antd";
import {  Modal } from 'antd';


const Deposit = () => {
  const input_tokenRef = useRef<HTMLInputElement>(null);
  const [val, setVal] = useState<number>(1);
  const [token, selectToken] = useState("");
  const [account, setAccount] = useState<string>();
  const [keyState, setKey] = useState<string | null>(null);
  const keyRef = useRef<HTMLInputElement>(null)
  const init = async () => {
    const provider = new ethers.BrowserProvider(window.ethereum);
    await provider.send("eth_requestAccounts", []);
    const signer = await provider.getSigner();
    console.log(signer.address);
    setAccount(signer.address);
  };
  const [modalState,setModal] = useState(false)
  const [keys,setKeys] = useState<string[]>()
  const [isModalOpen, setIsModalOpen] = useState(modalState);

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const generatePrivateKey = async (a: string) => {
    let g = await fetch(process.env.NODE_ENV == "development"?"/api/randomString?address=" + a:window.location.origin +"/api/randomString?address=" + a, {
      method: "GET",
      mode: "no-cors",
    });
    let h = await g.json();
    let res = h;
    return res.key;
  };
  const deposit = async()=>{
   try{ 
    if(keyRef.current && keyRef.current.value.length > 0){
    if(val){
      message.loading("Depositing Please Wait",1000)
      let hash = await web3Deposit(val,keyRef.current.value)
      message.destroy()
      setKeys(JSON.parse(hash))
      showModal()
    }
  }}catch(err:any){
  
    message.destroy()
    message.error(err.message,4)
  }
  }
  
const selsctUnit=(e:React.MouseEvent<HTMLButtonElement>)=>{
let buttons = document.querySelectorAll('#unit') as NodeListOf<HTMLButtonElement>
for(let i=0;i<buttons.length;i++){
  if(buttons[i].classList.contains('btn_highlight')){
  buttons[i].classList.remove('btn_highlight')
  }
}
e.currentTarget.classList.add('btn_highlight')
}
  useEffect(() => {
    init();
  }, [val, account, keyState,modalState]);

  return (
    <>
      
    <Modal title="Access keys" className="text-center" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
      <h3 className="text-2xl font-bold">Here are your generated access keys (x,y and secret) to your funds, store them safely with you</h3>
      <em className="text-xl text-red-600 my-2">We do not store the keys anywhere for you, if you lose them you cannot get your funds back from the contract </em>
      <p className=" select-text my-2">x: {keys?keys[0]:''}</p>
      <p className=" select-text my-2">y: {keys?keys[1]:''}</p>
      <p className=" select-text my-2">secret: {keyRef.current?keyRef.current.value:''}</p>
    
    </Modal>
    <article className={utils.depositContainer}>
      <div className={utils.depositTitle}>
        <h1>DEPOSIT YOUR CRYPTO TO THE MIXER</h1>
        <em>note: 1unit = 0.001ETH</em>
      </div>
      <input
        ref={keyRef}
        type="text"
        id="secretInput"
        className=" w-3/5 h-10 border border-black px-2 mt-4"
        placeholder="Enter a unique secret "
      />
      <p>or</p>
      <button
        onClick={async () => {
          await init();
          console.log(account);
          if (account) {
            let key =(await generatePrivateKey(account));

            if (key)
              (
                document.getElementById("secretInput") as HTMLInputElement
              ).value = key;
          } else {
            throw new Error("Account not detected");
          }
        }}
        className="bg-red-500 w-fit text-white px-4 py-2 block mx-auto"
      >
        Generate Random Key
      </button>
      <div className={utils.depositInnerContainer}>
        <div className={utils.tokenInput}>
          <input
            type="text"
            placeholder="Select Token"
            defaultValue={token}
            value={token}
          />
          {ERC20Tokens[token].logoURI ? (
            <span
              onClick={() => {
                droptokens("d");
              }}
              className={utils.icons + " flex items-center justify-center"}
            >
              <Image
                src={ERC20Tokens[token].logoURI}
                width="120"
                height="120"
                alt={token}
              />
            </span>
          ) : (
            <span
              onClick={() => {
                droptokens("d");
              }}
              className={utils.icons + " flex items-center justify-center"}
            >
              <AiFillCaretDown />
            </span>
          )}

          <DropdownTokens select={selectToken} />
        </div>
        <p>Select Token Amount to Deposit</p>
        <div className={utils.amountInput}>
              <button id="unit" onClick={(e)=>{setVal(1);selsctUnit(e)}}>1 Unit</button>
              <button id="unit"  onClick={(e)=>{setVal(10);selsctUnit(e)}}>10 Units</button>
              <button id="unit"  onClick={(e)=>{setVal(100);selsctUnit(e)}}>100 Units</button>
              <button id="unit"  onClick={(e)=>{setVal(500);selsctUnit(e)}}>500 Units</button>
              <button id="unit"  onClick={(e)=>{setVal(1000);selsctUnit(e)}}>1000 Units</button>
        </div>
        <p className="mt-5 text-md">
          {val}units = {(val * 0.01).toFixed(2)} Tokens
        </p>
        <button
          onClick={
            deposit
          }
          id="deposit"
          onMouseUp={(e) => {
            btnunClick(e);
          }}
          onMouseDown={(e) => {
            btnclick(e);
          }}
          className={utils.depositButton}
        >
          <p className="text-xl">DEPOSIT</p>
        </button>
      </div>
    </article>
    </>

  );
};

export default Deposit;
