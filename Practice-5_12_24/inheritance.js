// class Parent{
//     name = "Parent";
//     age = 50;

//     printName(){
//         console.log(this.name);
//     }
// }

// class Child extends Parent{
// }

// let child = new Child()
// console.log(child.name)//Parent
// console.log(child.age)//50
// child.printName()//Parent

// class Main{
//     constructor(){
//         this.name = "Main";
//         console.log("Main constructor");
//     }
// }
// class Child extends Main{
//     constructor(){
//         super()
//         console.log("Child constructor");
//     }
// }

// let child = new Child()

class Main{
    constructor(name){
        this.name = name
    }
}

class Child extends Main{
    constructor(name,age){
        super(name)
        this.age = age
    }

}

let child = new Child("Rakshit",21)
console.log(child.name)
console.log(child.age)