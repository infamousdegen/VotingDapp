import { StandardMerkleTree  } from "@openzeppelin/merkle-tree";
import fs from "fs";

const values = [["0xb24156B92244C1541F916511E879e60710e30b84"],
                ["0xB6Fbe9910e3373Cb2e7c038B94E6Cb20051e6a1A"],
            ["0x6d82046071d07f22b5e2b1c4f404efa1dbfdff05"]];

const tree = StandardMerkleTree.of(values,["address"]);

console.log('Merkle Root',tree.root);

fs.writeFileSync("tree.json", JSON.stringify(tree.dump()));