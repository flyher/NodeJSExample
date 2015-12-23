var http = require("http");
var net=require("net")
var options = {
    port: 80,
    host: "127.0.0.1"
};
var client = net.connect(options, function () {
    client.write([
        "GET/HTTP/1.1",
        "user-agent:curl/7.26.0",
        "Host:www.baidu.com",
        "accept:*/*",
        "",
        ""
    ].join("\n"));
});
client.on("data", function (data) {
    console.log(data.toString());
    client.end();
});