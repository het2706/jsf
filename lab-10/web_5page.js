const http=require ("node:http");
const server = http.createServer((req,res)=>{
    switch (req.url){
        case "/":
            res.end("home page");
            break;
        case "/about":
            res.end("about page");
            break;
        case "/content":
            res.end("content page");
            break;
        case "/feedback":
            res.end("feedback page");
            break;
        case "/buy":
            res.end("buy page");
            break;
        default:
            res.end("404,Page Not Found:");
            break;
    }
});
server.listen(4000,()=>{
    console.log('http://localhost:4000');
});
