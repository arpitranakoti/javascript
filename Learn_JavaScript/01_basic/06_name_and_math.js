const score= 300

const balance = new Number(score)
// console.log(score);
// console.log(balance)

// console.log(balance.toString().length);

// console.log(balance.toFixed(2));

const otherNumber=312.2674
// console.log(otherNumber.toPrecision(3)) // give 3 value

const hundreds=1000000
// console.log(hundreds.toLocaleString('en-IN'));

//--------------=-----------maths-------------

// console.log(Math)
// console.log(Math.abs(-4));// change -ve to +ve
// console.log((Math.round(4.6)));//round of  
// console.log((Math.ceil(4.2)));// take upper value
// console.log((Math.floor(4.2)));// take lower value 4.9 -> 4 

 
console.log((Math.random())); // value from 0 to 1 
console.log((Math.random()*10)+1);//avoid 0 values we do +1
console.log(Math.floor(Math.random()*10)+1);


const min = 10
const max=20
const Range=max-min+1 // +1 to avoid 0 case

console.log(Math.floor(Math.random()*(max-min+1))+min)
console.log(Math.floor(Math.random()*(Range))+min)


