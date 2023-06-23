// "use client";
// import React, { Suspense, useEffect, useRef, useState } from "react";
// import { ethers } from "ethers";
// import {useRouter} from 'next/navigation'
// import { message } from "antd";
// import {computeHash} from '../BE/functions/computeHash'

// const Register = () => {
//   const router = useRouter()

//   let acc: null | string = null;
//   const [account,setAccount] = useState<string | null>(acc)
//   const [hash,setHash] = useState<string | null>(null)
//   const [fields,setFields] = useState<string | null>(null)
//   const secretRef = useRef<HTMLInputElement>(null);
//   const init = async () => {
//     const provider = new ethers.BrowserProvider(window.ethereum);
//     await provider.send("eth_requestAccounts", []);
//     const signer = await provider.getSigner();

//     setAccount(signer.address)
//   };



  
//   const register =async()=>{
// if(secretRef.current){  
//   console.log(secretRef.current.value)
//    const {fields,hash}= (await computeHash(secretRef.current.value))
  
//   setHash(hash)
//   setFields(fields)
//   console.log(fields,hash)
//   }
// }


//   useEffect(() => {
//     init()
//     return () => {

//     };

//   }, [account, key]);

//   return (
//     <div id="background" className=" py-4 mt-36 top-36 left-0 right-0 mx-auto bg-gray-400 px-4 sm:w-2/4 md:w-2/4 lg:w-1/3 ">
      
//       <section className="text-center ">
//         <h1 className="text-2xl font-bold">
//           Register An Account to work privately with
//         </h1>
//         <em>
//           <h2
//            className="text-white text-xl">
//             You would need a secret key to register with.
           
//           </h2>
//         </em>
//       </section>
//       <section className="flex my-4 flex-col items-center">
       
//         <div className="flex w-full justify-center items-center">
//           <hr className="w-full" />
//           <small className="text-lg">or</small>
//           <hr className="w-full" />
//         </div>
//         <input
//           ref={secretRef}
//           defaultValue={key!}
//           id="secretInput"
//           type="text"
//           placeholder="enter my own private key "
//           className="w-10/12 px-2 h-10 outline-none"
//         />
//         <button
//           onClick={async () => {
//             try{
//             if (account) {
//               if(secretRef.current){
//                 await register()
//                 window.localStorage.setItem('secret',secretRef.current.value)
               
//               }
//             }

//           }catch(err:any){
//             message.error(err.message,4)
//           }
//         }}
//           className="bg-blue-500 font-bold text-white w-2/5 py-2 my-4"
//         >
//           Register
//         </button>
        
//         <br />
//         <p className="text-center text-lg text-white">Ensure it is as unique as possible</p>
//         <em className="text-red-500 text-xl">note: Store your secret locally, as it would be necessary to resyncronize your account, we do not store your secrets for you </em>
//       </section>
//     </div>
//   );
// };

// export default Register;
