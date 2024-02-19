// Immediately Invoked Function Expression (IIFE) :global scope kai pollution sai
    // problem hoti hai kae baar . tho jo bhi declaration hai usko hatanai kai lia iffe use kia     syntax : ()();

(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();


// ( ()=>{
//    // unnamed IIFE
//     // will not work until above is stop using ; 
//     console.log(`Db connnected 2`)
// })();

( (name)=>{
    // will not work until above is stop using ; 
    console.log(`Db connnected 2 ${name}`)
})("arpit")

