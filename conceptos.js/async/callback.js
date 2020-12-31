
var nombre = "Luis"
function hola(nombre,miCallback){
    console.log("Hola, "+ nombre);
    setTimeout( function(){
        console.log("Estoy siendo asincrono");
        miCallback(nombre);
    },1000);
}
function adios(nombre, otroCallback){
    setTimeout(function (){
        console.log("Adios ",nombre);
        otroCallback();
    },1000);
}
console.log("iniciando procesoo...");
hola(nombre, function () {
    adios(nombre, function(){
        console.log("terminando proceso");  
    });
});


hola("carlos",function(){});