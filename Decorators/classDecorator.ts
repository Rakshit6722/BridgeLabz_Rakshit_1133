//decorators are used to modify preexisting behaviour of classes, methods, properties, or parameters 
// function Logger(constructor: Function){
//     console.log(`Logging class: ${constructor.name}`)
// }

// @Logger
// class Person2{
//     constructor(public name: string){
//         this.name = name
//     }
// }

// const person3 = new Person2("John")

//multiple decorator
// function first(constructor: Function){
//     console.log(`First decorator`)
// }

// function second(constructor: Function){
//     console.log(`Second decorator`)
// }

// @first 
// @second
// class Example{

// }

// const example1 = new Example()

// function first() {
//     console.log("first(): factory evaluated");
//     return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
//       console.log("first(): called");
//     };
//   }
  
//   function second() {
//     console.log("second(): factory evaluated");
//     return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
//       console.log("second(): called");
//     };
//   }
  
//   class ExampleClass {
//     @first()
//     @second()
//     method() {}
//   }
  

function sealed(constructor: Function){
    Object.seal(constructor)
    Object.seal(constructor.prototype)
}

@sealed
class BugReport{
    type = "report"
    title: string

    constructor(t: string){
        this.title = t
    }
}
