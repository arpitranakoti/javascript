// falsy values : false,Nan,0,-0,BigInt 0n ,"",null,undefined

//turthy : 1,true,"0",'false'," ",{},[],function(){}


// const userEmail="A@Arpit.ai"
const userEmail=[]

if(userEmail)
{
    console.log("Got User Email");
}
else
{
    console.log("Don't have user email");
}



// if(userEmail.length===0)
// {
//     console.log("array is empty");
// }


const emptyObj={}
if(Object.keys(emptyObj).length==0)
{
    console.log("object is empty");
}

//nullish coalescing operator(??):null undefined
let val1;
// val1 = 5??10
// val1 = null ?? 10
// val1 = undefined?? 15
val1 = null ?? 10 ?? 20

console.log(val1);


//Terniary operator : condition ? true : false;

const iceTea=100
iceTea<=80 ? console.log("less than 80") : console.log("more than 80");
