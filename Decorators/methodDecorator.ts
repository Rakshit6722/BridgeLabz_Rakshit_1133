// class Greeter{
//     greeting: string;
//     constructor(message: string){
//         this.greeting = message
//     }

//     @enumerable(false)
//     greet(){
//         return `Hello, ${this.greeting}`
//     }
// }

// function enumerable(value: boolean){
//     return function(targrt: any, propertyKey: string, descriptor: PropertyDescriptor){
//         descriptor.enumerable = value
//     }
// }

function LogMethod(target: any, propertyKey: string, descriptor: PropertyDescriptor){
    const originalMethod = descriptor.value

    descriptor.value = function(...args: any[]){
        console.log(`Calling ${propertyKey} with arguments: ${JSON.stringify(args)}`)
        return originalMethod.apply(this,args)
    }
}

class Calculator{
    @LogMethod
    add(a: number, b: number){
        return a+b
    }

    @LogMethod
    multiply(a: number, b: number){
        return a*b
    }
}

const calc = new Calculator()
calc.add(2,3)
calc.multiply(2,3)