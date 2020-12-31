const fs = require("fs");

function leer(ruta,cb){
    fs.readFile(ruta,(err,data)=>{
        //Leido
        //Te bota un buffer
        cb(data.toString());
    });
}
function escribir(ruta,contenido,cb){
    fs.writeFile(ruta,contenido,(err)=>{
        if(err){
            console.error("No he podido escribirlo",err);
        }else{
            console.log("Se ha escrito correctamente");
        }
    });
}
function borrar(ruta,cb){
    fs.unlink(ruta,cb); 
}
//escribir(__dirname+"/archivo1.txt","Soy un gosu",console.log);
//leer(__dirname+"/archivo.txt");
borrar(__dirname+"/archivo1.txt",console.log);//bota un null porque no hay error