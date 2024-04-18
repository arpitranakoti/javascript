// prototye:  (Arr,string,func...)[refference] ==> object ===>null 

function multiplyBy5(num)
{
    return num*5
}
multiplyBy5.power=2 //bta ta hai ki func obj bhi hai aur fuc, func bhi hai

console.log(multiplyBy5(5));
console.log(multiplyBy5.power);
    console.log(multiplyBy5.prototype);


    function createUser(username,score){
        this.username= username
        this.score=score
    }
// createUser.prototype.Name_of_method=function(){}


    createUser.prototype.increment=function(){
        this.score++ // this = jis  .=nai  | jisnai bhi bulaya usa kaam kardo current context ka 

    }
    createUser.prototype.printMe=function()
    {
        console.log(`Price is ${this.score}, jisnai bhi score pucha usaka score btado`) 
    }
    const chai = new createUser("chai",25)
    const tea =  createUser("tea",250) //error when call tea.fuc()

    chai.printMe() //will givee error  as we didnt told chai we injected additional properties so we make new to "func_call"

    // tea.printMe()


/* 
    A new object is created: The new keyword initiates the creation of new javaScript object.

    A prototype is linked: The newly created object get linked to the prototype property of the constructor fuction .This means that it has acess to properties and methods defined on the constructor's prtotype.

    The constructor is called: The constructor fuction is called with the specified argumetns and this bound to the newly created object if no explicit return value is specified from the constructor, javaScript assumes the , the newl;y created object to be the intended return value.

    The new object is returned: After the constructor function has been called , if it doesn't return a non-primitive value ( ovject ,array,function ,etc..),the newly created object is returned

 */

