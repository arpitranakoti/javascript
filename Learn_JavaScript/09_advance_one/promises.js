// fetch('http://somthing.com').then(response).catch(error),finally(allways run ) but there are some more promise

/*************************starting ***************
promise is an object 
*/

// (resolve and reject ) : ya tho hoga ya nahi 

                           // creation

            const promiseOne= new Promise(function(resolve,reject){
                // Do na async task
                // db calls , cryptography,network
                setTimeout(function(){
                    console.log('Async task is complete');
                    // to connect resolve 
                    resolve()
                },1000)
            })

                   //consumption: .then has relation with (resolve)

            promiseOne.then(function(){
                //if resolve then perform this 
                console.log("promise consume");
            })

/********************** 2 method ************************ */
                new Promise(function(resolve,reject){
                    setTimeout(() => {
                        console.log('Async task 2')
                        resolve()//to connect
                    }, 1000);
                }).then(function(){
                    console.log("Async 2 resolved")
                })

/***************** third promise******** */

                 const promiseThree=new Promise(function(resolve,reject){
                    setTimeout(function(){

                        resolve({username:"Arpit",email:"ranakoti@gamil.com"}) 
                        // to pass value from here to consume area [can pass data in form of arr,obj]

                    }, 1000);
                })
                //consume promise
                promiseThree.then(function(user){
                    console.log(user); // data from promise will be printed 
                })

/******************************* 4th promise************************** */

                const promiseFour= new Promise(function(resolve,reject){

                    setTimeout(function(){
                        let error = true
                        // let error = false
                        if(!error ){
                            resolve({username:"arpit_hu_promise4vala",password:"123"})
                        }
                        else
                        {
                            reject('ERROR: Someting went wrong')
                        }
                    
                    },1000)
                })
                // consume either resolve->.then or reject -> .catch
                // promiseFour.then(function(){}).catch(function(){})
                promiseFour.then((user)=>{
                    console.log(user);
                    return user.username // goes to next (.then) which is called chaining
                }).then(function(chaining)
                {
                    console.log(chaining +" |---->jab error=false krainge<-----|");
                })
                .catch((error_aaiga)=>{
                    console.log(error_aaiga+" |---->jab error= true krainge<-----|")
                })
                .finally(()=>console.log("The promise is either resolved or rejected but //*finally will allways run***"))

/*********************************** 5th promise********* */

                const promiseFive=new Promise(function(resolve,reject){

                    setTimeout(() => {
                        let error = true
                        // let error = false
                        if(!error ){
                            resolve({username:"5th_vala_promise",password:"123"})
                        }
                        else
                        {
                            reject('ERROR: 5th wala promise went wrong')
                        }
                    }, 1000);
                })
//similar to .then 
                async function consumePromiseFive(){
                   try
                   {
                    const response=await promiseFive
                    console.log(response)
                   }
                   catch(error){
                    console.log(error)
                   }
                }
                
                consumePromiseFive();

/********************** */

                // async function getAllUser(){
                //    try{
                //     const response=await fetch('https://jsonplaceholder.typicode.com/users')
                //     // console.log(response);

                //     // response.json() //convert response(string) to json (to extract data)
                //     const data= await response.json() // response.json take time to convert so put await 
                //     console.log(data);
                //    }
                //    catch(error)
                //    {
                //     console.log("E: " ,error);
                //    }
                // }
                // getAllUser()

        // same thing using .then 


 /*******************important question *****/
    /*
    Q: promises sai request kari aur vaha sai error aagya (eg 404 ) , tho vo resolve mai milaig ya reject mai ?
    Ans : allway response mai milaiga ku ki usai nahi pta ki error aaya ya result 
        error-> tab aaiga ja request hi send nahi kr paiga browser
        explain in fetch_process img
    */


/* fetch('url','anything : obj , fuction that need to be send to browser') */

 
fetch('https://api.github.com/users/arpitranakoti')
.then((response)=>{
    return response.json()
})
.then((data)=>{console.log(data)})
.catch((error)=>console.log(error))

        fetch('https://api.github.com/users/arpitranakoti')
        .then((response)=>{
            return response.json()
        })
        .then((data)=>{console.log(data)})
        .catch((error)=>console.log(error))