//const process = require("process"); NO es necesario traerlo porque ya viene en los globales

process.on("exit", ()=>{ // No se ve porque ya se ha descoenctado
    console.log("El proceso acabo");
    setTimeout(() => {
        console.log("Esto no se va a ver nunca ");
    }, 1000);
})

process.on("beforeExit", ()=>{
    console.log("El proceso va a terminarq");
})

setTimeout(() => {
    console.log("Esto si se va a ver");
}, 1000);
process.on("uncaughtException", (err,origin) => { //Se capatura excepciones 
    console.log("Se nos ha olviado capturar un error");
    console.error(err);
}) // Excepciones que no se han capaturado

//funcionqueexiste();

//console.log("no se captura ");