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
function first(constructor: Function){
    console.log(`First decorator`)
}

function second(constructor: Function){
    console.log(`Second decorator`)
}

@first 
@second
class Example{

}

const example1 = new Example()

