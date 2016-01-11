//var mongodb = require("mongodb");
//var server = new mongodb.server("local", 8888, { auto_reconnect: true });
//var db = new mongodb.db("mydb", server, { safe: true });

//db.open(function (err,db) {
//    if(!err){
//        console.log("con");
//    } else {

//    }
//});

//var $=require("")
//var fs = require("fs"),
//    mongodb = require("mongodb"),
//    http = reqire("http");

//function add() {
//    var server = new mongodb.server("local", 88888),
//        connect = new mongodb.db("test", server);
//    connect.open(function (err,db) {
//        db.collection("books", function (err,collection) {
//            collection.find(function (err,cursor) {
//                cursor.each(function (err,doc) {
//                    if (doc) {
//                        console.log("doc.title:"+doc.title);
//                    }
//                });
//            });
//        });
//    });
   

//}

//var MongoClient = require("mongodb").MongoClient;
//var dbstr = "mongodb://localhost:27017/wilsondbl";
//var insertData = function (db,callback) {
//    var collection = db.collection("books");
//    var data = [
//        {
//            "name": "121212",
//            "age":112
//        }, {
//            "name": "sdsds",
//            "age":1
//        }
//    ];
//    collection.insert(data, function (err,result) {
//        if(err){
//            console.log("err:" + err);
//            return;
//        }
//        callback(result);
//    });
//}

//MongoClient.connect(dbstr, function (err,db) {
//    console.log("connected!");
//    insertData(db, function (result) {
//        console.log(result);
//        db.close();
//    });
//});


//var mongo = require("mongodb");
//var connection = require("mongodb").connection;
//var server = require("mongodb").server;
////var db = new db("books", new server("localhost", connection.DEFAULT_PORT, {}));
//var db = new db("books", new server("localhost", 27017, {}));

//db.open(function (err, db) {
//    if (err) {
//        throw err;
//    } else {
//        console.log("sucessed！");
//        db.close();
//    }
//});
//db.on("close", function (err,db) {
//    if (err)
//        throw err;
//    else
//        console.log("closed!");
//});

