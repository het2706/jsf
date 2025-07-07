const fs=require('fs');

// fs.readFile('fsdemo.js',(err=>{
//     if(err)   throw err;
//     console.log("File Data Read Successfully here:");
// }));

// fs.writeFile('abc.txt','Hello Everyone' ,(err=>{
//     if(err)  throw (err);
        
//     console.log("File Data Write Successfully here:");
// }));

fs.appendFile('fsdemo.js','inputString',(err=>{
    if(err)   throw err;
    console.log("File Data Append Successfully here:");
}));inputString