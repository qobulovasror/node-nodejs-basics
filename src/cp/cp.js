import { spawn } from 'child_process';
import path from "path";
import { fileURLToPath } from "url";
const __dirname = path.dirname(fileURLToPath(import.meta.url));

const spawnChildProcess = async (args) => {
    const child = spawn('node', [__dirname+'/files/script.js', ...args], { stdio: ['pipe', 'pipe', 'pipe', 'ipc'] });
    
    process.stdin.on('data', (chunk) => {
        child.stdin.write(chunk);
    });
    
    child.stdout.on('data', (data) => {
        process.stdout.write(data);
    });
    
    child.on('message', (message) => {
        console.log('Received message from child process:', message);
    });
};

// Put your arguments in function call to test this functionality
spawnChildProcess(['someArgument1', 'someArgument2']);