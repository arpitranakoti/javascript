//Array -> object

const myArr=[0,1,2,3,4,5]
// console.log(myArr[3])

const myArr2=new Array("mon","tues")
// console.log(myArr2);

//Array methods

// myArr.push(33)
// myArr.push(11)
// myArr.pop()

// myArr.unshift(123) // add element at start 
// myArr.shift()  // remove from start

// console.log(myArr.includes(4));
// console.log(myArr.indexOf(9));

// const newArr= myArr.join();

// console.log(myArr)
// console.log(newArr)


// slice , splice

console.log("A ",myArr);

const myn1=myArr.slice(1,3);

console.log(myn1 ," range from x to x<y");
console.log("no change in og in slice : ",myArr);

const myn2=myArr.splice(1,3);
console.log("element from og is removed : ",myArr);
console.log(myn2 ," splice range also include last(3 here) element x to x<=y  ");




