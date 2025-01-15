const animalMethods = {
    eat(amount){
        console.log(`${this.name} is eating`)
        this.energy += amount
    },
    sleep(length){
        console.log(`${this.name} is sleeping`)
        this.energy += length
    },
    play(length){
        console.log(`${this.name} is playing`)
        this.energy -= length
    }
}

function Animal(name, energy){
    let animal = Object.create(animalMethods)
    animal.name = name;
    animal.energy = energy;

    return animal
}

const animal1 = Animal('Lion',50)
console.log(animal1.energy)
animal1.sleep(30);
animal1.eat(50);
animal1.play(25);
console.log(animal1.energy)