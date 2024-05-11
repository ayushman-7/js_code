let myDate =new Date()

// console.log(myDate.toDateString());
// console.log(myDate.toString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleDateString());
// console.log(typeof myDate);

let newdate= new Date(2024,4,11 )
console.log(newdate.toDateString())

let time=Date.now()

console.log(time);
console.log(newdate.getTime())
console.log(Math.floor(Date.now()/1000));


newdate.toLocaleString('default',{
    weekday: "long"
})