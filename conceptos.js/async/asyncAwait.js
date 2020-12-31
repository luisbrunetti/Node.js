
var nombre ="Luis"
//Solo poniendo asyn en las funciones se convierte la funcion en una funcion asincronnaque se puede empezar a utilizar con el await
async function hola(nombre){
    return new Promise(function(resolve, reject){
        setTimeout( function(){
            console.log("Hola, "+ nombre);
            resolve(nombre); //Pasa como parametros la variable nombre 
        },1000);
    });
}
async function hablar(callbackHablar){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log("bla bla bla ");
            resolve(nombre);
            reject("hay un error ");
        }, 5000);
    });
}
//Devuelve promesas
async function adios(nombre, otroCallback){
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
}
async function main(){ //Convierte una secuencia asincrona en aparentemente asincrona 
    let name = await hola(nombre);
    //Si se les quita el await dejan de ser asincronos
    await hablar();
    await hablar();
    await adios(name);
    console.log("Termina el proceso");
}

console.log("Empezamos el proceso"); //Funciona de forma sincrona
main(); //SUcede de forma ASINCRONA
console.log("Segunda instrucción"); //FUnciona de forma sincrona
