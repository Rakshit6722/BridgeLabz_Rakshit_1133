// Dependency Inversion Principle
// High-level modules should not depend on low-level modules. Both should depend on abstractions.

class Database{
    connect(){
        console.log("Connecting to database")
    }
}

class UserService{
    constructor(db){
        this.db = db
    }

    getUser(){
        this.db.connect()
        console.log("Getting user")
    }
}

const db = new Database()
const userService = new UserService(db)
userService.getUser()
