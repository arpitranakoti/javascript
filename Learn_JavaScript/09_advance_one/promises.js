// fetch('http://somthing.com').then(response).catch(error),finally(allways run ) but there are some more promise

/*************************start ***********
promise is an object */

// ya tho hoga ya nahi hoga
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
                                                    //consumption: .then has relation with resolve
            promiseOne.then(function(){
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
                    return user.username // goes to next then called chaining
                }).then(function(chaining)
                {
                    console.log(chaining +" |||||jab error=false krainge||||");
                })
                .catch((error_aaiga)=>{
                    console.log(error_aaiga+" ||||jab error= true krainge|||||")
                })
                .finally(()=>console.log("The promise is either resolved or rejected but //*finally will allways run*/"))