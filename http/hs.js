//get/post
var http = require("http");
var items = [];
var server = http.createServer(function (request, response) {
    console.log(request.url);
    if("/"==request.url){
        switch (request.method){
            case "GET":
                show(response);
                break;
            case "POST":
                add(request, response);
                break;
            default:
                badRequest(response);
        }
    } else {
        notFound(response);
    }
}).listen(8888);

function show(response) {
    var html = "<html><head><title>1111</title></head>"
        + "<body>121213213213123213123132</body></html>";
    response.setHeader("Content-Type", "text/html");
    response.setHeader("Content-Length",Buffer.byteLength(html));
}

function notFound(response) {
    response.statusCode = 404;
    response.setHeader("Content-Type", "text/html");
    response.end("Not Found");
}

var qs = require("querystring");
function add(request,response) {
    var body = "";
    request.setEncoding("utf8");
    request.on("data", function (chunk) {
        body += chunk;
    });
    request.on("end", function () {
        var obj = qs.parse(body);
        items.push(obj.items);
        show(response);
    });
}