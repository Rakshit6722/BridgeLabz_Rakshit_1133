interface Person1{
    name:string,
    age1:number,
    greet():string,
    getAge():number
}

const person2: Person1 = {
    name: "Rakshit",
    age1: 21,
    greet(){
        return `Hello ${this.name}`
    },
    getAge(){
        return this.age1
    }
}

console.log(person2)


interface Animal{
    name: string,
    species: Species
    speak(): void
}

interface Species{
    subSpecies: string
}

const dog3: Animal = {
    name: "Tommy",
    species: {
        subSpecies: "Labrador"
    },
    speak(){
        console.log("Bark")
    }
}

console.log(dog3)

interface Employee1{
    id: number,
    name: string,
    calculateSalary(): number
}

interface Salary1{
    FULL_TIME_PAYMENT: number,
    PART_TIME_PAYMENT: number
}

const staff1: Employee1 & Salary1 = {
    id: 1,
    name: "Rakshit",
    FULL_TIME_PAYMENT: 20000,
    PART_TIME_PAYMENT: 10000,
    calculateSalary(){
        return this.FULL_TIME_PAYMENT
    }
}
