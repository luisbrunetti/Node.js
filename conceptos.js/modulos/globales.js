console.log(setInterval);
let i = 0;
let intervalo = setInterval(()=>{
    if(i === 3){
        clearInterval(intervalo)
        // Se puede utilizar para conexiones a base de datos 
    }
    i++;
    console.log("Hola");
},1000);

setImmediate(function () {
    console.log("oli")
});

console.log(__dirname);
console.log(__filename);
globalThis.miVariable = "elValor";
console.log(miVariable);
//TIP: Si no tengo que usar variables globales no usarlas, pues son un foco de problemas




