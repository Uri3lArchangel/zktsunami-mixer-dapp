import Image from 'next/image'
import React from 'react'
import step1 from '../../../../public/img33acdae0f/step1.jpg'
import step2 from '../../../../public/img33acdae0f/step2.jpg'
import step3 from '../../../../public/img33acdae0f/step3.jpg'
import step4 from '../../../../public/img33acdae0f/step4.jpg'
import step5 from '../../../../public/img33acdae0f/step5.jpg'
import step6 from '../../../../public/img33acdae0f/step6.jpg'
import step7 from '../../../../public/img33acdae0f/step7.jpg'
import step8 from '../../../../public/img33acdae0f/step8.jpg'
import step9 from '../../../../public/img33acdae0f/step9.jpg'
import wstep4 from '../../../../public/img33acdae0f/wstep4.jpg'
import wstep5 from '../../../../public/img33acdae0f/wstep5.jpg'
import wstep6 from '../../../../public/img33acdae0f/wstep6.jpg'
import wstep7 from '../../../../public/img33acdae0f/wstep7.jpg'
import wstep8 from '../../../../public/img33acdae0f/wstep8.jpg'
import wstep9 from '../../../../public/img33acdae0f/wstep9.jpg'


import landing from '../../../styles/landingpage.module.css'


const Section2 = () => {
   
  return (
    <section id="2" className={landing.section2_container} >
              <h2>How To Use The Mixer</h2>
      <div className={landing.outerSectionContainer}>
        <div className={landing.innerSectionContainer}>
          <h3>DEPOSIT</h3>
        <section>
          <figcaption>Step 1</figcaption>
         <figure><Image  src={step1} height={300} width={300} alt='launch app step 1' /></figure> 
          <figcaption>
            Go to app by clicking launch app
          </figcaption>
        </section>
        <section>
          <figcaption>Step 2</figcaption>
         <figure><Image src={step2} height={300} width={300} alt='Connect Wallet step 2' /></figure> 
          <figcaption>
            Connect your wallet to the dapp
          </figcaption>
        </section>
        <section>
          <figcaption>Step 3</figcaption>
         <figure><Image src={step3} height={300} width={300} alt='Select Wallet Provider step 3' /></figure> 
          <figcaption>
            Select your appropraite wallet provider
          </figcaption>
        </section>
        <section>
          <figcaption>Step 4</figcaption>
         <figure><Image src={step4} height={300} width={300} alt='Secret Key gen step 4' /></figure> 
          <figcaption>
            Enter a unique key or generate one, ensure your key is strong and random 
          </figcaption>
        </section>
        <section>
          <figcaption>Step 5</figcaption>
         <figure><Image src={step5} height={300} width={300} alt='Select Your Deposit Token step 5' /></figure> 
          <figcaption>
            Select the token you want to deposit
          </figcaption>
        </section>
        <section>
          <figcaption>Step 6</figcaption>
         <figure><Image src={step6} height={300} width={300} alt='Enter Amount Units step 6' /></figure> 
          <figcaption>
            Enter the amount you want to deposit, we offer our deposit amounts in units where 1 unit = 0.0001 ETH worth of any token,
            this means 10 units of USDT token would be 0.01 ETH worth of USDT, ETH is used as our base currency
          </figcaption>
        </section>
        <section>
          <figcaption>Step 7</figcaption>
         <figure><Image src={step7} height={300} width={300} alt='Deposit And Wait step 7' /></figure> 
          <figcaption>
            Click deposit and wait as this process may take from a few seconds to 5 minutes to complete 
          </figcaption>
        </section>
        <section>
          <figcaption>Step 8</figcaption>
         <figure><Image src={step8} height={300} width={300} alt='Token Spending Approval step 8' /></figure> 
          <figcaption>
            You would get an approval request from your wallet, this is to approve the equivalent amount of tokens, base on the amount of ETH you specified in the unit input, for the mixer to spend, you can select &quot;Use Default&quot; to only be allowed to spend the amount you want to deposit from your wallet, or select &quot;Max&quot; to allow the mixer to spend all of your specified token amount in your wallet ( the mixer will only take what it needs and not the entire amount you have specified ), then click &quot;Next&quot; and approve the spending
           <br />
           <text style={{color:'red'}}> &apos; Note the approval request will not show if you are using ethereum as your deposit token you would be ask to make a simple transfer confirmation &apos;</text>
          </figcaption>
        </section>
        <section>
          <figcaption>Step 9</figcaption>
         <figure><Image src={step9} height={300} width={300} alt='X,Y and Secret Keys step 9' /></figure> 
          <figcaption>
            Once the transaction is completed you will receive 3 keys, x , y and secret, these must be stored safely, you have the option to store them in your browser storage and when done with them you can clear them, these keys would be used to verify yourself when you want to withdraw your money from the mixer
          </figcaption>
        </section>
      </div>
      <div className={landing.innerSectionContainer}>
        <h3>Withdrawal</h3>
      <section>
          <figcaption>Step 1</figcaption>
         <figure><Image  src={step1} height={300} width={300} alt='launch app step 1' /></figure> 
          <figcaption>
            Go to app by clicking launch app
          </figcaption>
        </section>
        <section>
          <figcaption>Step 2</figcaption>
         <figure><Image src={step2} height={300} width={300} alt='Connect Wallet step 2' /></figure> 
          <figcaption>
            Connect your wallet to the dapp
          </figcaption>
        </section>
        <section>
          <figcaption>Step 3</figcaption>
         <figure><Image src={step3} height={300} width={300} alt='Select Wallet Provider step 3' /></figure> 
          <figcaption>
            Select your appropraite wallet provider
          </figcaption>
        </section>
        <section>
          <figcaption>Step 4</figcaption>
         <figure><Image src={wstep4} height={300} width={300} alt='Switch to withdrawal step 4' /></figure> 
          <figcaption>
            Switch to the withdrawal tab
          </figcaption>
        </section>
        <section>
          <figcaption>Step 5</figcaption>
         <figure><Image src={wstep5} height={300} width={300} alt='Fill in the inputs step 5' /></figure> 
          <figcaption>
            Fill in the inputs accordingly, the recipient address you want to withdraw to, in what token do you want the recieve your money, the amount you want to withdraw this value is not in units but in ETH directly, <text>&apos;Note: Ensure the total amont you want to withdraw at a go is equal to the total amount you depoited&apos;</text>
          </figcaption>
        </section>
        <section>
          <figcaption>Step 6</figcaption>
         <figure><Image src={wstep6} height={300} width={300} alt='Fill in the inputs, with ultiple withdrawals step 6' /></figure> 
          <figcaption>
            You can withdraw to multiple wallets in as various tokens, just click the &quot;+&quot; icon to add more input forms where you can fill in the details appropraitly, the maximum is 5, <text>&apos;Remember to ensure your total of all the withdrawal matches the depoit amount, the total is displayed at the bottom for ease&apos;</text>
          </figcaption>
        </section>
        <section>
          <figcaption>Step 7</figcaption>
         <figure><Image src={wstep7} height={300} width={300} alt='Input X,Y,Secret step 7' /></figure> 
          <figcaption>
            You are to fill the x, y, secret fields with the respective values given when you deposited
          </figcaption>
        </section>
        <section>
          <figcaption>Step 8</figcaption>
         <figure><Image src={wstep8} height={300} width={300} alt='Withdraw step 8' /></figure> 
          <figcaption>
            Click withdraw and wait a few seconds for the withdrawal to process
          </figcaption>
        </section>
        <section>
          <figcaption>Step 9</figcaption>
         <figure><Image src={wstep9} height={300} width={300} alt='Fill in the inputs step 9' /></figure> 
          <figcaption>
            Confirm your wallet request and wait for confirmation that your withdrawal was successful
          </figcaption>
        </section>
        </div>

      </div>
     </section> 
  )
}

export default Section2