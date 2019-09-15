var querystring = require("querystring");
var jugadores = require("./jugador");

function iniciar(response, postData) {
    
    console.log("Manipulador de peticion 'inicio' fue llamado.");
    fs = require('fs');
    fs.readFile('vista/index.html', function (err, html) {
        if (err) {
            throw err; 
        }       
        response.writeHeader(200, {"Content-Type": "text/html"});  
        response.write(html);  
        response.end();  
    });

}

exports.iniciar = iniciar;
