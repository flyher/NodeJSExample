//var child_process = require("child_process");
//var util = require("util");
//function copy(source,target,callback) {
//    child_process.exec(
//        util.format("cp -r %s/* %s",source,target),callback
//        );
//}

//copy("a.txt", "b.txt", function (err) {
//    //..
//    console.log(err);
//});

//exit
//try {

//} catch (err) {
//    process.exit(1);
//}

//function log() {
//    process.stdout.write(
//        util.format.apply(util, arguments) + "\n");
//}

////降权 test
//var http = require("http");
//http.createServer().listen(8888, function () {
//    var env = process.env,
//        uid = parseInt(env["SUDO_UID"] || process.getuid(), 10),
//        gid = parseInt(env["SUDO_GID"] || process.getgid(), 10);
//    console.log(env);
//    console.log(uid);
//    console.log(gid);
//});

//example 开线程
//var child_process = require("child_process");

//var child = child_process.spawn("node", ["../http/server.js"]);

//child.stdout.on("data", function (data) {
//    console.log("stdout:" + data);
//});
//child.stderr.on("data", function (data) {
//    console.log("stderr:"+data);
//});
//child.on("close", function (code) {
//    console.log("child process exited with code "+code);
//});

//example 进程通信
var child