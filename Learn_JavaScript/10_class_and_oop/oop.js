/*******************obj literal*****************/

            const user ={
                username:"Arpit",
                loginCount: 8,
                signedIn:true,
                "hello":"world",

                getUserDetails:function(){
                    console.log("got user Detail ");
                }
            }

            // console.log(user["signedIn"])
            // console.log(user.getUserDetails())


 /********** This *********************** */

// let Arr=[1,2,3] how map will now kitna loop krna hai 
// let Arr=[1,3,4,5]

// mon alag alag hota hai is week ka aur next week ka tho bta na padega konsai week ka (context ) batana padega na  tho this use kr tai hai 

            const week1={
                Monday:"1",
                Tuesday:"2",

                getUserDetails:function(){
                    // console.log(`Monday : ${Monday}`); // will throw error ass usko pata hi nahi konsai week ka monday vo bhar sai nahi le paiga ku ki block hai  so this use krainge 
                    // console.log(`Monday : ${this.Monday}`);
                    // console.log(this);// --> will give current context (ki kis current context ki baat kr rahai hai )
                }
            }

            // console.log("week1 :" + week1.getUserDetails())
            // console.log(this)



function User(username,loginCount,isLoggedIN) {
   this.username=username;
   this.loginCount=loginCount;
   this.isLoggedIN=isLoggedIN;

   this.greeting=function(){
        console.log(`welcome ${username}`)
   }

    return this   //by default return hota hi hai
}
/****************** overwirtting hoti hai ***********/

            // const userOne=User("Arpit",12,true)
            // const userTwo=User("chai",11,false)

/*********** Avoiding overwritting useing "new keyword "**** */
            const userOne=new User("Arpit",12,true)
            const userTwo=new User("chai",11,false)

            // console.log(userOne)
            // console.log(userTwo) 
/*

            1. new : subsai phelai { } empty obj create hota hai  ( instance bhi boltai hai .this sai aata hai ->{})
            2. construction fuction call hata hai new keyword kai karan jo , yai sarai argument ko pack krta hi aur de deta 
            3. this {} keyword kai andar sarai argument inject ho jatai hai
            4. humai mil jatai hai function kai andar
*/

/**************constuctor********* */
            console.log(userOne.constructor); // refference of your self here user
