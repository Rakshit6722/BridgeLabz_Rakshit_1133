// Interface Segregation Principle
// A class should not be forced to implement an interface this it does not use

class Eater{
    eat(){
        console.log("Eating")
    }
}

class Swimmer{
    swim(){
        console.log("Swimming")
    }
}

class Dog extends Eater{
    eat(){
        console.log("Dog is eating")
    }
}

class Pengiun extends Swimmer{
    swim(){
        console.log("Pengiun is swimming")
    }
}

const dog = new Dog()
dog.eat()

const pengiun = new Pengiun()
pengiun.swim()
