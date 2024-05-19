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

singlton

//const tinder =new Object() // singlton
const tinder = {}  //non singlton
tinder.id="abc123"
tinder.name="ABC"
console.log(tinder)
const regular={
    email:"abc@123",
    fullname:{
        username:{
            firstname:"Ayushman",
            lastname:"Tripathi"
        }
    }
}
console.log(Object.keys(tinder))
console.log(Object.values(tinder))
console.log(Object.entries(tinder))
console.log(tinder.hasOwnProperty('id'))

// console.log(regular.fullname.username.lastname)


const obj1={1:"a", 2:"b"}
const obj2={3:"a", 4:"b"}
const ob4={...obj1,...obj2}
console.log(ob4)
const ob3=Object.assign(obj1,obj2)
console.log(ob3);
console.log(obj1);


const course ={
    coursename: "js",
    price:"99",
    courseinst:"ayu"
}

const {courseinst:inst}=course

console.log(inst);





