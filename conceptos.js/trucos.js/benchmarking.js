let suma = 0;
console.time("bucle");
for(let i = 0; i < 10000000; i++){
    suma += 1;
}
console.timeEnd("bucle");
console.time("bucleAsincrono");
console.log("EMpieza el proceso asincrono")
asincrona();
function asincrona(){
    return new Promise((res,rej)=>{
        setTimeout( ()=>{
            console.log("termina el proceso asincrono");
            res();
        },1000);
    })
}
console.timeEnd("bucleAsincrono");




























































