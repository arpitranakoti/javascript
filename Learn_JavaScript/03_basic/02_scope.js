
let a=300

if(true){
    let a=10
    console.log("INNER " ,a);
const b=20
var c =30
}
console.log(a);//error out of scope
// console.log(b);//same
// console.log(c);//work 