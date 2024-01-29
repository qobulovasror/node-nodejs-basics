import { rename as renameFile, readdir } from "fs";
import path from "path";
import { fileURLToPath } from "url";
const __dirname = path.dirname(fileURLToPath(import.meta.url));

const rename = async () => {
  try {
    readdir(__dirname + "/files/", (err, files) => {
      if (err)
        throw new err;
      
      if (files.includes("wrongFilename.txt") && !files.includes("properFilename.md")) {
        renameFile(__dirname+"/files/wrongFilename.txt", __dirname+"/files/properFilename.md", err=>{
            if(err) throw err;
        })
      } else {
        throw new Error("wrongFilename.txt file not found or properFilename.md already created");
      }
    });
  } catch (error) {
    console.log(`FS operation failed: ${error}`);
  }
};

await rename();
