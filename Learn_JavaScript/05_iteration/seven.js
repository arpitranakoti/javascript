// map : in scope we should return else auto return
const myNums=[1,2,3,4,5,6,7,8,9,10]

// const newNum=myNums.map( (num)=> num+10) // auto return
const newNum=myNums.map( (num)=>{return num+10})
// console.log(newNum);


//chaining
const newNums=myNums.map((nums)=> nums*10) // [10,20,30,40,...]
                    .map((nums)=>nums+1) //[11,21,31,41,...]
                    .filter((nums)=>nums>=40) // return 41,51,61,...
console.log(newNums);