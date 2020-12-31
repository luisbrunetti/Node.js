const http = require("http");
/*
http.createServer(function (req,res){
    console.log("NUeva petición");
    console.log(req.url);
    res.writeHead(201,{"Content-Type" : 'text/plain'});
    res.write("hola, ya se usar http de NOde js ");
    res.end();
}).listen(3000);*/
http.createServer(router).listen(3000);
function router(req,res){
    console.log("Nueva petición");
    console.log(req.url);
    switch(req.url){
        case "/hola":
            res.write("Hola que tal");
            res.end();
            break

        default:
            res.write("ERROR 404 ");
            res.end()
    }
}


console.log("Escuchando http en el puerto 3000");