console.log("algo");
console.info("algo");
console.error("algo");
console.warn("algo");
var tabla =[
    {
        a:1,
        b:"Z"
    },
    {
        a:2,
        b:"Otra"
    }
]
console.table(tabla);
/*
console.group("Conver");
console.log("Hola");
console.group("bla")
console.log("blabla");
console.log("blabla")
console.log("blabla");
console.groupCollapsed("bla");
console.log("Adios");
console.groupEnd("Conver")
console.log("Otra funciión");
*/
function function1(){
    //
    console.group("funcion1");
    console.log("Esto es de la funcion 1 ");
    console.log("Esto tambien");
    function2();
    console.log("Hemos vuelto a la 1 ");
    console.groupEnd("funcion1");
}

function function2(){
    //
    console.group("funcion2");
    console.log("Ahora estamos en la funcion2");
    console.groupEnd("funcion2");
}

console.log("empezamos");
function1();

//Contadores 
console.count("veces");
console.count("veces");
console.count("veces");
console.countReset("veces");console.count("veces");