const events = require('events')
const emitt=new events();

emitt.on("hello",(who)=>{
    console.log("Name is:",who);
})

emitt.emit("hello","Jayrajsinh");