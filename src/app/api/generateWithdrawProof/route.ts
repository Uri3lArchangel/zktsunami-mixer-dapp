import { splitNumber } from '@/BE/functions/shift'
import { NextResponse } from 'next/server'
import {generateWithdrawlProof} from '../../../BE/functions/zokratesWithdraw'

interface RequestBody{
    x:string;
    y:string;
    secret:string;
    total:string;
}

export async function POST(request:Request) { try{
const {x,y,secret,total}:RequestBody = await request.json()
const data = splitNumber(`${secret}`)
if(total == '10000000000000000' || total == '100000000000000000' || total == '1000000000000000000' || total == '5000000000000000000' || total == '10000000000000000000'){
    data.push(total)
    data.push(x)
    data.push(y)

let proof = await generateWithdrawlProof(data)
return NextResponse.json({'status':proof})
}
return NextResponse.json("Invalid Total Amount Withdrawal",{
    status:400
})

}catch(err:any){
return NextResponse.json("Verification error: ensure the keys are correct",{
    status:400
})

}


}