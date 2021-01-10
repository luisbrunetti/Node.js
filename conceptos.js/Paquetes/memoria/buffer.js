//let buffer = Buffer.alloc(4);
//let buffer = Buffer.from([1,2,3]); //CONjutno de datos binarios
let buffer = Buffer.from('Hola'); //trabajar con el datos en la version mas cruda que pueda existir
console.log(buffer);

//--
let abc = Buffer.alloc(26);
console.log(abc);
for (let i = 0 ; i < 26; i++){
    abc[i] = i + '97';
}
console.log(abc);