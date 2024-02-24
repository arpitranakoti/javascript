// filter v/s forEach
// filter: returns
// forEach : not return until new space iscreted and pushed inside new space

const coding=["js","ruby","java","python","cpp"]

// const values=coding.forEach( (item)=>{
//     console.log(item);
//     return item;
// })
// console.log(values) //values = undefined



             // // filter : return but foreach not return
const myNums=[1,2,3,4,5,6,7,8,9,10]

// const val=myNums.filter( (num)=>{ 
//     return num>4
// } )
// console.log(val)


// const newNums=[]
// myNums.forEach((num)=>{
//     if(num>4)
//     {
//         newNums.push(num)
//     }
// })
// console.log(newNums);



// const books=[

//     {title:'book one' , genre:'fixtion',publish:1981,edition:2004},
//     {title:'book two' , genre:'non-fixtion',publish:1992,edition:2008},
//     {title:'book three' , genre:'fixtion',publish:1999,edition:2007},
//     {title:'book four' , genre:'history',publish:2000,edition:2010},
//     {title:'book five' , genre:'non-fixtion',publish:1987,edition:2014},
//     {title:'book six' , genre:'science',publish:1986,edition:2004},
//     {title:'book seven' , genre:'fixtion',publish:2011,edition:2016},
//     {title:'book eight' , genre:'history',publish:1981,edition:1989}
// ]
// let userBooks=books.filter( (bk)=>bk.genre==='history')
//  userBooks=books.filter( (bk)=>
//  {
//     return (bk.publish>=2000 && bk.genre==='history')
// })
// console.log(userBooks)


