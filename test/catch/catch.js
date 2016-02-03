//catch html
var http = require("http");
var url = require("url");
var fs = require("fs");
var qs=require("querystring");
var items = [];
var server = http.createServer(function (req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
    if (req.method == "POST") {
        var item = "";
        var body = "";
        //req.setEncoding("utf8");
        req.on("data", function (data) {
            body += data;
        });
        
        console.log(body);
        req.on("end", function () {
            var POST = qs.parse(body);
            console.log(POST);
        });

        res.end("ok");

    } else {

    }

}).listen(8888);