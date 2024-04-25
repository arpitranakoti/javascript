//-----------> can we change the value of pi if yes then how or not then why ?
// Ans cannot do as its very hard coded false and check so we cannot bcz of writable false
// {
//   value: 3.141592653589793,
//   writable: false, 
//   enumerable: false,
//   configurable: false
// }

// const descripter=Object.getOwnPropertyDescriptor(Math,"PI")
// console.log(descripter)

// console.log(Math.PI)

// const myNewObj=Object.create(null)

const chai={
    name:"ginger chai",
    price:250,
    isAvailable:true,
    orderChai:function(){
        console.log("code faat jaiga")
    }
}
console.log(Object.getOwnPropertyDescriptor(chai,"name"))

Object.defineProperty(chai,'name',{
    // writable:false,
    enumerable:false
})
// console.log(Object.getOwnPropertyDescriptor(chai,"name"))


for (let [key,value] of Object.entries(chai)) {
    //to avoid code fatna
    if(typeof value !== 'function')
    {
        console.log(`${key}: ${value}`)
    }
    
}
