//callback
//function heavyCompute(n, callback) {
//    var count = 0, i, j;
//    for (i = n; i >0; --i) {
//        for (j = n; j > 0;--j){
//            count += 1;
//        }
//    }
//    callback(count);
//}
//heavyCompute(10000, function (count) {
//    console.log(count);
//})
//example
//function heavyCompute(n) {
//    var count = 0, i, j;
//    for (i = n; i > 0; --i) {
//        for (j = n; j > 0;--j){
//            count += 1;
//        }
//    }
//}
//var t = new Date();
//setTimeout(function () {
//    console.log(new Date()-t);
//}, 1000);

//heavyCompute(50000);

//
//function sync(fn) {
//    return fn();
//}
//try {
//    sync(null);
//} catch (e) {
//    console.log("error:%s",e.message);
//}

//
//function async(fn, callback) {
//    setTimeout(function () {
//        callback(fn());
//    },0);
//}
//try {
//    async(null, function (data) {
//        //
//    });
//} catch (e) {

//}

////
//function async(fn,callback) {
//    setTimeout(function () {
//        try {
//            callback(fn());
//        } catch (e) {
//            console.log(e);
//        }//因为代码执行路径被打断了，我们就需要在异常冒泡到断点之前用try语句把异常捕获住
        
//    },0);
//}
//try {
//    async(null, function (data) {
//        //do
//    });
//} catch (e) {
//    console.log("ERR:%s",e.message);
//}

//同步/异步造成大量的复杂的回调嵌套，再嵌套，再回调
//function main() {
//    syncA();
//    syncB();
//    syncC();
//}
//try {
//    main();
//} catch (e) {
//    //
//}
//NodeJS提供了domain模块，可以简化异步代码的异常处理。
//process.on("uncaughtException", function (err) {
//    console.log("err:%s",err.message);
//});
//setTimeout(function (fn) {
//    fn();
//});

function async() {
    asyncA(request, function (err,data) {
        if(err){
            callback(err);
        } else {
            asyncB(request, function (err,data) {
                if(err){
                    callback(err);
                } else {
                    asyncC(request, function (err,data) {
                        if(err){
                            callback(err);
                        } else {
                            callback(null,data);
                        }
                    });
                }
            });
        }
    });
};
http.createServer(function (request,response) {
    async(request, function (err,data) {
        if (err) {
            response.writeHead(500);
            response.end();
        } else {
            response.writeHead(200);
            response.end(data);
        }
    });
});
