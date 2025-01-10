const obj1 = {
    name:"Rakshit",
    age: 21,
}

class Person {
    constructor(name, age) {
        this.name = name; //this reference to current instance of the class
        this.age = age;
    }
}

const obj2 = new Person("Rakshit", 21); //new is used to assign memory to object of that class

//reference copying
const obj3 = obj1;