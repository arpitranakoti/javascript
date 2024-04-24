class User{
    constructor(username){
        this.username=username;
    }
    logMe(){
        console.log(`Username: ${this.username}`);
    }
   static createId(){
        return `123`
    }
}

const Arpit=new User("Arpit")
// console.log(Arpit.createId());

class Teacher extends User{
    constructor(username,email){
        super(username)
        this.email=email
    }

}
const iphone = new Teacher("iphone","i#ga.com")
// console.log(iphone.createId())//not run as its static not allow anyone to access ite
iphone.logMe()