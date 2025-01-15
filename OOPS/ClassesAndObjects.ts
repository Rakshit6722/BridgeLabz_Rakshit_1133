class Person{
    constructor(public name:string, private age:number){
        this.name = name;
        this.age = age;
    }

    greet():string{
        return `Hello ${this.name}`
    }

    getAge():number{
        return this.age
    }
}

const person1 = new Person("Rakshit",21)
console.log(person1.greet())
console.log(person1.getAge())