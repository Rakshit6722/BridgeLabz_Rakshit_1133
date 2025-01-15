class Vehilce {
    public make: Number;
    public model: String;

    constructor(make: Number, model: String) {
        this.make = make;
        this.model = model;
    }

    start() {
        console.log(`Vehicle is started`)
    }
}

class Car extends Vehilce{
    public numberOfDoors: Number;

    constructor(make: Number, model: String, numberOfDoors: Number){
        super(make,model)
        this.numberOfDoors = numberOfDoors
    }

    start(){
        console.log("Car is started")
    }
}

const car1 = new Car(2003,"PDN134",4)
car1.start()



