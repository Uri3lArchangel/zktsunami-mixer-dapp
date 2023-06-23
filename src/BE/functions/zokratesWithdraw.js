import fs from 'fs'
import pk from './pkWithdraw.json'

export async function generateWithdrawlProof(inputs) {
  let zokrates = await import("zokrates-js");

  const zokratesProvider = await zokrates.initialize();

  const source = `

      import "hashes/sha256/512bitPacked" as shaPacked;


def main(private field a,private field b,private field c,private field d,field h1,field h2) {
    field[2] dp= shaPacked([a,b,c,d]);
    assert(h1 == dp[0]);
    assert(h2 == dp[1]);

   return ;
}
      
      `;
  const artifacts = zokratesProvider.compile(source);
  const { witness, output } = zokratesProvider.computeWitness(artifacts,inputs);
  // console.log()
  const keypairPK = pk;
  // const keypair = zokratesProvider.setup(artifacts.program)
  const proof = zokratesProvider.generateProof(
    artifacts.program,
    witness,
    keypairPK
  );
  // const verifier = zokratesProvider.exportSolidityVerifier(keypair.vk)
  const proofRefined = [proof.proof.a, proof.proof.b, proof.proof.c];
    // fs.writeFileSync('./verifierWithdrawal.sol',(verifier))

  // fs.writeFileSync('./pkWithdraw.json',JSON.stringify([...keypair.pk]))
  // fs.writeFileSync(
  //   "./proofWithdraw.json",
  //   JSON.stringify([[...proofRefined], [...proof.inputs]])
  // );

  // console.log(proof.inputs)
  // console.log("proof",proofRefined,"inputs",proof.inputs,"output",output);
  return JSON.stringify([...proofRefined])
}

