//example5 Buffer与string的转换
//var bin = new Buffer([0x68, 0x65, 0x6c, 0x6c, 0x6f]);
//bin[0];
//var str = bin.toString('utf-8');
//console.log(str);

//var bin = new Buffer("hello", "utf-8");
//console.log(bin);

//example6
//var bin = new Buffer([0x68, 0x65, 0x6c, 0x6c, 0x6f]);
//var dup = new Buffer(bin.length);

//console.log(bin);
//console.log(dup);

//bin.copy(dup);
//dup[0] = 0x48;

//console.log(bin);
//console.log(dup);

//example7
//var rs = fs.createReadStream(src);
//rs.on("data", function (chunk) {
//    rs.pause();
//    doSomething(chunk, function () {
//        rs.resume();
//    });
//});
//rs.on("end", function () {
//    cleanUp();
//});

////var rs = fs.createReadStream(pathname);
////rs.on("data", function (chunk) {
////    doSomething(chunk);
////});
////rs.on("end", function () {
////    cleanUp();
////});

//var rs = fs.createReadStream(src);
//var ws = fs.createReadStream(dst);

//rs.on("data", function (chunk) {
//    if (ws.write(chunk) === false) {
//        rs.pause();
//    }
//});
//rs.on("end", function () {
//    ws.end();
//});
//rs.on("drain", function () {
//    rs.resume();
//});

//var fs = require("fs");
//var pathname = "E:\\Work\\webcharm\\nodejs\\input.txt";
//fs.readFile(pathname, function (err, data) {
//    if (err) {
//        console.log(err);
//    } else {
//        console.log(data.toString("utf-8"));
//    }
//});


//var fs = require("fs");
//var pathname = "E:\\Work\\webcharm\\nodejs\\input.txt";//.replace(/\\/g, '/')
//try {
//    var data = fs.readFileSync(pathname);
//    console.log(data.toString("utf-8"));
//} catch (e) {

//}

//example path module
//var path = require("path");
//var cache = {};
//function store(key,value) {
//    cache[path.normalize(key)] = value;
//}
//store("foo/bar", 1);
//store("foo/baz//..bar", 2);
//console.log(cache);

//console.log(path.join("foo/","baz/","../bar"));
//console.log(path.extname("foo/bar.js"));

//example 递归算法
//function factorial(n) {
//    if (n === 1) {
//        return 1;
//    } else {
//        return n * factorial(n - 1);
//    }
//}

//console.log(factorial(100));

//example 遍历目录
//var fs = require("fs");
//var path = require("path");
//function travel(dir,callback) {
//    fs.readdirSync(dir).forEach(function (file) {
//        var pathname = path.join(dir, file);
//        //console.log(pathname);
//        if (fs.statSync(pathname).isDirectory()) {
//            travel(pathname, callback);
//        } else {
//            callback(pathname);
//        }
//    });
//}

//travel("E:\\Work\\webcharm\\nodejs", function (pathname) {
//    console.log("done:" + pathname);
//})

//example 去掉文档bom
//var fs = require("fs");
//function readText(pathname) {
//    var bin = fs.readFileSync(pathname);
//    console.log(bin.toString("utf-8"));
//    if (bin[0]===0xEF&&bin[1]===0xBB&&bin[2]===0xBF) {
//        bin = bin.slice(3);
//    }
//    console.log(bin.toString("utf-8"));
//}
//readText("input.txt");

//example gbk-utf-8
//var iconv = require("iconv-lite");
//var fs = require("fs");
//function readGBKText(pathname) {
//    var bin = fs.readFileSync(pathname);
//    console.log(iconv.decode(bin,"gbk"));
//}
//readGBKText("input.txt");

//example 替换文件内容，无视编码
//var fs=require("fs");
//function replace(pathname) {
//    var str = fs.readFileSync(pathname, "binary");
//    str = str.replace("foo", "bar");
//    fs.writeFileSync(pathname, str, "binary");
//}

//replace("input.txt");

//example 实例 将目录下所有歌词文件转换为utf-8编码
var fs = require("fs");
var path = require("path");
function travel(dir,callback) {
    fs.readdirSync(dir).forEach(function (file) {
        var pathname = path.join(dir, file);
        console.log(pathname);
        var str = fs.readFileSync(pathname,"binary");//.toString("utf-8");
        //var str = fs.writeFileSync(pathname);
        //callback(str);
        try {
            fs.writeFileSync(pathname, str, "utf-8");
            callback("done");
        } catch (e) {
            callback(e);
        }
    });
}
travel("E:\\Work\\webcharm\\nodejs\\lrc\\", function (msg) {
    console.log(msg);
});


//var fs = require("fs");
//var path = require("path");
//function travel(dir,callback) {
//    fs.readdirSync(dir).forEach(function (file) {
//        var pathname = path.join(dir, file);
//        //console.log(pathname);
//        if (fs.statSync(pathname).isDirectory()) {
//            travel(pathname, callback);
//        } else {
//            callback(pathname);
//        }
//    });
//}