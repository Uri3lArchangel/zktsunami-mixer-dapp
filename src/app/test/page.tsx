// "use client"
// import { getSwapQuote } from '@/BE/functions/swap/UniswapPriceQuote'
// import { tokenStructureType } from '@/BE/functions/swap/config/config'
// import { TOKEN_INTERFACE } from '@/BE/functions/testSwap/src/libs/constants'
// import { quote,quote2 } from '@/BE/functions/testSwap/src/libs/quotes'
// import { Button } from 'antd'
// import React, { useEffect, useState } from 'react'

// type Props = {}

// function page({}: Props) {
// // const [output,setOutput] = useState<string>()

// const t:TOKEN_INTERFACE={
//     in:{
//         address:"0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2" ,
//         decimals:18,
//         symbol:"SAND",
//         name:"SAND"
//     },
//     out:{
//         address: "0xdAC17F958D2ee523a2206206994597C13D831ec7",
//         decimals:6,
//         symbol:"weth",
//         name:"Wrapped Ether"
//     },
//     amount:0.0001,
//     fee:3000
// }



//     const Quote = async()=>{
      
//         setOutput(await quote2(t))
//     }
//   return (
//     <div className='mt-60'>
//         <h1>output:{output}</h1>
//         <Button onClick={Quote}>quote</Button>
//     </div>
//   )
// }

// export default page