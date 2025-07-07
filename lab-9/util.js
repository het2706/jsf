const util=require('util');


const obj=({Name : "Jayrajsinh" , Age : 20 ,
    address :{city : "Rajkot" , Pincode : 360003}});

console.log(util.format("Hello %s Welcome To Darshan University.Your are from %s.And You are %d Years Old."
    ,obj.Name,obj.city,obj.Age));