import { open } from 'node:fs/promises';
import { createWriteStream } from 'node:fs';
import path from "path";
import { fileURLToPath } from "url";
import { createHash } from 'node:crypto'
const __dirname = path.dirname(fileURLToPath(import.meta.url));



const calculateHash = async () => {
    try {        
        const fd = await open(__dirname+'/files/fileToCalculateHashFor.txt');
        let data = ""
        fd.createReadStream().on("data", (chunk)=>{
            data+=chunk.toString();
        })
        const hashesData = createHash('sha256').update(data).digest('hex')
        console.log(hashesData);
        
    } catch (error) {
        console.log(error);
    }
};

await calculateHash();