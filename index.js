// const fs=require("fs");
// const path=require("path");
// const { dirname } = require("path/posix");
// // fs.mkdir(path.join(__dirname,"/api2"),{},(err)=>{
// //     if(err) throw err;
// // });
// const user="rafnas"
// fs.writeFile(path.join(__dirname,"/api","api.txt"),User: ${'user'} , (err)=>{
//     if(err) throw err;
// })   
const http=require("http")
http.createServer( (req,res)=>{
    console.log(req.url)
    res.write("Welcome man")
    res.end();
}).listen(3001,()=> console.log("server start"))