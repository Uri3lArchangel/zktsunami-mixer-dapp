import React, { useEffect, useRef, useState } from "react";
import utils from "../../../styles/utils.module.css";
import { AiFillCaretDown } from "react-icons/ai";
import { btnclick, btnunClick, droptokens } from "@/FE/functions/interact";
import DropdownTokens from "../sections/Dropdown";
import Image from "next/image";
import { ethers } from "ethers";
import { ERC20Tokens } from "@/FE/core/ERC20Tokes";
import { web3Deposit, web3DepositETH } from "@/BE/functions/Deposit";
import { Button, message } from "antd";
import {  Modal } from 'antd';
import { TOKEN_INTERFACE } from "@/BE/functions/testSwap/src/libs/constants";
import {  quote2 } from "@/BE/functions/testSwap/src/libs/quotes";




interface Keys
  {
    hash: String[];
    secretRefined:String
  }

const Deposit = ({contractAddr}:any) => {
  const tokenAddress = useRef<HTMLInputElement>(null)
  const [quote,setQuote]=useState<{symbol:string |null,quote:number|string | null}>({symbol:null,quote:null})
  const [val, setVal] = useState<number>(1);
  const [token, selectToken] = useState("");
  const [account, setAccount] = useState<string>();
  const keyRef = useRef<HTMLInputElement>(null)
  const unitInputRef = useRef<HTMLInputElement>(null)
  const [modalState,setModal] = useState(false)
  const [keys,setKeys] = useState<Keys>() 
  const [isModalOpen, setIsModalOpen] = useState(modalState);




// Keys modal visiblity functions
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };




//  handles deposit input changes

  const inputChange = async()=>{
    if(unitInputRef.current){
      if(parseInt(unitInputRef.current.value) < 1 || isNaN(parseInt(unitInputRef.current.value))){
        (document.getElementById('depositInput') as HTMLInputElement).value=''
      }
    setVal(parseInt(unitInputRef.current.value))
   await changeInput()
    }
  }








  // generates teh private key 
  const generatePrivateKey = async (a: string) => {
     let g = await fetch(process.env.NODE_ENV == "development"?"/api/randomString?address=" + a:window.location.origin +"/api/randomString?address=" + a, {
      method: "GET",
      mode: "no-cors",
    });
    let h = await g.json();
    let res = h;
    return res.key;
  };







// deposit function is called on deposit
  const deposit = async()=>{
   try{ 
    if(keyRef.current && keyRef.current.value.length > 0){
      if(unitInputRef.current){
      if(isNaN(parseInt(unitInputRef.current.value))){
        message.destroy()
        message.error("Please enter a valid unit amount")
        return

      }
      if(!tokenAddress.current || tokenAddress.current!.value == ''){
        message.destroy()
          message.error("Please specify your deposit token",5)
          return
      }
     
    const tokenName = tokenAddress.current!.value
    const _token =ERC20Tokens[tokenName]

    if(!account){
      message.destroy()
      message.error("No account detected please connect a wallet account")
      return
    }
    message.loading("Depositing Please Wait",1000)
    if(_token.address != '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee'){

    let t:TOKEN_INTERFACE={
      in:{
        address:"0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
        decimals:18,
        symbol:"WETH",
        name:"Wrapped Ether"
      },
      out:{
        address:_token.address,
        decimals:_token.decimals!,
        symbol:_token.symbol,
        name:tokenName
      },fee:3000,
      amount:parseFloat(String((parseInt(unitInputRef.current.value)* parseInt('100000000000000'))/parseInt('1000000000000000000')))
    }
  
    let o = parseFloat(await quote2(t))
    let max = parseInt(String((o+(0.8*o))*parseInt(`${10**_token.decimals!}`)))
      let hash = await web3Deposit(unitInputRef.current.value,keyRef.current.value,_token.address,max,t.fee)

      message.destroy()

      if(hash.hash && hash.secretRefined){
      setKeys({hash:JSON.parse(hash.hash),secretRefined:hash.secretRefined})
      showModal()
      document.getElementById('keyReveal')!.style.display = 'block'
      }
      }else{
        let hash = await web3DepositETH(unitInputRef.current.value,keyRef.current.value)
        message.destroy()
  
        if(hash.hash && hash.secretRefined){
        setKeys({hash:JSON.parse(hash.hash),secretRefined:hash.secretRefined})
        showModal()
        document.getElementById('keyReveal')!.style.display = 'block'
        }
      }
    }
  }else{
    message.destroy()
    message.error("Provide a unique secret key",5)
    console.clear()

  }

}catch(err:any){
    message.destroy()
    message.error(err.message,4)
   console.clear()
    return
  }
  }

// this handles the second token based conversion
  const changeInput = async()=>{
    if(isNaN(parseInt(unitInputRef.current!.value)) ){
    setQuote({symbol:null,quote:null})
    return
    }
    if(tokenAddress.current && tokenAddress.current!.value != '' && unitInputRef.current ){
   
    const tokenName = tokenAddress.current!.value
    const _token =ERC20Tokens[tokenName]
    if(!_token.address){
      setQuote({symbol:null,quote:null})
      return
    }
    if(_token.address != '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee'){
      setQuote({symbol:'',quote:'Loading...'})
      let t:TOKEN_INTERFACE={
        in:{
          address:"0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
          decimals:18,
          symbol:"WETH",
          name:"Wrapped Ether"
        },
        out:{
          address:_token.address,
          decimals:_token.decimals!,
          symbol:_token.symbol,
          name:tokenName
        },fee:3000,
        amount:parseFloat(String((parseInt(unitInputRef.current.value)* parseInt('100000000000000'))/parseInt('1000000000000000000')))
      }
      let Quote = parseFloat(await quote2(t))
      setQuote({symbol:t.out.symbol,quote:Quote})

    }
    
  }
}
  


