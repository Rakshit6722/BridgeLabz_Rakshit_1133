class Vehilce {
    public make: number;
    public model: string;

    constructor(make: number, model: string) {
        this.make = make;
        this.model = model;
    }

    start() {
        console.log(`Vehicle is started`)
    }
}

class Car extends Vehilce{
    public numberOfDoors: number;

    constructor(make: number, model: string, numberOfDoors: number){
        super(make,model)
        this.numberOfDoors = numberOfDoors
    }

    start(){
        console.log("Car is started")
    }
}

const car1 = new Car(2003,"PDN134",4)
car1.start()



