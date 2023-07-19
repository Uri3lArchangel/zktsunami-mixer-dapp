'use client'
import React from 'react'
import Link from "next/link";
import landing from "@/styles/landingpage.module.css";
import { btnclick, btnunClick, hyperlink } from '@/FE/functions/interact';




const Section3 = () => {


  return (
    <section id="3"  className="h-screen">
      <div className="h-full flex justify-between flex-col">
          <h4 className="text-3xl text-center ">What can you do?</h4>
          <div className={landing.landing3_tab3Container}>
            <div>
            <h5>Deposit</h5>
            <article>
              <p>
                Deposit your funds for later withdrawal or transfer to another
                address all done anonymously.
              <br />
                <em className='text-xl text-red-500'>
                After Depositing you will receive keys which you must keep secret and safe
                as they are what you will use to verify your deposit and withdraw your money 
                successfully
                </em>

              </p>
              
            </article>
            </div>
            <div>
            <h5>Withdraw</h5>
            <article>
              <p>
                Deposit your funds for later withdrawal to multiple other addresses all done simultaneously with different choice of tokens 
              <br />
                <em className='text-xl text-red-500'>
                You would need to pass the keys you were given during deposit at withdrawal
                Ensure the total amount you withdraw at a go (per key) is equal to the total amount deposited of whose key you want to use
                </em>
              </p>
            </article>
            </div>
          
          </div>
          <button id="fifth" onMouseUp={(e)=>{btnunClick(e)}} onMouseDown={(e)=>{
              btnclick(e)
            }}>
              
           <Link id="first_link" href={"/app"}>Launch App</Link> 
             </button>
             <hr />
            <button id="sixth" onMouseUp={(e)=>{btnunClick(e)}} onMouseDown={(e)=>{
              btnclick(e)
            }} 
            
           >
              
              <Link onClick={(e)=>{
              hyperlink(e)
            }} href={"/#1"}>Back To Top</Link></button>
        <footer className=" bg-primary-dark text-white py-4 text-center text-sm">
          @copyrights reserved
        </footer>
        </div>
      </section>
  )
}

export default Section3