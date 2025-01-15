// const Animal = {
//     eat(){
//         console.log("this animal eats")
//     }
// }

// const dog = Object.create(Animal)
// dog.barks = () => {
//     console.log("dog is barking")
// }

// dog.barks()
// dog.eat()

function Animal(name){
    this.name = name
}

Animal.prototype.eat = function(){
    console.log(`${this.name} is eating`)
}

function Dog(name, breed){
    Animal.call(this,name)
    this.breed = breed
}

Dog.prototype = Object.create(Animal.prototype)
Dog.prototype.constructor = Dog

Dog.prototype.bark = function(){
    console.log(`${this.name} is barking`)
}

const dog = new Dog("Raghav","Khattar")
dog.eat()
dog.bark()