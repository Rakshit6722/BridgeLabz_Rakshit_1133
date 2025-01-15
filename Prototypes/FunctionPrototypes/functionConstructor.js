function Animal(name,energy){
    this.name = name;
    this.energy = this.energy;
}

Animal.prototype.eat = function(amount){
    console.log(`${this.name} is eating`);
    this.energy += amount
}

Animal.prototype.play = function(length){
    console.log(`${this.name} is playing`)
    this.energy -= length
}

const animal1 = new Animal('Lion',50)
animal1.eat()
animal1.play()