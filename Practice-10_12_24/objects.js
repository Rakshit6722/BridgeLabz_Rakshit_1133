//object creation

//without object literal
// function createObject(name,age){
//     this.name = name
//     this.age = age
// }

// const obj1 = new createObject("Rakshit",21)
// const obj2 = new createObject("Raghav",21)

// console.log(obj1)
// console.log(obj2)

// const Person = new Object()
// Person.name = "Rakshit"
// Person.age = 21

// console.log(Person)
// console.log(Person.name)

// let proto = {
//     greet:function(){
//         console.log(`Hello ${this.name}`)
//     }
// }

// const obj = Object.create(proto)
// obj.name = "Rakshit"
// obj.greet()

//Object.defineProperty()
// const obj = {}

// Object.defineProperty(obj,'name',{
//     value:"Rakshit",
//     writable:false,
//     enumerable:true,
//     configurable:true,
// })
// console.log(obj)
// delete obj.name
// console.log(obj)

//getter and setter
// const obj = {
//     firstName:"Rakshit",
//     lastName:"Chauhan",
//     age:21,
//     get Name(){
//         return `${this.firstName} ${this.lastName}`
//     },
//     set Name(value){
//         [this.firstName,this.lastName] = value.split(" ")
//     }
// }

// console.log(obj.Name)
// obj.Name = "Raghav Khattar" 
// console.log(obj.Name)

//freeze and seal
// const obj = {
//     name:"Rakshit",
//     age:21
// }
// Object.seal(obj)
// obj.age = 22
// obj.address = "Delhi"
// console.log(obj)