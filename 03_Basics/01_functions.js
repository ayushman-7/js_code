function sayMyName(){
    console.log("Hello")
    console.log("Ayushman")
}

sayMyName()
let result;
function add(num1,num2){
    return num1+num2;
    
}

result=add(2,3)
console.log(result)

function login(username="Ayushman"){
    if(!username){
        console.log("please enter username ");
        return
    }
    return`${username} just logged in`
}

console.log(login())