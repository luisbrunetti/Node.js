
//Variables de entorno
let nombre = process.env.NOMBRE || 'sin nombre';
let web = process.env.web || "No tengo web";
/**
 * Consola 
 * NOMBRE=CARLOS node entorno.js
 * web=luisbrunetti NOMBRE=CARLOS node entorno.js
 * Todas las varaibles de entorno se ponen en mayuscula
*/
console.log("hola "+nombre);
console.log("Mi web es "+ web);