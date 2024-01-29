import { Worker, isMainThread, parentPort, workerData }from 'worker_threads';
import os from 'os';
import path from "path";
import { fileURLToPath } from "url";
const __dirname = path.dirname(fileURLToPath(import.meta.url));


const numCPUs = os.cpus().length;

const workerResults = [];
let completedWorkers = 0;

const performCalculations = async () => {
    const createWorker = (data) => {
        const worker = new Worker(__dirname+'/worker.js', { workerData: data });
        worker.on('message', (result) => {
            workerResults.push({ status: 'resolved', data: result });
            completedWorkers++;
            if (completedWorkers === numCPUs) {
                console.log(workerResults);
            }
        });
        worker.on('error', (error) => {
            workerResults.push({ status: 'error', data: null });
            console.log(error);
            completedWorkers++;
            if (completedWorkers === numCPUs) {
                console.log(workerResults);
            }
        });
    };
    
    for (let i = 0; i < numCPUs; i++) {
        createWorker(10 + i);
    }
};

await performCalculations();