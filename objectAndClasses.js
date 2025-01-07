const obj1 = {
    name:"Rakshit",
    age: 21,
}

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

const obj2 = new Person("Rakshit", 21);

//reference copying
const obj3 = obj1;