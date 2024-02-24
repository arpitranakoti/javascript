// Reduce():initial accumulator=0

const myNums=[1,2,3]

// const myTotal=myNums.reduce(function(accumulator,currentvalue){
//     console.log(`acc: ${accumulator} and curval: ${currentvalue}`);
//     return accumulator+currentvalue
// },0) // initial acc =0,if  ((){},3) acc start from 3

const myTotal=myNums.reduce( (acc,curr)=>acc+curr,0)
console.log(myTotal);


const shopCart=[
    {
        itemName:"js course",
        price:2999
    },
    {
        itemName:"mobile dev",
        price:5999
    },
    {
        itemName:"py",
        price:999
    },
    {
        itemName:"dats science",
        price:12999
    },
]
const total=shopCart.reduce((acc,item)=>acc+item.price,0)
console.log(total);