// storage of keys 
  const storeSecretKeys = ()=>{
    if(keys){
    window.localStorage.setItem('SecretKeys',JSON.stringify(keys))
    message.destroy()
    message.success("stored")
    }
  }



// show keys
  const revealSectret=()=>{
  
    if(window.localStorage.getItem('SecretKeys')){
      const data = JSON.parse(window.localStorage.getItem('SecretKeys')!) as Keys
      setKeys({
        hash:data.hash,secretRefined:data.secretRefined
      })
      showModal()
      return
    }
    if(keys){
      showModal()
      return
    }
    return
  }


// celar keys from browser storage
  const clearSecret=()=>{
    if(window.localStorage.getItem('SecretKeys')){
      window.localStorage.removeItem('SecretKeys')
      message.destroy()
      message.success("cleared",2)
    }
  }


  const init = async () => {
    const provider = new ethers.BrowserProvider(window.ethereum);
    await provider.send("eth_requestAccounts", []);
    const signer = await provider.getSigner();
    setAccount(signer.address);
    return signer.address
  };


  useEffect(() => {

    document.getElementById('keyReveal')!.style.display = 'hidden'

    if(keys || window.localStorage.getItem('SecretKeys')){
      document.getElementById('keyReveal')!.style.display = 'block'

    }else{
      document.getElementById('keyReveal')!.style.display = 'hidden'

    }
  }, [val, account,modalState]);

  return (
    <>
      
    <Modal title="Access keys" className="text-center" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
      <h3 className="text-2xl font-bold">Here are your generated access keys (x,y and secret) to your funds, store them safely with you</h3>
      <em className="text-xl text-red-600 my-2">We do not store the keys anywhere for you, if you lose them you cannot get your funds back from the contract </em>
      <p className=" select-text my-2">x: {keys?keys.hash[0]:''}</p>
      <p className=" select-text my-2">y: {keys?keys.hash[1]:''}</p>
      <p className=" select-text my-2">secret: {keys?.secretRefined?keys.secretRefined :''}</p>
      <Button onClick={storeSecretKeys} className="my-4">Store in browser storage</Button>
      <Button onClick={clearSecret} danger>Clear from browser storage</Button>
    </Modal>
    <article className={utils.depositContainer}>
      <div className={utils.depositTitle}>
        <h1>DEPOSIT YOUR CRYPTO TO THE MIXER</h1>
        <em>note: 1unit = 0.0001ETH</em>
      </div> 
      <input
        ref={keyRef} 
        type="text"
        id="secretInput"
        className=" w-3/5  h-10 border border-black px-2 mt-4"
        placeholder="Enter a unique secret "
      />
      <p>or</p>
      <button
        onClick={async () => {
          let signer = await init();
          if (signer) {
            (document.getElementById("secretInput") as HTMLInputElement).style.color="#666";
            (document.getElementById("secretInput") as HTMLInputElement).value="Generating..";

            let key =(await generatePrivateKey(signer));

            if (key){
              (document.getElementById("secretInput") as HTMLInputElement).style.color="#000";
              (document.getElementById("secretInput") as HTMLInputElement).value = key;
            }
              
          } else {
            throw new Error("Account not detected");
          }
        }}
        className="bg-red-500 w-fit text-white px-4 py-2 block mx-auto"
      >
        Generate Random Key
      </button>
      <button id="keyReveal" onClick={()=>{revealSectret()}} className="bg-white hidden mt-2 w-fit text-black px-4 py-2 mx-auto">
        Reveal keys
      </button>
      <div className={utils.depositInnerContainer}>
        <div className={utils.tokenInput}>
          <input
          ref={tokenAddress}
            type="text"
            readOnly
            placeholder="Select Token"
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
        <p>Select Token Amount to Deposit in units</p>
        <div className={utils.amountInput}>
        <input type="number" onChange={inputChange} className="no-arrows" min={1}  ref={unitInputRef} id="depositInput" />
              {/* <button id="unit" onClick={(e)=>{setVal(1);selsctUnit(e)}}>1 Unit</button>
              <button id="unit"  onClick={(e)=>{setVal(10);selsctUnit(e)}}>10 Units</button>
              <button id="unit"  onClick={(e)=>{setVal(100);selsctUnit(e)}}>100 Units</button>
              <button id="unit"  onClick={(e)=>{setVal(500);selsctUnit(e)}}>500 Units</button>
              <button id="unit"  onClick={(e)=>{setVal(1000);selsctUnit(e)}}>1000 Units</button> */}
        </div>
        <p className="mt-5 text-2xl text-red-600">
          {isNaN(val)?'0':val}units = {isNaN(val)?'0':(val * 0.0001).toFixed(4)} ETH of Token
        </p>
        <p className="text-green-600 text-2xl">
          {quote.symbol==null?"":`${quote.quote} `+quote.symbol}
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
