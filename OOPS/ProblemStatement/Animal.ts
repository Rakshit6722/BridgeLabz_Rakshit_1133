abstract class Animal1{
    constructor(public name: string, public species: string){
        this.name = name;
        this.species = species;
    }

    abstract speak(): void;
}

class Dog1 extends Animal1{
    constructor(name: string, species: string, private hungerLevel: number){
        super(name,species)
        this.hungerLevel = hungerLevel
    }

    speak(): void{
        console.log("Bark")
    }

    getHungerLevel(): number{     
        return this.hungerLevel
    }

    feedDog(amount): void{
        this.hungerLevel -= amount
    }
}

class Cat1 extends Animal1{
    constructor(name: string, species: string, private hungerLevel: number){
        super(name,species)
        this.hungerLevel = hungerLevel
    }

    speak(): void{
        console.log("Meow")
    }

    getHungerLevel(): number{     
        return this.hungerLevel
    }

    feedCat(amount): void{
        this.hungerLevel -= amount
    }
}

const dog2 = new Dog1("Tommy","Dog",10)
console.log(dog2.name)
console.log(dog2.species)
console.log(dog2.getHungerLevel())
dog2.speak()
dog2.feedDog(5)
console.log(dog2.getHungerLevel())

const cat2 = new Cat1("Kitty","Cat",10)
console.log(cat2.name)
console.log(cat2.species)
console.log(cat2.getHungerLevel())
cat2.speak()
cat2.feedCat(5)
console.log(cat2.getHungerLevel())
