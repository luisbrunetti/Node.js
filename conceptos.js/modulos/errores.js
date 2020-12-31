function otraFuncion(){
    return serompe();
}

function serompe(){
    return 3+ z ;
}

function seRompeAsincrona(cb){
    setTimeout(()=>{
        //return 3+z ; //Crashea cuando es asincrona apesar de que tenga un TRY CATCH
        //Porquye se esta ejecutando en otro hilo 
        //POR ello lo recomendable es realizaru n try cathc
        try{
            return 3+z ;
        } catch(err){
            console.error("Vaya,algo se ha roto .. ");
            cb(err);
            console.error("Pero no pasa nada lo hemos capturado");
        }
    },1000);
}

try{
    seRompeAsincrona((error)=>{
        console.error(error.message);
    });
} catch(err){
    console.error("ALgo se ha roto");
    console.error(err.message);
}
console.log("seto de aqui esta al final");                                     