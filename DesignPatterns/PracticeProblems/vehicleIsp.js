// You have an interface Vehicle with methods drive() and fly(). Both Car and Airplane classes implement this interface but one method is irrelevant for each. Restructure the interface to follow the ISP.

class Drivable{
    drive(){
        console.log("Driving")
    }
}

class Flyable{
    fly(){
        console.log("Flying")
    }
}

class Car extends Drivable{
    drive(){
        console.log("Driving a car")
    }
}

class Airplane extends Flyable{
    fly(){
        console.log("Flying an airplane")
    }
}

const car = new Car()
const airplane = new Airplane()

car.drive()
airplane.fly()
