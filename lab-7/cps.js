function add(a,b,callback){
    callback(a+b);
}

add(15,25,(val)=>(console.log(val)));