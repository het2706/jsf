// const ch=(n)=>{
//     if(n%2==0)
//     {
//         return 1;
//     }
//     else{
//         return 0;
//     }
// }
// n=15;
// dis=ch(n);
// if(dis==1){
//     console.log("Number is Even:");
// }
// else{
//     console.log("Number is Odd:");
// }

function isOddeven(n,callback){
    if((n^1==0 && (n+1))){
        callback(null,"even");
    }
    else{
        callback(null,"odd");
    }
}
isOddeven(27, function(even,odd){
    if(even){
        console.log(even);
    }
    else{
        console.log(odd);
    }
})
