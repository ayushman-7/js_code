let a =  300
if(true){
    let a=10
    const b=29
    
}
//var c=65
//console.log(a)
//console.log(b)
//console.log(a)

function one(){
    const username="Ayushman"

    function two(){
        const web="youtube"
        console.log(username)
    }
    //console.log(web);

    two()
}

//one()


//************************ */
console.log(addone(5))// it will run
function addone(value){
    return value+1
}


//console.log(addtwo(5)) // won't run because of declaration method of function
const addtwo=function(value){ //expression
    return value+2

}
console.log(addtwo(5))

