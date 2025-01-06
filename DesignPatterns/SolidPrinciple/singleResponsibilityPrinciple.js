// Single Responsibility Principle
// A class should have only one responsibility

class User{
    constructor(name,age){
        this.name = name
        this.age = age
    }
}

class ValidateUser{
    static validate(user){
        if(user.age<18) return false
        return true
    }
}

class SaveUser{
    static users = []
    static saveUser(user){
        this.users.push(user)
        return this.users
    }
}

const user = new User("John", 20)
const validateUser = ValidateUser.validate(user)
const saveUser = SaveUser.saveUser(user)

console.log(validateUser,saveUser)
