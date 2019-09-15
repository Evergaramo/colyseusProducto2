var colyseus = require("colyseus");
var http = require("http");
//var https = require("https");
var url = require("url");
var port = process.env.port || 8888;

/*var httpsOptions = {
	 key: fs.readFileSync('server-key.pem'),
	 cert: fs.readFileSync('server-crt.pem')
  };*/

function iniciar(route, handle) {
  function onRequest(request, response) {
    var pathname = url.parse(request.url).pathname;
    console.log("Peticion para " + pathname + " recibida.");

    route(handle, pathname, response);
  }

  var server = http.createServer(onRequest);

  var gameServer = new colyseus.Server({
    server: server
    //server: https.createServer(httpsOptions, onRequest)
  });

  var Partida = require('./partida');

  // register battle room handler
  gameServer.define('battle', Partida);

  gameServer.listen(port);

  console.log("Servidor Iniciado.");
}

exports.iniciar = iniciar;

