const os = require("os");

console.log(os.arch());
//Se puede utilizar para saber qeu ssitemas ioperativo esta utiliando el programa
console.log(os.platform());
console.log(os.cpus().length);
console.log(os.constants);
console.log(os.freemem()/1024/1024/1024 + "GB");
const SIZE = 1024;
function GB(bytes){
    return bytes/(SIZE**3) + "GB";
}
console.log(GB(os.freemem()));
console.log(GB(os.totalmem()));
console.log(os.homedir());
console.log(os.tmpdir());
console.log(os.hostname);
console.log(os.networkInterfaces);




