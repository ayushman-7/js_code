const myArr=[3,4,2,5,3]
const Arr = new Array(1,2,3,4,5)
// console.log(Arr);


//Array Methods

Arr.push(6);
console.log(Arr);
Arr.pop()

Arr.unshift(9)
Arr.shift()

console.log(Arr.includes(9));
console.log(Arr.indexOf(3))
console.log(Arr);

console.log(Arr.slice(1,3))
console.log(Arr.splice(1,3))
console.log(Arr)

const all= [...myArr,...Arr]

console.log(all)





