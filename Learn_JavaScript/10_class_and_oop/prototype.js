let myName="Arpit   "
let  myFullName="Ranakoti   "
/******to remove spaces aur finding accurate length  */

// console.log(myName.trim(" ").length)
// console.log(myFullName.trim(" ").length)

/**********but problem is we need to do trim method for each string  */

    // we can use stringName.truelength for every string can we do this ? 
// console.log(myName.truelength())

let myHero=["thor","spiderman"]

let heroPower={
    thor:"hammer",
    spiderman:"sling",

    getSpiderPower:function(){
        console.log(`spidy power is ${this.spiderman}`);
    }
}

/*
    fuction----------------------- > |          |
    array------------------------- > | object   | -----> | null |
    string------------------------ > |          |
((child fuc,arr,str)cannot acces each other property but can access object property )                   
 */
    Object.prototype.Arpit=function(){
        // adding Arpit property to object ,so every one can access 
        console.log(`Arpit is present in all objects `);
    }
    Array.prototype.HeyArpit=function(){
        // adding heyArpit function to array , so only array can access 
        console.log(`Arpit sai hello`)
    }
// heroPower.Arpit() //will have access of its own property
myHero.Arpit() // will have access of parent property ( object )

myHero.HeyArpit()   // will have access of its own property 
// heroPower.HeyArpit() // will not have access of child property 


/*****inheritance******/

const User={
    name:"chai",
    email:"chai@googl.com"
}

const Teacher={
    makeVideo:true,

}
const TeachingSupport={
    isAvailable:false
    }
const TASupport={
    makeAssignment:'Js assignment',
    fullTime:true,
    __proto__:TeachingSupport ,//borrowing access Tsupport property
}

Teacher.__proto__=User

//modern syntax

Object.setPrototypeOf(TeachingSupport,Teacher) // "teachSupport" can access the property of " teacher"


let anotherUsername="chaiaurcode       "

String.prototype.truelengthBatao=function()
{
    console.log(`${this}`)// this-> jisnai call kia usai print kro
    console.log(`true length is : ${this.trim().length}`)
}
anotherUsername.truelengthBatao()
"Arpit".truelengthBatao()
"iceTea".truelengthBatao()