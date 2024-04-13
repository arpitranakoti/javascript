/*****important question *****/
/*
Q: promises sai request kari aur vaha sai error aagya (eg 404 ) , tho vo resolve mai milaig ya reject mai ?
Ans : allway response mai milaiga ku ki usai nahi pta ki error aaya ya result 
      error-> tab aaiga ja request hi send nahi kr paiga browser
*/ 


/* fetch('url','anything : obj , fuction that need to be send to url') */
fetch('https://api.github.com/users/arpitranakoti')
.then((response)=>{
    return response.json()
})
.then((data)=>{console.log(data)})
.catch((error)=>console.log(error))