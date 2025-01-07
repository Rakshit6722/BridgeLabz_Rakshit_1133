class User{
    constructor(name, age){
        this.name = name;
        this.age = age
    }
}

class ValidateUser{
    validateUser(user){
        if(user.age > 18) return true
        return false
    }
}

class SaveUser{
    saveUser(user){
        console.log("user saved")
    }
}

