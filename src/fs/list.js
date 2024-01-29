import {unlink, readdir} from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
const __dirname = path.dirname(fileURLToPath(import.meta.url)); 

const list = async () => {
    try {
        readdir(__dirname, (err, files) => {
          if (err) {
            throw new err;
          }
          if (!files.includes("files")) 
            throw new Error("files folder not found")
          files.forEach(file=>{
            console.log(file);
          })
           
        });
      } catch (error) {
        console.log(`FS operation failed: ${error}`);
      }
};

await list();