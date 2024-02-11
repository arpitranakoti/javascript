
//---------->stack copy of variable
let myYoutubeName="Arpit_ranakoti"
let newName=myYoutubeName
newName="aa"
console.log(myYoutubeName)
console.log(newName)

//---------->heap same refference to all 
let user={
    email:"ar@googlr.com",
    upi:"232@ybl"
}
let user2=user
user2.email="aaaa@gmail.com"
console.log(user2);
console.log(user)

