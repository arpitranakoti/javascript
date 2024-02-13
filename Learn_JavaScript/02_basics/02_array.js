const  months =["jan","feb","march"]
const  days=["mon","tues","wed"]

// months.push(days);
// console.log(months)
// console.log(months[3][1])

// const newMonth=months.concat(days)
// console.log(newMonth)


const allnewMonth=[...months,...days]       // spread 
console.log(allnewMonth)

const another_array=[1,2,3,[4,5,6],7,[6,7,[4,5]]]

const breaking_another_array=another_array.flat(Infinity);
console.log(breaking_another_array)

console.log(Array.isArray("Arpit"))  // is this is array or not 
console.log(Array.from("Arpit"))    // fonvert to array ('a','r','p','i','t')
console.log(Array.from({name:"Arpit"})) // 


let score1=100
let score2=200
let score3=300

console.log(Array.of(score1,score3));




