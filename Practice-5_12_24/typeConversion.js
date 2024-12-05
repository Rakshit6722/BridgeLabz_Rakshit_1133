//Implicit conversion - done by JS engine(Type coercion)

 //when + operator is used with string and number, it will convert number to string and concatenate
console.log(5+"10")

//In case of *,/,- operators, JS engine will convert string to number and perform operation
console.log(5*"2")
console.log(5/"2")
console.log("5"-"2")

//Explicit conversion - done by developer

//Number to string
let num = 10;
console.log(typeof num)
let str = String(num)
console.log(typeof str)

let str2 = num.toString()
console.log(typeof str2)

let str3 = num + ""
console.log(typeof str3)

// String to number
let str = "1234"
let num = Number(str)
console.log(typeof num)

let str2 = "114.5"
console.log(parseInt(str2))
console.log(parseFloat(str2))
console.log(typeof +str2)

//boolean
let bool = "hello"
console.log(Boolean(bool))

let bool2 = 0
console.log(Boolean(bool2))

//use strict

//here x will be declared as a global variable
x = 10;
console.log(x)

//variable declaration is not allowed without var, let or const in strict mode
"use strict"
x = 10;
console.log(x)

// console.log(this)

