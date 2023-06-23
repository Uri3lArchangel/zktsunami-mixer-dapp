import Image from 'next/image'
import React from 'react'
import anonImg from "/public/img33acdae0f/anonImg.png";
import securityImg from "/public/img33acdae0f/securityImg.png";
import transparencyImg from "/public/img33acdae0f/transImg.png";
import deImg from "/public/img33acdae0f/deImg.png";
import Link from "next/link";
import landing from "@/styles/landingpage.module.css";
import { btnclick, btnunClick, hyperlink } from '@/FE/functions/interact';

const style1 ={"--delay":"0s"} as React.CSSProperties
const style2={"--delay":"0.4s"}as React.CSSProperties
const style3 ={"--delay":"0.8s"} as React.CSSProperties
const style4 ={"--delay":"1.2s"} as React.CSSProperties

const Section2 = () => {
   
  return (
    <section id="2"  className="h-screen">
    <div className="bg-black pb-8 pt-3 relative top-8 h-full">
      <div className="flex w-full text-white justify-between items-center">
        <hr className=" w-1/4 border-white " />
        <h3 className="text-md lg:text-4xl">What do we offer</h3>
        <hr className="w-1/4 border-white " />
      </div>
      <div className={landing.landing2_container}>
        <div className="sliders" style={style1}>
          <figure className="h-full mx-auto flex items-center">
            <div className={landing.landing2_img}>
              <Image
                src={anonImg}
                alt="anonymity and privacy"
                width={240}
                height={240}
              />
            </div>
            <figcaption className="text-center w-3/4 text-xl">
              anonymity and privacy
            </figcaption>
          </figure>
        </div>
        <div className="sliders" style={style2}>
          <figure className="h-full mx-auto flex items-center">
            <div className={landing.landing2_img}>
              <Image
                src={securityImg}
                alt="Securtiy"
                width={240}
                height={240}
              />
            </div>
            <figcaption className="text-center w-3/4 text-xl">
              Securtiy
            </figcaption>
          </figure>
        </div>
        <div className="sliders" style={style3}>
          <figure className="h-full mx-auto flex items-center">
            <div className={landing.landing2_img}>
              <Image
                src={transparencyImg}
                alt="Transparency"
                width={240}
                height={240}
              />
            </div>
            <figcaption className="text-center w-3/4 text-xl">
              Transparency
            </figcaption>
          </figure>
        </div>
        <div className="sliders" style={style4}>
          <figure className="h-full mx-auto flex items-center">
            <div className={landing.landing2_img}>
              <Image
                src={deImg}
                alt="Decentralization"
                width={240}
                height={240}
              />
            </div>
            <figcaption className="text-center w-3/4 text-xl">
              Decentralization
            </figcaption>
          </figure>
        </div>
      </div>
      <div className={landing.landing2_buttons}>
      <button id="third" onMouseUp={(e)=>{btnunClick(e)}} onMouseDown={(e)=>{
          btnclick(e)
        }}>
          
       <Link href={"/app"}>Launch App</Link> 
         </button>
        <button id="forth" onMouseUp={(e)=>{btnunClick(e)}} onMouseDown={(e)=>{
          btnclick(e)
        }} >
          
          <Link id="third_link" onClick={(e)=>{
          hyperlink(e)
        }} href={"/#3"}>Learn More</Link></button>
      </div>
    </div>
  </section> 
  )
}

export default Section2