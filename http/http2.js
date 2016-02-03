//var http = require("http");
//var server = http.createServer(function (request,response) {
//    //
//    //console.log(request);
//    //console.log(response);
//    //var a={
//    //    "name": "test",
//    //    "version":"1"
//    //};;
//    //response.setHeader("Content-Length", JSON.stringify(a).length);
//    //response.setHeader("Content-Type", "text/plain");

//    var url = "https://www.google.com";
//    var body = '<p>Redirecting to <a href="' + url + '>'
//        + url + '</a></p>';
//    ;
//    response.setHeader("Location", url);
//    response.setHeader("Content-Length", body.length);
//    response.setHeader("Content-Type","text/html");
//    response.statusCode = 302;
//    response.end(body);

//    //response.write(JSON.stringify(a));
//    //response.end();
//});
//server.listen(8888);

//encoding
//var http = require("http");
//var server = http.createServer(function (request, response) {
//    request.setEncoding("utf8");
//    request.on("data", function (chunk) {
//        console.log("parsed",chunk);
//    });
//    request.on("end", function () {
//        console.log("done parsing");
//        response.end();
//    })
//});

//string cache
var http = require("http");
var url = require("url");
var items = [];
var server = http.createServer(function (request, response) {
    switch (request.method) {
        case "POST":
            var item = "";
            request.setEncoding("utf-8");
            request.on("data", function (chunk) {
                item += chunk;
            });
            request.on("end", function () {
                items.push(item);
                response.end("OK\n");
            });
            break;
        case "GET":
            //var body= items.forEach(function (item, i) {
            //    response.write(i + ")" + item + "\n");
            //});
            //response.end();
            var body = items.map(function (item,i) {
                return i + ")" + item;
            }).join("\n");
            response.setHeader("Content-Length",Buffer.byteLength(body));
            break;
    }
});
server.listen(8888)