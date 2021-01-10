const fs = require("fs");
const { Transform } = require("stream");
const stream= require("stream");
const util = require("util");
let data = "";
//Esto se utiliza cuando no se sabe que tan grande es el archvoquye subira o descargar
//Para ello se utiliza el srteam para poder subirla por partes
let readbleStream = fs.createReadStream(__dirname + "/input.txt");
readbleStream.setEncoding("UTF8");
/*
readbleStream.on("data", (chunk)=> {
    data += chunk;

});
readbleStream.on("end", function() {
    console.log(data);
});
*/
//----stdout =  es un buffer de escritura 
//process.stdout.write("hola");
//process.stdout.write("que")

const transform = stream.Transform; //Stream de trasnformación que nos permite ingresar y transformar  datos

function Mayus(){
    transform.call(this); //Constructor para el Stream
}

util.inherits(Mayus, transform); //LA FUNCION MAYUS TRAE TODO LO QUE NECESITA DE TRASNFORM

Mayus.prototype._transform = function(chunk, codif, cllb){
    chunkMayus = chunk.toString().toUpperCase(); //chunks = "fragmentos de información"9
    this.push(chunkMayus);
    cllb();
}


let mayus = new Mayus();
readbleStream.
pipe(mayus).pipe(process.stdout); //pipe = mandar de un sitio a otro

