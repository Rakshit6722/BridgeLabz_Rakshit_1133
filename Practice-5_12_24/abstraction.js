// class Car{
//     startCar(){
//         throw new Error("Method not implemented")
//     }
// }

// class BMW extends Car{
//     startCar(){
//         console.log("BMW started")
//     }
// }

// let car = new BMW()
// car.startCar()//BMW started

//using classes with methods
class Car{
    start(){
        console.log("Car started")
        this.#engineCheck()
    }

    #engineCheck(){
        console.log("Engine checked")
    }
}

let car = new Car()
car.start()//Car started