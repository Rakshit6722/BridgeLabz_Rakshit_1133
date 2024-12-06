//spread operator

//merging one array into another array
const numbers = [1, 2, 3];
const number2 = [...numbers]
console.log(number2)

//pusing elements of one array into another array and additional elements
const arr1 = [1,2,3]
const arr2 = [...arr1,4,5,6]
console.log(arr2)

//merging two objects
const obj1 = {name: 'John'}
const obj2 = {age: 30}
const obj3 = {...obj1,...obj2}
console.log(obj3)

//merging two objects with same key, shallow copy
const obj4 = {name: 'John'}
const obj5 = {name: 'Jane'}
const obj6 = {...obj4,...obj5}
console.log(obj6)


//merging and adding new key value pair
const obj7 = {name: 'John'}
const obj8 = {...obj7, age: 30}
console.log(obj8)


//rest operator
function func(...args){
    console.log(args)
    let sum = 0;
    args.forEach((arg)=>{
        sum += arg
    })
    return sum
}

const sum = func(1,2,3,4,5,6,7,8,9,10)
console.log(sum)

const arr7 = [1,2,3,4,5,6,7,8,9,10]
const [a,b,...rest] = arr7
console.log(a)
console.log(b)
console.log(rest)
