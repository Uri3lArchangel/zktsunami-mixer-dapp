export async function proofDeposit(a) {
  let zokrates = await import("zokrates-js");

  const zokratesProvider = await zokrates.initialize();

  const source = `

      import "hashes/sha256/512bitPacked" as shaPacked;


      def main(private field a,private field b,private field c,private field d) -> field[2]{
          field[2] dp= shaPacked([a,b,c,d]);
        
         return dp;
      }
      
      
      `;
  const artifacts = zokratesProvider.compile(source);
  const { witness, output } = zokratesProvider.computeWitness(artifacts,(a));
  const keypair = zokratesProvider.setup(artifacts.program);
  const proof = zokratesProvider.generateProof(
    artifacts.program,
    witness,
    keypair.pk
  );
  const proofRefined = [proof.proof.a, proof.proof.b, proof.proof.c];


  return output;
}
 