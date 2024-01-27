import {Transform} from "stream";

const transform = async () => {
  try {
    const reverseTransform = new Transform({
      transform(chunk, encoding, callback) {
        const reversedChunk = chunk.toString().split("").reverse().join("");
        this.push(reversedChunk);
        callback();
      },
    });

    process.stdin.pipe(reverseTransform).pipe(process.stdout);
  } catch (error) {
    console.log(error);
  }
};

await transform();
