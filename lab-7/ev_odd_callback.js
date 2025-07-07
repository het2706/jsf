function ch(n,callback){
    if(n%2==0)
    {
       callback(null,"even");
    }
    else{
        callback(null,"odd");
    }
}

ch(30, function(even,odd){
    if(even){
                console.log(even);

    }
    else{
                console.log(odd);

    }
})

