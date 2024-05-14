//singlton

// object literals
//Object.create

const mysym=Symbol("key1")
const jsuser={
    name:"Ayushman",
    age:20,
    [mysym]:"abc",
    "email":"abc@google.com",
    location: "Alllahabad"
}

// console.log(jsuser.age)
// console.log(jsuser["email"])
// console.log(jsuser[mysym])

jsuser.age=23
//Object.freeze(jsuser)
jsuser.age=87
//console.log(jsuser)


jsuser.greeting= function(){
    console.log(`hii!!, ${this.name}`)
}

console.log(jsuser.greeting());