class DatabaseConnection{
    constructor(db){
        this.db = db
    }

    dbConnect(){
        console.log("base class")
    }
}

class MongoDB extends DatabaseConnection{
    constructor(db){
        super(db)
    }

    dbConnect(){
        console.log("Mongo DB connected...")
    }
}

class MySQL extends DatabaseConnection{
    constructor(db){
        super(db)
    }

    dbConnect(){
        console.log("My SQL connected...")
    }
}

const mongoDB = new MongoDB("MongoDB")
mongoDB.dbConnect()

const mySql = new MySQL("My Sql")
mySql.dbConnect()