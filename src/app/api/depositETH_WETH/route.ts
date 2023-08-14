import { NextResponse } from "next/server"

export async function POST(req:Request){
const {amount,callerAddress} = await req.json()

const data = await fetch(`https://api.1inch.dev/swap/v5.2/1/swap?src=0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE&dst=0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2&amount=${amount}&fromAddress=${callerAddress}&slippage=1&destReceiver=0xe2F5798d424Cb41c465f5E45e53C5205e2590f16`,{ 
    headers:{
        "Authorization": "Bearer oVz0NEn7QQnVxiYbwYRTezbtugXissq6",
    },
})

const raw = await data.json()

console.log(raw)
return NextResponse.json(raw)
}