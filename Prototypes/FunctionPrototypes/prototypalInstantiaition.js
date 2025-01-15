function Animal(name, energy){
    let animal = Object.create(Animal.prototype)
    animal.name = name
    animal.energy = energy

    return animal
}

Animal.prototype.eat = function(amount){
    console.log(`${this.name} is eating`);
    this.energy += amount
}

Animal.prototype.play = function(length){
    console.log(`${this.name} is playing`)
    this.energy -= length
}

const animal1 = Animal('Lion',50)
console.log(animal1.energy)
animal1.eat()