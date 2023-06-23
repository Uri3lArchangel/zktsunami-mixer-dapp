

export function splitNumber(input) {
    const bigIntInput = BigInt(`${Buffer.from(input).toString("hex")}`);
    const num1 = (bigIntInput & BigInt("0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF"));
    const num2 = ((bigIntInput >> BigInt(128)) & BigInt("0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF"));
    const num3 = ((bigIntInput >> BigInt(256)) & BigInt("0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF"));
    const result=[`${num3}`,`${num2}`,`${num1}`]
    return result
  }
  

  

  