import { web3Deposit } from "@/BE/functions/Deposit";
import { proofDeposit } from "@/BE/functions/zokratesDeposit";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
 try{ 
  const {r} = await req.json();
  console.log(r)
  const hash = await proofDeposit(r);
  return NextResponse.json(hash)
}  catch(err:any){
    return NextResponse.error()
}
}
