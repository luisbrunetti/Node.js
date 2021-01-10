// Manejo de encriptaciones 
const bcrypt = require("bcrypt");
console.log(bcrypt);

const password = "1234Segura!";

const scndpassword = "asd";
bcrypt.hash(password,5, (err,hash) => {
    console.log("hash "+ hash);
    bcrypt.compare(password,hash, (error,result) =>{
        console.log(error);
        console.log(result);
    })
})//no ejectuar en la fucnion sincrona


 
