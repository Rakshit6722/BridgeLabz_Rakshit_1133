// //ES6

// //arrow functions
// const add = (a,b) => {
//     return a+b;
// }
// console.log(add(2,3));

// //let and const
// {
//     let a = 10;
//     console.log(a)
// } 
// console.log(a)
// const b = 20

// //template literals
// const name = "Rakshit"
// const age = 20
// console.log(`My name is ${name} and my age is ${age}`)

// //object literals
// const obj1 = {
//     firstName:"Rakshit",
//     lastName:"Chauhan",
// }

// //rest 
// function sum(...args){
//     let sum = 0;
//     for(let i=0;i<args.length;i++){
//         sum += args[i];
//     }
//     return sum;
// }
// console.log(sum(1,2,3,4,5))

// //spread
// const arr1 = [1,2,3,4,5]
// const arr2 = [6,7,8,9]

// const arr3 = [...arr1,...arr2,10,11]
// console.log(arr3)

// //destructuring
// const obj2 = {
//     name:"Rakshit",
//     age:20
// }

// const {name,age} = obj2

// const arr4 = [1,2,3,4,5]
// const [one,two] = arr4
// console.log(one,two)

// //classes
// class Person{
//     constructor(name,age){
//         this.name = name;
//         this.age = age;
//     }

//     greet(){
//         console.log(`Hello, my name is ${this.name} and my age is ${this.age}`)
//     }
// }

// const person = new Person("Rakshit",20)
// person.greet()

// //promises
// const promise = new Promise((res,rej)=>{
//     const resp = fetch('')
//     if(resp){
//         res(res)
//     }else{
//         rej('Error')
//     }
// })
// .then(data=>data.json())
// .then(data=>console.log(data))
// .catch(err=>console.log(err))

// //modular programming
// export const add = (a,b) => {
//     return a+b;
// }

// import {add} from './add.js'
// console.log(add(2,3))


// //default parameters
// function func2(a=10,b=20){
//     return a+b;
// }

// console.log(func2())

// //for of loop
// let arr8 = [1,2,3,4,5]
// for(let value of arr8){
//     console.log(value)
// }


// //async await - ES8
// async function fetchData(){
//     const res = await fetch('')
//     const data = await res.json()
//     console.log(data)
// }
// fetchData()

//function statement
function func1(){
    console.log("Hello world")
}

//function expression
const expression = function func2(){
    console.log('Hello world2')
}

//anonymous function
const anonymous = function(){
    console.log("Anonymous function")
}

//arrow functions
const add = (a,b) => {
    console.log(a+b)
}

// //iife
// (function(){
//     console.log("IIFE")
// })()

//weakMap -> only takes object as a key, weak reference
// const weakMap = new WeakMap()

// const obj1 = {key:1}
// const obj2 = {key:2}

// weakMap.set(obj1,"Rakshit")
// weakMap.set(obj2,"Chauhan")

// console.log(weakMap)

// obj1 = null
// console.log(weakMap)


// //weakSet

// const weakSet = new WeakSet()

// let obj3 = {key:1}
// let obj4 = {key:2}
// let obj5 = {key:1}

// weakSet.add(obj3)
// weakSet.add(obj4)
// weakSet.add(obj5)

//logical opeartors

//equalto - will only check the value not the data type -> type coercion
console.log(1=="1")

//strict equalto - will also check the datatype
console.log(1==="1")

//greater than equal to
console.log(1>=1)

//smaller than equal to 
console.log(1<=2)

//greater than smaller than
console.log(1>0)
console.log(2<1)

//not 
console.log(!1==1)

//bitwise

//and
console.log(true && false)
//or
console.log(true || true)
//coalescing
console.log(undefined ?? 2)





