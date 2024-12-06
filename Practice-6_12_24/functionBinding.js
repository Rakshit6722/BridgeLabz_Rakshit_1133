let obj = {
    firstName: 'Rakshit',
    lastName: 'Chauhan',
}

function getName(age){
    console.log(`${this.firstName} ${this.lastName}, ${age}`)
}

const bindedFunction = getName.bind(obj,25)
bindedFunction()