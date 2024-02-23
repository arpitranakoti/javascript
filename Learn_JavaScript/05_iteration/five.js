const coding=["js","ruby","java","python","cpp"]

// coding.forEach( function(value){
//     console.log(value)
// })

//arrow function
// coding.forEach( (num)=>{
//     console.log(num)
// })

// function printMe(item){
//     console.log(item)
// }
// coding.forEach(printMe);

// coding.forEach( (num,index,arr)=>{
//     console.log(num,index,arr)
// })


//[{},{},{}] :iteration in obj inside arr
const myCoding=[
    {
        langName:"javaScript",
        langFileName:"js"
    },
    {
        langName:"java",
        langFileName:"java"
    },
    {
        langName:"python",
        langFileName:"py"
    }
]
myCoding.forEach((item)=>{
  console.log(item.langName);
})