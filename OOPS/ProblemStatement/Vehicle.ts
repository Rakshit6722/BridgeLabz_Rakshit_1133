abstract class Vehicle{
    constructor(private make: number, private model: string, private speed: string){
        this.make = make;
        this.model = model;
        this.speed = speed;
    }

    getDetails(): string{
        return `Make: ${this.make}, Model: ${this.model}, Speed: ${this.speed}`
    }

    abstract start(): void;
}

class Car1 extends Vehicle{
    constructor(make: number, model: string, speed: string){
        super(make,model,speed)
    }

    start(): void{
        console.log("Car is started")
    }
}

class Bike extends Vehicle{
    constructor(make: number, model: string, speed: string){
        super(make,model,speed)
    }

    start(): void{
        console.log("Bike is started")
    }
}

const car2 = new Car1(2003,"PDN134","100kmph")
console.log(car2.getDetails())
car2.start()

const bike1 = new Bike(2003,"PDN134","100kmph")
console.log(bike1.getDetails())
bike1.start()
