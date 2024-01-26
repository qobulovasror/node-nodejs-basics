import process from 'node:process';

const parseEnv = () => {
    try {
        const envs = Object.entries(process.env).filter((e) => e[0].startsWith("RSS_"));
        envs.forEach(e=>{
            process.stdout.write(e[0]+"="+e[1]+"; ")
        })
    } catch (error) {
        console.log(error);
    }
};

parseEnv();