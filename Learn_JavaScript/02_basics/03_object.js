//singleton



//object literalss
const sym=Symbol("key1")


const User={
    //interview : use symbol inside object
    // sym:"mykey1", // not using as symbol
    [sym]:"mykey1",// using as symbol
    name:"arpit",
    age:17,
    "full name":"Arpit_ranakoti",//cannot access using (.dot)
    location:"rishikesh",
    isLoggedIn:false,
    lastLogin:["mon","sat"]
}
// console.log(User.name);
// console.log(User["name"]);
//console.log(User["full name"]);
// console.log(User[sym]);
// console.log(typeof User.sym);
// console.log(typeof User[sym]);

User.age=23
// Object.freeze(User)
User["full name"]="abv_r"
// console.log(User);


User.greeting=function(){
 console.log("hello user");
}
User.greetingTwo=function(){
 console.log(`hello user , ${this.name}`);
}

console.log(User.greeting);
console.log(User.greeting());
console.log(User.greetingTwo());