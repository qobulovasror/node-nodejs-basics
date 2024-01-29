import {unlink, readdir} from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
const __dirname = path.dirname(fileURLToPath(import.meta.url)); 

const remove = async () => {
    try {
        readdir(__dirname+"/files", "utf-8", (err, files)=>{
            if(err) throw err;
            if(!files.includes("fileToRemove.txt"))
                throw new Error("fileToRemove.txt not found in files")
            unlink(__dirname+"/files/fileToRemove.txt", err => {
                if(err) throw err;
            })
        })
    } catch (error) {
        console.log(`FS operation failed: ${error}`);
    } 
};

await remove();