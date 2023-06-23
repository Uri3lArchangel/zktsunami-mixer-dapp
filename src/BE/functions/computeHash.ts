import { splitNumber } from "./shift";

export const computeHash = async (text: string) => {
  let [a, b, c, d] = splitNumber(text);
  let zokratis = await import("zokrates-js");

  let zokratisProvider = await zokratis.initialize();

  const source = `
        import "hashes/sha256/512bitPacked" as sha256packed;
        def main() -> field[2] {
             field a=${a};
             field b=${b};
             field c=${c};
             field d=${d};
            field[2] h = sha256packed([a, b, c, d]);
            return h;
        }`;

  const artifacts = zokratisProvider.compile(source);
  const { output } = zokratisProvider.computeWitness(artifacts, []);

  const hashHex =
    "0x" +
    BigInt(JSON.parse(output)[0]).toString(16) +
    BigInt(JSON.parse(output)[1]).toString(16);
  const fields = JSON.parse(output);


  return { hash: hashHex, fields: fields };
};
