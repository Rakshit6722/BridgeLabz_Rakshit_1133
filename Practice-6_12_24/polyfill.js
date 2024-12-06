//used to make simpler implementation of some advanced feature of js so that it can be understood by older browser

//bind method in js
// let obj = {
//     firstName:"Rakshit",
//     lastName:"Chauhan",
// }

// function getFullName(age){
//     console.log(`${this.firstName} ${this.lastName}, ${age}`)
// }

// const bindedFunction = getFullName.bind(obj,21)
// bindedFunction()

//polyfill for bind method
Function.prototype.myBind = function(context,...args){
    let func = this;
    return function(...innerArgs){
        func.apply(context,[...args,...innerArgs])
    }
}

let obj = {
    firstName:"Rakshit",
    lastName:"Chauhan",
}

function getFullName(age){
    console.log(`${this.firstName} ${this.lastName}, ${age}`)
}

const myBindedFunction = getFullName.myBind(obj,21)
myBindedFunction()
