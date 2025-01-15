abstract class Employee{
    private id: number;
    private name: string;

    constructor(id: number, name: string){
        this.id = id;
        this.name = name;
    }

    abstract calculateSalary(): number;
}

class FullTimeEmployee extends Employee{

    private FULL_TIME_PAYMENT = 20000;

    constructor(id: number, name: string, public noOfDays: number){
        super(id,name)
        this.noOfDays = noOfDays
    }

    calculateSalary(): number {
        return this.noOfDays * this.FULL_TIME_PAYMENT
    }
}

class PartTimeEmployee extends Employee{

    private PART_TIME_PAYMENT = 10000;

    constructor(id: number, name: string, public noOfHours: number){
        super(id,name)
        this.noOfHours = noOfHours
    }

    calculateSalary(): number {
        return this.noOfHours * this.PART_TIME_PAYMENT
    }
}

const fullTimeEmployee1 = new FullTimeEmployee(1,"Rakshit",30)
console.log(fullTimeEmployee1.calculateSalary())

const partTimeEmployee1 = new PartTimeEmployee(2,"Khattar",30)
console.log(partTimeEmployee1.calculateSalary())