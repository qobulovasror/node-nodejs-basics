import {readFile, readdir} from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
const __dirname = path.dirname(fileURLToPath(import.meta.url)); 

const read = async () => {
    try {
        readFile(__dirname+"/files/fileToRead.txt", {encoding: "utf-8"}, (err, data) => {
            if(err) throw err;
            console.log("file contents : \n" + data);
        })
    } catch (error) {
        console.error(`FS operation failed: ${error}`);
    }
};

await read();