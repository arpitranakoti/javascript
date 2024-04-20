function UserNameSetter(username){
    this.username=username;
    console.log("called")

}

function createUser(username,email,password){
    //will send username to other fuction to set it 
    // UserNameSetter.call(username)// problem is it will called but not hold refference its execution context (this) will delete 

    // so createuser will tell setter to use this(refference) of itself not setter this 
    UserNameSetter.call(this,username) // now setter will use context of createuser so when setter got deleted it will pass its context to createuser

    this.email=email
    this.password=password
}

const chai = new createUser("Arpit","arpit@.com","1234");
console.log(chai)