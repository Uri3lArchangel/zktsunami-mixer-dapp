import { generate, generateHash } from "@/FE/functions/randString"
import { NextResponse } from "next/server"


export async function GET(req:Request) {
    const {searchParams} = new URL(req.url)
    const address = searchParams.get("address")
    let randomString = generateHash(`${generate()+address}`)

    return NextResponse.json({"key":randomString})
}