import { WitdrawContract } from "@/BE/functions/Withdrawal";
import { message, Tooltip } from "antd";
import React, { useEffect, useRef, useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { isAddress } from "web3-validator";
import utils from "../../../styles/utils.module.css";
import WithdrawTopSection from "../sections/WithdrawTopSection";
import { quote } from "@/BE/functions/testSwap/src/libs/quotes";
import { TOKEN_INTERFACE } from "@/BE/functions/testSwap/src/libs/constants";
import { ERC20Tokens } from "@/FE/core/withdrawTokenData/ERC20Tokes";

const Withdraw = () => {

  const [count, setCount] = useState(1);
  const xref = useRef<HTMLInputElement>(null)
  const yref = useRef<HTMLInputElement>(null)
  const Sref = useRef<HTMLInputElement>(null)

  const [Section, setSectionCount] = useState<React.JSX.Element[]>([
    <WithdrawTopSection  key={count} />,
  ]);
  const increase = () => {
    if (count < 5) {
      setSectionCount([...Section, <WithdrawTopSection key={count} />]);
      setCount((prev) => prev + 1);
    } else {
      return;
    }
  };
  const decrease = () => {
    if (count > 1) {
      Section.pop();
      setCount((prev) => prev - 1);
    } else {
      return;
    }
  };
const withdraw=async()=>{

try{
  if(xref.current && yref.current && Sref.current){
  if(xref.current.value === '' || yref.current.value === '' || Sref.current.value === ''){
    message.destroy()
    message.error("Please Provide x, y and secret",5)
    return
  }
    message.loading("Withdrawing, Please Wait this may take up to a minute",1000)
  let amountsInputs = document.querySelectorAll('#tokenamount') as NodeListOf<HTMLInputElement>
  let addressesInputs = document.querySelectorAll('#addresesRec') as NodeListOf<HTMLInputElement>
  let tokensAddressInputs = document.querySelectorAll('#tokenAddressesRec') as NodeListOf<HTMLInputElement>


let total=0;
let amounts=[];
let addresses = [];
let tokenAddresses=[];
let fees=[];
let minAmounts=[];
let status=true;
for(let i=0;i<amountsInputs.length;i++){
  if(addressesInputs[i].value == '' || !isAddress(addressesInputs[i].value || addressesInputs[i].value)){
    message.destroy()
    message.error("Invalid receipient address, please provide a valid ethereum address at section "+i,4)
    return
  }
  if(tokensAddressInputs[i].value == '' || !tokensAddressInputs[i].value){
    message.destroy()
    message.error("Please select a token from the given list at section "+i,4)
    return
  }
  if(amountsInputs[i].value && parseFloat(amountsInputs[i].value) > 0){
    
     
        let tokenAddr=ERC20Tokens[tokensAddressInputs[i].value].address
        let tokenDecimal = ERC20Tokens[tokensAddressInputs[i].value].decimals
        let tokenSymbol = ERC20Tokens[tokensAddressInputs[i].value].symbol
        let tokenName = tokensAddressInputs[i].value

      addresses.push(addressesInputs[i].value)
      tokenAddresses.push(tokenAddr)
      fees.push("3000")
      amounts.push(String(parseFloat(amountsInputs[i].value)*(parseInt('1000000000000000000'))))
    total += parseFloat(amountsInputs[i].value)
    let t:TOKEN_INTERFACE={
      in:{
        address:"0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
        decimals:18,
        symbol:"WETH",
        name:"Wrapped Ether"
      },
      out:{
        address:tokenAddr,
        decimals:tokenDecimal!,
        symbol:tokenSymbol,
        name:tokenName
      },fee:3000,
      amount:(parseFloat(amountsInputs[i].value))
    }
    let min = await quote(t)
    minAmounts.push(String(parseInt(min)))
  
    

  }else{
    continue
  }
}
if(!status){
  return
}

let Total = `${total * parseFloat('1000000000000000000')}`;
const body = {
  x:xref.current.value,
  y:yref.current.value,
  secret:Sref.current.value,
  total:Total
  
}
let res = await fetch(process.env.NODE_ENV == "development"? '/api/generateWithdrawProof':window.location.origin+'/api/generateWithdrawProof',{
  method:'POST',
  body:JSON.stringify(body),
  mode:'no-cors'

})
if(res.status != 200){
message.destroy()
message.error(`${await res.text()}`,3)
return
}

const proof = (await res.json())
const xyPair = [body.x,body.y]
await WitdrawContract(addresses,tokenAddresses,fees,minAmounts,amounts,xyPair,proof)
message.destroy()
message.success("Withdrawn",2)


}

}catch(err:any){
  message.destroy()
message.error("error"+err.message,4)
}
}

  useEffect(() => {
 
  }, [count]);

  return (
    <article>
        <div style={{textAlign:'center',width:'40%',margin:'1em auto',color:'red',fontSize:'1.3rem'}}>Please ensure that your withdrawal total amount matches the deposit amount made per key, as any mismatch will prevent the withdrawal.</div>
      <div className={utils.withdrawTabContainer}>
        <div className={utils.withdrawTitle}>
          <h1>WITHDRAW ANONYMOUSLY TO OTHER ACCOUNTS(S)</h1>
=        </div>
        {Section.map((Sect, i) => { return(React.cloneElement(Sect, { key: i }))} )}
        <div className={utils.withdrawBottomInnerContainer}>
        <p>Total amount to withdraw: <span id="totalTag">0</span> ETH</p>
          <div className={utils.addMore}>
            {count === 5 ? (
              <Tooltip title={"Max Reached"}>
                <AiOutlinePlus
                  style={{ opacity: "0.5" }}
                  onClick={increase}
                  className="cursor-pointer"
                  size={20}
                />
              </Tooltip>
            ) : (
              <AiOutlinePlus
                onClick={increase}
                className="cursor-pointer"
                size={20}
              />
            )}
            {count === 1 ? (
              <Tooltip title={"Minimum Reached"}>
                <AiOutlineMinus
                  style={{ opacity: "0.5" }}
                  onClick={decrease}
                  className="cursor-pointer"
                  size={20}
                />
              </Tooltip>
            ) : (
              <AiOutlineMinus
                onClick={decrease}
                className="cursor-pointer"
                size={20}
              />
            )}
          </div>
          <h4>Enter your access keys</h4>
          <input type="text" ref={xref} className="block w-3/4 mx-auto h-10 my-2 px-2 placeholder:text-gray-200 border border-gray-500" placeholder="x" />
          <input type="text" ref={yref} className="block w-3/4 mx-auto h-10 my-2 px-2 placeholder:text-gray-200 border border-gray-500" placeholder="y" />
          <input type="text" ref={Sref} className="block w-3/4 mx-auto h-10 my-2 px-2 placeholder:text-gray-200 border border-gray-500" placeholder="secret" />

          <button onClick={withdraw} className={utils.depositButton}>WITHDRAW</button>
        </div>
      </div>
    </article>
  );
};

export default Withdraw;
