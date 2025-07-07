const os=require('os');

console.log("CPU HostName:"+os.hostname());
console.log("Platform Of CPU:"+os.platform());
console.log("CPU Architure:"+os.arch());
console.log("CPU CPUS:"+os.cpus());
console.log("TOTAL MEMARY:"+os.totalmem());
console.log("FREE MEMARY:"+os.freemem());
console.log("UP TIME OF CPU:"+os.uptime());
console.log("HOME DIRECTORY:"+os.homedir());
console.log("TYPE:"+os.type());
