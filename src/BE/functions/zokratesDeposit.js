export async function proofDeposit(a) {
  let zokrates = await import("zokrates-js");
console.log(1)
  const zokratesProvider = await zokrates.initialize();
  console.log(2)

  const source = "import 'hashes/sha256/512bitPacked' as shaPacked;def main(private field a,private field b,private field c,private field d) -> field[2]{field[2] dp= shaPacked([a,b,c,d]);return dp;}";
      console.log(3)

  const artifacts = zokratesProvider.compile(source);
  console.log(4)

  const { witness, output } = zokratesProvider.computeWitness(artifacts,(a));
  console.log(5)

  const keypair = zokratesProvider.setup(artifacts.program);
  console.log(6)

  const proof = zokratesProvider.generateProof(
    artifacts.program,
    witness,
    keypair.pk
  );
  const proofRefined = [proof.proof.a, proof.proof.b, proof.proof.c];


  return output;
}
 