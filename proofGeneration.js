import { StandardMerkleTree } from "@openzeppelin/merkle-tree";
import fs from "fs";

const tree = StandardMerkleTree.load(JSON.parse(fs.readFileSync("tree.json")));

for (const [i, v] of tree.entries()) {
    if (v[0] === '0xB6Fbe9910e3373Cb2e7c038B94E6Cb20051e6a1A') {
      const proof = tree.getProof(i);
      console.log('Value:', v);
      console.log('Proof:', proof);
    }
  }