//A Bird class has methods fly() and layEggs(). Introduce a Penguin class that does not break the LSP.

class Bird{
    fly(){
        console.log("Bird is flying")
    }

    layEggs(){
        console.log("Bird is laying eggs")
    }
}

class Penguin extends Bird{
    fly(){
        throw new Error("Penguins cannot fly")
    }
}

const penguin = new Penguin()
penguin.fly()
penguin.layEggs()
