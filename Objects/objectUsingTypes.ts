type Student1 = {
    name: string;
    age: number;
    marks: number;
}

const student1: Student1 = {
    name: "Rakshit",
    age: 21,
    marks: 90
}

console.log(student1)

type Employee2 = {
    id: number;
    name: string;
    calculateSalary(): number;
}

type Salary2 = {
    FULL_TIME_PAYMENT: number;
    PART_TIME_PAYMENT: number;
}

const staff2: Employee2 & Salary2 = {
    id: 1,
    name: "Rakshit",
    FULL_TIME_PAYMENT: 20000,
    PART_TIME_PAYMENT: 10000,
    calculateSalary(){
        return this.FULL_TIME_PAYMENT
    }
}

console.log(staff2)

