import {writeFile, readdir} from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
const __dirname = path.dirname(fileURLToPath(import.meta.url)); 

const create = async () => {
    try {
        readdir(__dirname+"/files/", (err, files) => {
            if(err){
                throw new Error("FS operation failed")
            }
            if(!files.includes("fresh.txt")){
                writeFile(__dirname + "/files/" + "fresh.txt", "I am fresh and young", {encoding: "utf-8"}, (err)=>{
                    if(err)
                        throw new Error(`Could not create fresh.txt ${err}`)
                })
            }else{
                throw new Error("FS operation failed")
            }

        });
    } catch (error) {
        console.log(error);
    }
};

await create();