// function func(a,b){
//     console.log(a,b)
// }

// func.apply(null,[1,2])
// func.call(null,1,2)

let admin = {
    name: 'John',
}

let user = {
    name: 'Jane',
}

function greet(age){
    console.log(`Hello ${this.name}, ${age}`)
}

greet.call(admin,25)
greet.call(user,30)
greet.apply(admin,[25])
greet.apply(user,[30])

