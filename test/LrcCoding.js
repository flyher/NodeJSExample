//example 实例 将目录下所有歌词文件转换为utf-8编码
//转是转了，成乱码了。。。。。
var fs = require("fs");
var path = require("path");
function travel(dir, callback) {
    fs.readdirSync(dir).forEach(function (file) {
        var pathname = path.join(dir, file);
        console.log(pathname);
        var str = fs.readFileSync(pathname, "binary");//.toString("utf-8");
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
travel("lrc\\", function (msg) {
    console.log(msg);
});
