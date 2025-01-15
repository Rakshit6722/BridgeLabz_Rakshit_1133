class Animal{
    speak(){
        console.log("Animal Speaking");
    }
}

class Dog extends Animal{
    speak(){
        console.log("Dog Barking");
    }
}

class Cat extends Animal{
    speak(){
        console.log("Cat Meowing");
    }
}

const animal1 = new Animal();
const dog1 = new Dog();
const cat1 = new Cat();

animal1.speak();
dog1.speak();
cat1.speak();
