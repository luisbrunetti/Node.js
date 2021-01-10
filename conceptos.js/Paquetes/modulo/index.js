//Traer nuestro modulio
const modulo = require("./modulo");
//ejecutar una funcion del modulo
console.log(modulo); //Sale vacio debido que se tiene que exportar
modulo.saludar();