const http=require ("node:http");
const util=require ("node:util");

http.createServer((req,res)=>{
    res.end("hello World!!...");

}).listen(3000,()=>{
    console.log("server is running on",util.inspect('http://localhost:3000'));
})