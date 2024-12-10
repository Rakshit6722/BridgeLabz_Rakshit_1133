//Every object has an internal property called prototype. 
//It is a reference to another object. When trying to access a property that does not exist in an object, 
//JavaScript will look at the prototype of the object. If the property is not found in the prototype, JavaScript will look at the prototype of the prototype and so on until it finds the property or 
//reaches the end of the prototype chain. This is called prototype chaining.

// const Person = {
//     name:"Rakshit",
//     age:21
// }

// //emloyee will inherit property from Person
// const employee = Object.assign({},Person)
// employee.salary = 100000

// console.log(employee.name)
// console.log(employee.age)
// console.log(employee.salary)

//constructor function
// function Person(name){
//     this.name = name
// }

// Person.prototype.greet = function(){
//     console.log(`Hello ${this.name}`)
// }

// const person1 = new Person("Rakshit")
// const person2 = new Person("Raghav")

// person1.greet()
// person2.greet()

// function Animal(name){
//     this.name = name
// }

// Animal.prototype.speaks = function(){
//     console.log(`${this.name} makes a noise`)
// }

// function Dog(name){
//     Animal.call(this,name)
// }

// Dog.prototype = Object.create(Animal.prototype)
// Dog.prototype.constructor = Dog

// Dog.prototype.barks = function(){
//     console.log(`${this.name} barks`)
// }

// const dog1 = new Dog("Raghav")
// console.log(Dog.prototype.constructor)
// dog1.speaks()
// dog1.barks()

//__proto__
// const obj = {
//     name:"Rakshit"
// }

// console.log(obj.__proto__)

//ES6 classes and prototypes
// class Animal{
//     constructor(name){
//         this.name = name
//     }

//     speaks(){
//         console.log(`${this.name} make noise`)
//     }
// }

// class Dog extends Animal{
//     constructor(name){
//         super(name)
//     }
//     bark(){
//         console.log(`${this.name} barks`)
//     }
// }

// const dog1 = new Dog("Raghav")
// dog1.speaks()
// dog1.bark()

//modifying through prototype
class Car{
    constructor(name){
        this.name = name
    }

    start(){
        console.log(`${this.name} starts`)
    }
}

const car1 = new Car("Audi")
car1.start()

//adding new methods to class
Car.prototype.stop = function(){
    console.log(`${this.name} stops`)
}

car1.stop()
