import process from 'node:process';

const parseArgs = () => {
    try {
        const args = process.argv
        args.splice(0, 2);

        for(let i=0; i<args.length; i=i+2){
            process.stdout.write(args[i].split("--")[1] + " is "+ args[i+1]);
            if (i !== args.length - 2){
                process.stdout.write(", ");
            }
        }
    } catch (error) {
        console.log(error);
    }
};

parseArgs();