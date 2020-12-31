
var nombre = "Luis"
//Devuelve promesas
function hola(nombre){
    return new Promise(function(resolve, reject){
        setTimeout( function(){
            console.log("Hola, "+ nombre);
            resolve(nombre); //Pasa como parametros la variable nombre 
        },1000);
    });
}
function hablar(callbackHablar){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log("bla bla bla ");
            resolve(nombre);
            reject("hay un error ");
        }, 1000);
    });
}
//Devuelve promesas
function adios(nombre, otroCallback){
    return new Promise((resolve,reject) =>{
        setTimeout(function (){
            console.log("Adios ",nombre);
            resolve();
        },1000);
    })
}
function conversacion(nombre,veces,callback){
    if(veces >= 0){
        hablar(()=>{
            conversacion(nombre, --veces,callback);
        });
    } else{
        adios(nombre,callback);
    }
}/*
console.log("Iniciando proceso");
hola(nombre,function (nombre){
    conversacion(nombre,30,function(){
        console.log("proceso terminado");
    });
})*/
//----
console.log("Iniciando el proceso..");
hola("Carlos")
    .then(hablar)
    .then(hablar)
    .then(hablar)
    .then(hablar)
    .then(hablar)
    //Siempre poner un catch si se pone un then
    .then(adios)
    .then((nombre) => {
    console.log("Terminado el proceso");
    }).catch(error =>{
        console.error("Ha habido un error:");
        console.error(error);
    });