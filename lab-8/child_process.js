//Using EXEC Method :-

// const cp=require('child_process');

// cp.exec('dir c:\\',(err,stdout,stderr)=>{
//     if(err) throw err
//     if(stderr){
//         console.log("stderr",stderr);
//     }
//     else{
//         console.log("stdout",stdout);
//     }
// })


//Using SPAWN Method :-

const {spawn}  = require ( 'child_process');
const {sing}  = require ( 'crypto');


const child =spawn('ping',['google.com'],{
    shell : true,
});
    child.stdout.on('data',(data)=>{console.log(`stdout : ${data}`);});
        child.stderr.on('data',(data)=>{console.error(`stdout : ${data}`);});
    child.on('error',(error)=>{console.log(`stdout : ${message}`);});

    child.on('exit',(code,signal)=>{
        if(code)console.log(`Process Exited with code ${code}`);
        if(signal)console.log(`Process Killed with signal ${signal}`);
    });

    