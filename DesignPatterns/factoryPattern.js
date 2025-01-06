class Car{
    constructor(model){
        this.model = model
    }
}

class CarFactory{
    static createCar(model){
        return new Car(model)
    }
}

const car1 = CarFactory.createCar("Toyota");
const car2 = CarFactory.createCar("Honda");

console.log(car1);
console.log(car2);
