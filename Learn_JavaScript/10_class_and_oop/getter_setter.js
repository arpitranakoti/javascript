class User{
    constructor(email,password){
        this.email=email
        this.password=password
    }

    
    get password(){
        // to avoid setting pass due to race b/w setter anad constructor we changed the password to _password 
        // return this._password.toUpperCase()
        return `${this._password}hitesh`
    }

    set password(value){
        this._password=value
    }

    //for email
    get email(){
        return this._email.toUpperCase()
    }
    set email(value)
    {
        //  this.email=value // will start race b/w constructor and setter to set value so, to avoid this we change name in both setter and getter
         this._email=value 

    }
}

const Ar = new User("ar@mail.ai","abc")
console.log(Ar.password);
console.log(Ar.email);