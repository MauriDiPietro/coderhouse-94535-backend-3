process.on('uncaughtException', (error)=>{
    console.log(error.message);
    console.log(error.stack);
})

const funcionQueGeneraError = () => {
    console.log('ejecutando algo...');
    throw new Error('error en ejecucion')
}

funcionQueGeneraError()