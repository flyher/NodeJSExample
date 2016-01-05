//create js expression
var VerEx = require("verbal-expressions");
var tester = VerEx()
    .maybe("asasas")
    .maybe("12121212")
    .maybe("_#$")
    .maybe("汉字")
    .endOfLine();

    //.startOfLine()
    //.then("http")
    //.maybe("s")
    //.then("://")
    //.maybe("www.")
    //.anythingBut(" ")
    //.endOfLine();

// Create an example URL
var testMe = "asdas";


if (tester.test(testMe))
    console.log("We have a correct URL "); 
else
    console.log("The URL is incorrect");

console.log(tester); 