

//read the file
var http=require("http");
var fs=require("fs");

http.createServer((req,res)=>{
    fs.readFile("adi.txt",(err,data)=>{
        res.write(data);

        res.end();
    })
}).listen(8000);