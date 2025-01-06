//Write a class that handles user authentication and also sends email notifications. Separate the responsibilities.

class User{
    constructor(name, age, email){
        this.name = name
        this.age = age
        this.email = email
    }
}

class UserAuthentication{
    static authenticate(user){
        if(user.age > 18){
            return true
        }
        return false
    }
}

class UserNotification{
    static sendEmail(user){
        console.log("Sending email to", user.email)
    }
}

const user = new User("John", 20, "john@example.com")
const authenticated = UserAuthentication.authenticate(user)
const notification = UserNotification.sendEmail(user)

console.log(authenticated)
