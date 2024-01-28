import { createGunzip } from "zlib";
import { createReadStream, createWriteStream } from "node:fs";
import path from "path";
import { fileURLToPath } from "url";
const __dirname = path.dirname(fileURLToPath(import.meta.url));

const decompress = async () => {
  const decompressStream = createGunzip();
  const readStream = createReadStream(__dirname + "/files/archive.gz");
  const writeStream = createWriteStream(__dirname + "/files/fileToCompres.txt");

  readStream.pipe(decompressStream).pipe(writeStream);
};

await decompress();