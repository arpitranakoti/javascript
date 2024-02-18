
let a=300

if(true){
    let a=10
    // console.log("INNER " ,a);
const b=20
var c =30
}
// console.log(a);//error out of scope
// console.log(b);//same
// console.log(c);//work 

function one(){
    const username="Arpit"

    function two(){
        const website="yt"
        // console.log(username);
    }
    // console.log(website);
    two()
}
one()

if(true){
    const username="ar"
    if(username==="ar")
    {
        const website=" yt"
        // console.log(username+website);
    }
    // console.log(name)
}
// console.log(username);


//++++++++++++++++++++++++++interesting +++++++++


console.log(add1(5))
function add1(num){
    return num+1
}




// add2(5)  // error 

const add2=function(num){
    return num+2
}

console.log(add2(5))  






