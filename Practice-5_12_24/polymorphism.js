//method overriding
// class Animal {
//     sound() {
//         console.log("Animal is making sound");
//     }
// }

// class Dog extends Animal {
//     sound() {
//         console.log("Dog is barking");
//     }
// }

// let dog = new Dog();
// dog.sound();

//function overloading
function func(name,age){
    if(age == undefined){
        console.log("Name: "+name)
    }else{
        console.log("Name: "+name+" Age: "+age)
    }
}

func("Rakshit",20)