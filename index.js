// var http = require("http");

// http.createServer(function(req,res){

//     res.write("This is my first Program!!!");
//     res.end();

// }).listen(8000)

var http= require("http");
var myClg = require("./cybrom");
http.createServer((req,res)=>{
    res.write("<h2>Welcome to My College!!!</h2>");
    res.write(myClg.myCollege())
    res.write("<h1>My Fees statement</h1>");
    res.write(myClg.myfees());
    res.end();
}).listen(9000);