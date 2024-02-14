//singleton : declare using constuctor

// const User=new Object() // singleton obj

const User2={} // not a singleton
 User2.id="123d"
 User2.name="ammy"
 User2.isLoggedIn=false
// console.log(User2);

const regularUser={
    email:"xya@gmail.com",
    fullname:{
        userfullname:{
            firstname:"Arpit",
            Lastname:"ranakoti"
        }
    }
}
//console.log(regularUser.fullname.userfullname.Lastname);

const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"b"}
// const obj3={obj1,obj2}
// console.log(obj3);
// const result=Object.assign(obj1,obj2)  // merging
// const result2=Object.assign({},obj1,obj2)
// console.log(result);

const obj3={...obj1,...obj2}  // spread -- > similar to array  r=[...ad,...adg]
// console.log(obj3);

const users=[
    {
        id:1,
        email:"acg@fmail.com"
    }
    ,
    {
        id:2,
        email:"xdf#gamil.ocm"
    }
    ,
    {
        id:3,
        email:"xdf#gwqeamil.ocm"
    },
]

users[1].email
console.log(User2)

console.log(Object.keys(User2));
console.log(Object.values(User2));
console.log(Object.entries(User2));
console.log(Object.entries(User2));

console.log(User2.hasOwnProperty('isLoggedIn'));
console.log(User2.hasOwnProperty('isLogged'));