//example post
//var http = require("http");
//var options = {
//    hostname: "127.0.0.1",
//    port: 8888,
//    path: "/a",
//    method: "POST",
//    headers: {
//        "content-type":"json"
//    }
//}
//var request = http.request(options, function (response) {

//});
//request.write("内容");
//request.end();

//example 
//var http = require("http");
//http.get("http://www.baidu.com", function (response) {
//    var body = [];
//    console.log(response.statusCode);

//    console.log(response.headers);
//    response.on("data", function (chunk) {
//        body.push(chunk);
//    });
//    response.on("end", function () {
//        body = Buffer.concat(body);
//        console.log(body.toString("utf-8"));
//    });
//});

//example url para to object
//var querystring = require("querystring");
//var obj= querystring.parse("foo=bar&baz=qux&baz=quux&corge");
//console.log(obj.foo);

//console.log(querystring.stringify({ foo: 'bar', baz: ['qux', 'quux'], corge: '' }));

//example5 压缩处理服务器返回的数据
var http = require("http");
var options = {
    hostname: "127.0.0.1",
    port: 8888,
    path: "/",
    method: "GET",
    headers: {
        "appect-encoding": "gzip,deflate"
    }
};
http.request(options, function (response) {
    var body = [];
    response.on("data", function (chunk) {
        body.push(chunk);
    });
    response.on("end", function () {
        body = Buffer.concat(body);
        if (response.headers["content-encoding"]==="gzip") {
            zlib.gunzip(body, function (err,data) {
                console.log(data.toString());
            });
        } else {
            console.log(data.toString());
        }
    });

});