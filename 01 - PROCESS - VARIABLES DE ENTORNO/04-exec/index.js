import { exec } from "child_process";

const comando1 = 'ls -lh'

const comando2 = 'find /'

exec(comando2, (err, stdout, stderr)=>{
    if(err) {
        console.log('error al ejecutar el comando');
        
        console.log(err);
        return
    }

    if(stderr){
        console.log(stderr);
        return
    }

    console.log(stdout);
})