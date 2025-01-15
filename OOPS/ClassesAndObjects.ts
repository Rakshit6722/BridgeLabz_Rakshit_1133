class Person{
    constructor(public name:String, private age:Number){
        this.name = name;
        this.age = age;
    }

    greet():String{
        return `Hello ${this.name}`
    }

    getAge():Number{
        return this.age
    }
}

const person1 = new Person("Rakshit",21)
console.log(person1.greet())
console.log(person1.getAge())