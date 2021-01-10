const { callbackify } = require("util");
function asincrona(callback){
    setTimeout(function () {
        try {
            let a = 3+z;
            callback(null, a);
        } catch(error){
            callback(error,null);
        }
    },1000);
}

//Error first callbacks siempre se tiene que seguir cada que se trabaje con funciones asincronas
//El try puede agarrar el error dentro de asincrona pero no de su callback porque esta funcionando dentro de otros sitios 
//THROW funciona para sincrones sincronas pero para asincronas no
try{
    asincrona((error,dato)=>{
        if(error){
            console.error("Tenemos un error");
            console.error(error);
            return false;
        }
        console.log("Todo esta ok");
   })
} catch(e){
    console.error("Hemos capturado un error");
    console.error(e);
}
