const email=[]

if(email){
    console.log("got the mail")
}
else{
    console.log("didn't get the mail")
}

// falsy value

// false,0,-0,BigInt 0n,"",null undefined,NaN

// truthy value

// "0",'false'," ",[],{},function(){}

if(email.length===0){
    console.log("Array is empty")
}

const obj={}
if(Object.keys(obj).length===0){
    console.log("object is empty")
}


let var1;

//val1=null ?? 10
var1=undefined ?? 15
console.log(var1)