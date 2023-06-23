import { WitdrawContract } from "@/BE/functions/Withdrawal";
import { message, Tooltip } from "antd";
import React, { useEffect, useRef, useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { isAddress } from "web3-validator";
import utils from "../../../styles/utils.module.css";
import WithdrawTopSection from "../sections/WithdrawTopSection";

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

try{if(xref && yref && Sref){
  if(xref.current && yref.current && Sref.current){
    message.loading("Withdrawing, Please Wait this may take up to a minute",1000)
  let amountsInputs = document.querySelectorAll('#tokenamount') as NodeListOf<HTMLInputElement>
  let addressesInputs = document.querySelectorAll('#addresesRec') as NodeListOf<HTMLInputElement>

let total=0;
let amounts=[];
let addresses = [];
let status=true;
for(let i=0;i<amountsInputs.length;i++){
  if(amountsInputs[i].value && parseFloat(amountsInputs[i].value) > 0){
    if(addressesInputs[i].value != '' && isAddress(addressesInputs[i].value)){
      addresses.push(addressesInputs[i].value)
      amounts.push(String(parseFloat(amountsInputs[i].value)*(parseInt('1000000000000000000'))))
    total += parseFloat(amountsInputs[i].value)

    }else{
      status=false
      message.destroy()
      message.error("Please enter a valid ethereum address at section"+i,5)
      return
    }

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
await WitdrawContract(addresses,amounts,xyPair,proof)
message.destroy()
message.success("Withdrawn",2)

}
}else{
  message.destroy()
  message.error("Please Provide x, y and secret",5)
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
        <em className="mt-40 text-red-600 text-center text-lg">Note: Please we use full one time withdrawal meaning the total amount you want to withdraw must be equal to the total amount you have deposited per key, if your total does not match your deposit the withdrawal won&apos;t work</em>
      <div className={utils.withdrawTabContainer}>
        <div className={utils.withdrawTitle}>
          <h1>WITHDRAW ANONYMOUSLY TO OTHER ACCOUNTS(S)</h1>
          <em>note: 1unit = 0.001ETH</em>
        </div>
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
