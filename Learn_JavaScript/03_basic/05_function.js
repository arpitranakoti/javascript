//funciton(keyword) f_name(){scope..}
function egname(){
    console.log("A");
    console.log("R");
    console.log("P");
    console.log("I");
    console.log("T");
}

// egname()

// function addTwoNumbers(num1,num2){
//     console.log(num1+num2);
// }
// addTwoNumbers(4,5)


function addTwoNumbers(num1,num2){
    // let result = num1+num2;
    // return result
    return num1+num2
}
const result=addTwoNumbers(4,5)
// console.log("Result: ",result);


function loginUserMessage(username="sam"){
    // if(username===undefined)
    if(!username)
    {
        console.log("please enter a username");
        return 
    }
    return `${username} just logged in.`
}
// console.log(loginUserMessage("Arpit"));
console.log(loginUserMessage()); // undifined


