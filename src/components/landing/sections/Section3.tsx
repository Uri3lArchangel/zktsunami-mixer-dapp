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
              Deposit your funds securely for future use, enabling seamless withdrawals or transfers to other addresses while preserving user privacy. Deposits are made discreetly in small quantities to enhance privacy. After making a deposit, you will receive confidential keys that must be safeguarded, as they are essential for verifying your deposit and successfully withdrawing your funds
              {/* <br />
                <em className='text-xl text-red-500'>
                After Depositing you will receive keys which you must keep secret and safe
                as they are what you will use to verify your deposit and withdraw your money 
                successfully
                </em> */}

              </p>
              
            </article>
            </div>
            <div>
            <h5>Withdraw</h5>
            <article>
              <p>
              Securely store your funds for future use, then easily withdraw them to multiple addresses simultaneously using various token options. To ensure a seamless withdrawal process, you&apos;ll need to provide the keys you received during your deposit. Make sure that the total amount you withdraw in one go (per key) matches the total amount you deposited under the key you wish to use.
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