import { readdir, mkdir, copyFile } from "fs";
import path from "path";
import { fileURLToPath } from "url";
const __dirname = path.dirname(fileURLToPath(import.meta.url));

const copy = async () => {
  try {
    readdir(__dirname, (err, files) => {
      if (err) {
        throw new err;
      }
      if (files.includes("files") && !files.includes("files_copy")) {
        //create files_copy directory
        mkdir(__dirname+"/files_copy/", err => {
            if (err){
                throw err;
            }
        })

        //read and copy files
        readdir(__dirname+"/files/", (err, files) => {
            if (err) throw err;
            for(let i=0;i<files.length;i++) {
                let source = path.join(__dirname + "/files/" + files[i]);
                let destination = path.join(__dirname + '/files_copy/' + files[i]);
                copyFile(source, destination, err=>{
                    if(err) throw err;
                });
            }
        })
      } else {
        throw new Error("file already created or file not found");
      }
    });
  } catch (error) {
    console.log(`FS operation failed: ${error}`);
  }
};

await copy();
