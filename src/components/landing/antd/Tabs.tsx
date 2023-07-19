'use client'
import React, { useEffect, useState } from "react";
import { Button, Tabs } from "antd";
import type { TabsProps } from "antd";
import utils from "../../../styles/utils.module.css";
import Pixel from "next/font/local";
import Deposit from "./Deposit";
import Withdraw from "./Withdraw";

const pixel = Pixel({
  src: [
    {
      path: "../../../../public/fonts/PixelOperatorSC.ttf",
      weight: "400",
    },
    {
      path: "../../../../public/fonts/PixelOperator-Bold.ttf",
      weight: "700",
    },
  ],
  variable: "--pixel",
});




const TabApp = ({contractAddr}:any) => {





const items: TabsProps["items"] = [
  {
    key: "1",
    label: "Deposit",
    children: <Deposit contractAddr={contractAddr}/>,
  },

  {
    key: "2",
    label: "Withdrawal",
    children: <Withdraw />,
  },
];




  
  const [activekey,setActiveKey]=useState("1")
  const click =(e:React.MouseEvent<HTMLButtonElement>,item:any)=>{
    setActiveKey(item.key)
    if(e.currentTarget.id === '1'){
      if((document.getElementById("2") as HTMLButtonElement).classList.contains("active"))
     { 
      (document.getElementById("2") as HTMLButtonElement).classList.remove("active");
      (document.getElementById("1") as HTMLButtonElement).classList.add("active");
    }

    }else{
      if((document.getElementById("1") as HTMLButtonElement).classList.contains("active"))
      { 
        (document.getElementById("1") as HTMLButtonElement).classList.remove("active");
      (document.getElementById("2") as HTMLButtonElement).classList.add("active");
    }
    }
   
  }



  
  useEffect(()=>{
    if(activekey === "1"){
    (document.getElementById("1") as HTMLButtonElement).classList.add("active");
    }

  },[activekey])





  
  return(
    <div className={utils.tabContainer}>
  <Tabs
    centered={true}
    renderTabBar={() => (
      <div className={utils.tabButtonsContainer}>
        {items.map((item, i) => (
          <button key={i} value={i} id={`${item.key}`} onClick={(e)=>{click(e,item)}}>
            {item.label}
          </button>
        ))}
      </div>
    )}

    activeKey={activekey}
    className={pixel.className}
    defaultActiveKey={"1"}
    items={items}
  />
  
  </div>
        )};

export default TabApp;
