import process from "node:process";
import { createWriteStream } from "node:fs";
import path from "path";
import { fileURLToPath } from "url";
const __dirname = path.dirname(fileURLToPath(import.meta.url));

const write = async () => {
  try {
    const file = createWriteStream(__dirname + "/files/fileToWrite.txt");
    process.stdin.pipe(file);
  } catch (error) {
    console.log(error);
  }
};

await write();
