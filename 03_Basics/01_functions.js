// function sayMyName(){
//     console.log("Hello")
//     console.log("Ayushman")
// }

// sayMyName()
// let result;
// function add(num1,num2){
//     return num1+num2;
    
// }

// result=add(2,3)
// console.log(result)

// function login(username="Ayushman"){
//     if(!username){
//         console.log("please enter username ");
//         return
//     }
//     return`${username} just logged in`
// }

// console.log(login())


function cartvalue(val1,val2,...numb1){
    return numb1

}
console.log(cartvalue(200,400,500))



const user={
    username1:"ayu",
    price:"65"
}

function handleobject(anyobject){
    console.log(`username is ${anyobject.username1} and price is ${anyobject.price}`);


}
handleobject(user)

const newarray=[3885,36,565]

function arrayre(getarray){
    return getarray[1]

}
console.log(arrayre(newarray))