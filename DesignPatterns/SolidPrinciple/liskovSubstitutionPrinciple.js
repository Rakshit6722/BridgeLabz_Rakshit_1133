// Liskov Substitution Principle
// derived classes or objects extend the functionality of the base class or object without changing the behavior of the base class or object

class Vehicle{
    getDescription(){
        return "This is a vehicle"
    }
}

class Car extends Vehicle{
    getDescription(){
        return super.getDescription() + " and it is a car"
    }
}

const vehicle = new Vehicle()
console.log(vehicle.getDescription())

const car = new Car()
console.log(car.getDescription())