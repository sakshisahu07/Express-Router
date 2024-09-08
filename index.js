

var fs=require("fs");

fs.appendFile("raj.txt","welcome to cybrom bhopal",(err)=>{
    if(err) throw err;
    console.log("file succefully created");
})

