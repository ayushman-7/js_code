const user={
    username:"Ayushman",
    price:99,

    welcome:function(){
        console.log(`${this.username}, welcome`);
        console.log(this)
    }
}
user.welcome()
user.username="SAM"
user.welcome()
console.log(this)

function chai(){
    let username="Auuh"
    console.log(this.username)
}
chai()

// const chai =()=>{
//     let username="Auuh"
//     console.log(this)

// }
// chai()

//const addtwo=(num1,num2)=> (num1+num2)

const addtwo=(num1,num2)=> ({username:"Ayus"})
console.log(addtwo(3,2))






