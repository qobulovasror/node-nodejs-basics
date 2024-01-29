import { open } from 'node:fs/promises';
import path from "path";
import { fileURLToPath } from "url";
const __dirname = path.dirname(fileURLToPath(import.meta.url));

const read = async () => {
    try {        
        const fd = await open(__dirname+'/files/fileToRead.txt');
        fd.createReadStream().on("data", (chunk)=>{
            process.stdout.write(chunk.toString());
        })   
    } catch (error) {
        console.log(error);
    }
};

await read();