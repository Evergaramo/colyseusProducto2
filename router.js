var path = require('path');

function route(handle, pathname, response) {
  console.log("A punto de rutear una peticion para " + pathname);
  if (typeof handle[pathname] === 'function') {
    handle[pathname](response);
  }else if(pathname.match("\.css$")){
    var cssPath = path.join(__dirname, 'vista', pathname);
    var fileStream = fs.createReadStream(cssPath, "UTF-8");
    response.writeHead(200, {"Content-Type": "text/css"});
    fileStream.pipe(response);
  }else if(pathname.match("\.js$")){
    var jsPath = path.join(__dirname, 'vista', pathname);
    var fileStream = fs.createReadStream(jsPath, "UTF-8");
    response.writeHead(200, {"Content-Type": "text/javascript"});
    fileStream.pipe(response);
  }else if(pathname.match("\.svg$")){
    var imagePath = path.join(__dirname, 'vista', pathname);
    var fileStream = fs.createReadStream(imagePath);
    response.writeHead(200, {"Content-Type": "image/svg+xml"});
    fileStream.pipe(response);
  }else {
    console.log("No hay manipulador de peticion para " + pathname);
    response.writeHead(404, {"Content-Type": "text/html"});
    response.write("404 No Encontrado");
    response.end();
  }
}

exports.route = route;
