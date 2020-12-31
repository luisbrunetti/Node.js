
var nombre = "Luis"
function hola(nombre,miCallback){
    console.log("Hola, "+ nombre);
    setTimeout( function(){
        console.log("Estoy siendo asincrono");
        miCallback(nombre);
    },1000);
}
function hablar(callbackHablar){
    setTimeout(() => {
        console.log("bla bla bla ");
        callbackHablar();
    }, 1000);
}
function adios(nombre, otroCallback){
    setTimeout(function (){
        console.log("Adios ",nombre);
        otroCallback();
    },1000);
}/*
console.log("iniciando procesoo...");
hola(nombre, function () {
    hablar(() =>{
        hablar(()=>{
            hablar(()=>{
                adios(nombre, function(){
                    console.log("terminando proceso");  
                });
            }); 
        });
    });
});
*/
/////////////////////////////
function conversacion(nombre,veces,callback){
    if(veces >= 0){
        hablar(()=>{
            conversacion(nombre, --veces,callback);
        });
    } else{
        adios(nombre,callback);
    }
}
console.log("Iniciando proceso");
hola("Luis",function (nombre){
    conversacion(nombre,30,function(){
        console.log("proceso terminado");
    });
})