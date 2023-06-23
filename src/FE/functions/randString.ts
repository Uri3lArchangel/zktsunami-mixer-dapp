import crypto from 'crypto'

const rotate = (a:number)=>{
    let output=0;
   a= parseInt(((a)*(100)).toFixed(2))
for(let i=0;i<a;i++){
    output += parseInt(((Math.random())*(100000)).toFixed(2))
}
return output
}


export const generate=()=>{

    
let rand = rotate(Math.random())
let hash = crypto.createHash("sha512").update(`${rand}`).digest("hex")
let length = hash.length
let secondInput = hash.substring(rand % length,(((rand**2)%length)+(length-(rand%length)-1)))


return crypto.createHash("md5").update(secondInput).digest("hex")
}

export const generateHash=(input:string)=>{
return crypto.createHash("sha256").update(input).digest("hex")
}