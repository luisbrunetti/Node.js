
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
 
// sudo npm install -g nodemon
//Nodemon se ejecuta cuando hagas un cambio
// sirve demasiado cuando se  tiene procesos que demoran en ejecutarse
// UN ejemlpo mas complejo en pm2 que se utiliza para producción
//NO USAR NODEMON PARA ENTORNOS DE PRODUCCIÓON PORQUE DARAS MAS PROBLEMAS QUE SOLUCIONES
// sudo npm install -g pm2
// pm2 start entorno.js 
console.log("asdklñ");
console.log("pm2");
console.log("pm2");