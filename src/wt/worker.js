import {
  Worker,
  isMainThread,
  parentPort,
  workerData,
} from "node:worker_threads";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);

// n should be received from main thread
const nthFibonacci = (n) =>
  n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

const sendResult = (n) => {
    if (isMainThread) {
        console.log("this is main thread");
        const worker = new Worker(__filename, { workerData: n });
        worker.on('message', (result) => {
            console.log('Result:', result);
        });
    } else {
        const result = nthFibonacci(workerData);
        parentPort.postMessage(result);
    }
};

sendResult(10);