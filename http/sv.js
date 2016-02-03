//var http = require("http");
//var url = require("url");
//var items = [];
//var server = http.createServer(function (request, response) {
//    response.setHeader("Access-Control-Allow-Origin", "*");
//    switch (request.method) {
//        case "POST":
//            var item = "";
//            request.setEncoding("utf8");
//            request.on("data", function (chunk) {
//                item += chunk;
//            });
//            request.on("end", function () {
//                items.push(item);
//                response.end("OK1\n");
//            });
//            break;
//        case "GET":
//            //items.forEach(function (item,i) {
//            //    response.write(i+")"+item+"\n");
//            //});
//            //response.end("ok2");

//            var body = items.map(function (item, i) {
//                return i + ")" + item;
//            }).join("\n");
//            response.setHeader("Content-Length", Buffer.byteLength(body));
//            response.setHeader("Content-Type", "text/plain;charset='utf-8'")
//            response.end(body);
//            break;
//        case "DELETE":
//            var path = url.parse(request.url).pathname;
//            var i = parseInt(path.slice(1), 10);
//            if (isNaN(i)) {
//                response.statusCode = 400;
//                response.end("Invalid item id");
//            } else if (!items[i]) {
//                response.statusCode = 404;
//                response.end("Item not found");
//            } else {
//                items.splice(i, 1);
//                response.end("OK\n");
//            }
//            break;
//    }
//}).listen(8888);

var http = require("http");
var parse = require("url").parse;
var join = require("path").join;
var fs = require("fs");
var root = __dirname;
var server = http.createServer(function (request,response) {
    var url = parse(request.url);
    //构造绝对路径
    var path = join(root, url.pathname);
    fs.stat(path, function (err,stat) {
        if(err){
            if ('ENOENT' == err.code) {
                response.statusCode = 404;
                response.end("Not Found");
            } else {
                response.statusCode = 500;
                response.end("Internal Server Error");
            }
        } else {
            response.setHeader("Content-Length", stat.size);
            var stream = fs.createReadStream(path);
            stream.pipe(response);
            stream.on("error", function (err) {
                response.statusCode = 500;
                response.end("Internal Server Error");
            });
        }
    });


    var stream = fs.createReadStream(path);
    //stream.on("data", function (chunk) {
    //    response.write(chunk);
    //});
    //stream.on("end", function () {
    //    response.end();
    //});
    stream.pipe(response);
    stream.on("error", function (err) {
        response.statusCode = 500;
        response.end("Internal Server Error");
    });

}).listen(8888);
