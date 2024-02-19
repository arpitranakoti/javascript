const user={
    username:"Arpit",
    price : 999,

    welcomeMessage:function(){
        console.log(`${this.username} welcome to website`);
        console.log(this);
    }

}

// user.welcomeMessage()
// user.username="sam"
// user.welcomeMessage()
// console.log(this);


// here this -> give global object 
// here this.usernme give undefined
// function chai(){
//     let username="arpit"
// console.log(this);
// }
// chai();


// here this give {}
// here this.username give undefined
const chai=()=>{
    let username="arpit"
    console.log(this.username);
}
chai()

                // {}->use return
                // ()->not need to return

// const addTwo=(num1,num2)=>{
//     return num1+num2;
// }

// const addTwo=(num1,num2)=> num1+num2

// const addTwo=(num1,num2)=> (num1+num2)

    //to return object:we use {} and to return we use ()
    
const addTwo=(num1,num2)=> ({username : "arpit"})
console.log(addTwo(3,4))


const myArray=[2,5,3,7,8]

// myArray.forEach(funciton(){})
// myArray.forEach(()=>())
// myArray.forEach(()=>{})

