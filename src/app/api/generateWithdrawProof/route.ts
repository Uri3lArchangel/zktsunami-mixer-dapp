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
    data.push(total)
    data.push(x)
    data.push(y)

let proof = await generateWithdrawlProof(data)
return NextResponse.json({'status':proof})



}catch(err:any){
return NextResponse.json("Verification error: ensure the keys are correct",{
    status:400
})

}


}