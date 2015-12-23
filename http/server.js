//example about http request
//var http = require("http");
//http.createServer(function (request, response) {
//    response.writeHead(200, {
//        "Content-Type":"json"
//    });
//    response.end("Hello World\n");
//}).listen(8808);

//example request
//var http = require("http");
//http.createServer(function (request, response) {
//    var body = [];
//    console.log(request.method);
//    console.log(request.headers);
//    request.on("data", function (chunk) {
//        body.push(chunk);
//    });
//    request.on("end", function () {
//        body = Buffer.concat(body);
//        console.log(body.toString("utf-8"));
//    });
//}).listen(8888);

//example5 压缩返回数据给客户端
//var http = require("http");
//var zlib = require("zlib");
//http.createServer(function (request,response) {
//    var i = 1024, data = "";
//    while (i--) {
//        data += ".";
//    }
//    if ((request.headers["accept-encoding"] || "").indexOf("gzip") != -1) {
//        zlib.gzip(data, function (err, data) {
//            response.writeHead(200, {
//                "content-type": "text/plain",
//                "content-encoding": "gzip"
//            });
//            response.end(data);
//        });
//    } else {
//        response.writeHead(200, {
//            "content-type":"text/plain"
//        })
//        response.end(data);
//    }
//}).listen(8888);

//example6 理解
var http = require("http");
var zlib = require("zlib");
http.createServer(function (request,response) {
    
    console.log(request.headers["accept-encoding"]);
    
    var data = "example6代码部分";
    if ((request.headers["accept-encoding"]||"").indexOf("gzip")>=0) {
        zlib.gzip(data, function (err, data) {
            response.writeHead(200, {
                "content-type": "text/plain",
                "content-encoding":"gzip"
            });
            //不写请求头的话浏览器会当成文件下载
            response.end(data);
        });
    } else {
        response.writeHead(200, {
            "content-type":"text/plain"
        });
        response.end(data);
    }
}).listen(8888);
