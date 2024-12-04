//spreat operator
// let a = [1, 2, 3];
// let d = [1, 2, 3];
//cloning without spread operator
// let b = a.slice()
//cloning with spread operator
// let c = [...d]
// console.log(b);
// console.log(c);

// let a = [1,2,3]
// let b = [4,5,6]
// let c = [...a, ...b]
// console.log(c)

// let obj1 = { name: 'John' }
//cloning without spread operator
// let obj2 = Object.assign({},obj1)
//cloning with spread operator
// let obj3 = {...obj1}
// console.log(obj2)
// console.log(obj3)
// obj2.name = 'Jane'
// console.log(obj2)

// let obj1 = { name: 'John' }
// let obj2 = { age: 30 }
// let obj3 = { ...obj1, ...obj2 }
// console.log(obj3)

//rest operator
// function sum(...args){
//     let sum=0;
//     for(let arg of args){
//         sum+=arg
//     }
//     return sum
// }
// console.log(sum(1,2,3,4,5))

// const arr = [1,2,3,4,5]
// const[a,b,...rest] = arr
// console.log(a)
// console.log(b)
// console.log(rest)

// let obj1 = {
//     name: 'John',
//     age: 30,
//     weight: 70,
// }

// const {name, ...rest} = obj1
// console.log(name)
// console.log(rest)

//destructuring assignment
// let arr = ["Rakshit","Chauhan"]
// const [firstName, lastName] = arr
// console.log(firstName)
// console.log(lastName)

let obj = {
    name: 'John',
    age: 30,
}
const {name, age} = obj
console.log(name)
console.log(age)