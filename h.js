//example about http request
//var http = require("http");
//http.createServer(function (request, response) {
//    response.writeHead(200, {
//        "Content-Type":"json"
//    });
//    response.end("Hello World\n");
//}).listen(8808);

//example request
var http = require("http");
http.createServer(function (request, response) {
    var body = [];
    console.log(request.method);
    console.log(request.headers);
    request.on("data", function (chunk) {
        body.push(chunk);
    });
});