var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/test");
var Book = mongoose.model("book", {
    id:String,
    description: String,
    isbn: String,
    author:String
});
var mybook = new Book({
    id: 2,
    description: "<p>Many Flex books cover the basics—this book does something different, and goes far further. The authors, leading Flash platform developers at Almer\/Blank, working with Adobe User Group communities, are the creators of the Rich Media Exchange (RMX), a social media network for Adobe developers. In covering just how the RMX was built, this book contains all the knowledge you need to build similar large-scale Rich Internet Applications with Adobe Flex.<\/p>\n<p>From the inception of the idea through to deployment, the authors show the techniques needed to plan and build advanced applications. You’ll learn how to use forms, styles, validators, video, sound analysis, and framework caching, ensuring you make the most of the new features introduced in Flex 3.<\/p>\n<p>Powerful applications require solid back ends. This book shows how to hook up a Flex application to PHP back-end systems such as Drupal and OpenAds. You’ll learn how various parts of the RMX were built, including the blogs, event calendar, jobs board, and advertising system—elements that come together to really showcase the power of Flex.<\/p>\n<p>The RMX is built by Adobe Developers for Adobe Developers—a rewarding community relationship that guarantees results. The same spirit is carried into this book, with the authors wanting and helping to take you to the next level of Flash Platform application development.<br>\nIn this book you’ll learn how to<br>\nEffectively plan, wireframe, specify, develop, and release large-scale Flex applications, and discover what other development tools you’ll want to start using immediately<br>\nMake your Flex applications look less like Flex with advanced styling and skinning techniques<br>\nHarness advanced Flex form features, including coding validators and building your custom form components<br>\nImplement a robust advertising system for a Flex application using OpenAds<br>\nBuild powerful, custom multimedia players in Flex, including video players with the native VideoDisplay class and from scratch, and music players with advanced sound visualization<\/p>\n<p>R Blank<\/p>\n<p>R is CTO of Almer\/Blank, an Adobe Solution Partner based in Venice, California, that specializes in video and application development for the Flash Platform, for clients including E! Entertainment, Live Nation, Microsoft, Apple, and IKEA. For over 13 years, he has been an interactive designer, developer, consultant, teacher, and author, specializing in the planning, development, and release of rich interfaces; R has specialized in Flash since 1999.<\/p>\n<p>R holds four Flash Certifications, was one of the first 50 certified Flash Developers in the world, is an author for the Flash MX 2004 Designer Certification Exam, and is a frequent contributor to the Adobe Edgenewsletter. In 2003, he founded and continues to manage LAFlash.org, a community of over 3,000 Flash industry professionals and home to three Adobe User Groups for the Flash Platform. R also serves on the information technology faculty at the University of Southern California Viterbi School of Engineering.<\/p>\n<p>Previously, R cofounded and served as director of product and design at Wildform, the makers of the first video encoder for Flash, where he cocreated Flix, the first video encoder for Flash (now owned by On2). R has an MBA in entrepreneurship from the UCLA Anderson School of Management and a BA in history from Columbia University, and has studied at Cambridge University (UK), the University of Salamanca (Spain), and the Nizhny Novgorod Institute of Foreign Languages (Russia).<br>\nChris Charlton<\/p>\n<p>Chris is a software architect at Almer\/Blank and an Adobe Flex champion. He is a CSSand ActionScript expert who successfully cannonballed into web development in the late ’90s and has been programming since childhood. Always caught up with the latest in Flash, Dreamweaver, Fireworks, and XML, Chris authored premium articles for the largest Dreamweaver\/ Flash community, DMXzone (<a href=\"http:\/\/www.dmxzone.com\">www.dmxzone.com<\/a>), and produced WebDevDesign, a popular web design and development podcast featured on iTunes. Somehow, Chris finds time to run an authorized Adobe user group, LA AIR, focused around open source and Adobe technologies.<\/p>\n<p>As a community leader, Chris remains a resident faculty member of the Rich Media Institute and lends himself to speak at large industry events, like JobStock, NAB, and FITC Hollywood. Brain cycles from Chris are always web standards, the Flash Platform, and accessibility.<br>\nOmar Gonzalez<\/p>\n<p>Omar is a senior application developer at Almer\/Blank who has been developing for the Web since 1997. He has acquired a strong sense for developing accessible sites employing web standards, open source projects, and frameworks like Drupal and CSS. During the quick rise of Flash, he began to incorporate the popular technology in the sites he worked on, adding Flash development as well as PHP and MySQL to his repertoire.<\/p>\n<p>He has developed Flash video applications for companies like eHarmony and has spoken at conferences like FITC on such topics as Flash video, Motion XML, and AIR. Over the past two years he has been developing Flex applications, harnessing the power of Flash Platform tech- nology to create cutting-edge Rich Internet Applications. Omar is on the resident faculty at the Rich Media Institute, teaching topics in Flex, HTML\/CSS, and web development, and he is an active member of the LA Flash user groups.<br>\nHasan Otuome<\/p>\n<p>Hasan is a senior application developer at Almer\/Blank, where he can usually be found developing Rich Internet Applications for the company’s clients. He is an Adobe Flex champion who espouses creative uses and combinations of Flash, Flex, AIR, PHP, MySQL, and ColdFusion for their benefits in creating unique user experiences.<\/p>\n<p>When not immersed in client development, Hasan can be found lending a helping hand to the development community at sites such as LAFlash.org, gotoAndLearn.com, thesourcecode.org, and ActionScript.org.<\/p>",
    isbn: "978-1-59059-896-2",
    author: "R Blank, Chris Charlton, Omar Gonzalez, Hasan Otuome"
});
mybook.save(function (err) {
    if (err)
        console.log("failed");
    else
        console.log("success");
});