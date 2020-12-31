const {exec,spawn} = require("child_process"); //sintaxis de ECMAscript6
//const { fstat } = require("fs");
//const exec = require("child_process");
/*
exec("node globales.js", (err,stdout,sterr) =>{
    //"ls -ahl"
    if(err){
        console.error(err);
        return false;
    }
    console.log(stdout);
});
*/

let proceso = spawn("ls",["-ahl"]);
console.log(proceso.pid);
console.log(proceso.connected);
//stdout = standar out 
proceso.stdout.on("data",function (dato){
    console.log(proceso.killed);
    console.log(dato.toString());
});


proceso.on("exit",()=>{
    console.log("el proceso ha terminadop");
    console.log(proceso.killed);
})