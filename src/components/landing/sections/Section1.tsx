'use client'
import Link from 'next/link'
import React from 'react'
import landing from "@/styles/landingpage.module.css";
import indent from '../../../public/img33acdae0f/indent.png'
import { btnclick, btnunClick, hyperlink } from '@/FE/functions/interact';



const Section1 = () => {


  return (
    <section id="1"  className="h-screen">
    <div className={" w-11/12 mx-auto " + landing.bg}>
      <div>
        <h1 style={{'color':"black"}}>Zero Knowledge
          Absolute Privacy</h1>
        <h1>zktsunami</h1>
        <h2>Mixer Dapp</h2>
        <button id="first" onMouseUp={(e)=>{btnunClick(e)}} onMouseDown={(e)=>{
          btnclick(e)
        }}>
          
       <Link href={"/app"}>Launch App</Link> 
         </button>
        <button id="second" onMouseUp={(e)=>{btnunClick(e)}} onMouseDown={(e)=>{
          btnclick(e)
        }} >
          
          <Link id="second_link" onClick={(e)=>{
          hyperlink(e)
        }} href={"/#2"}>Learn More</Link></button>
      </div>
    </div>
  </section>
  )
}

export default Section1