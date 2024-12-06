//function calling itself until the base condition is reached

//fibonacci  series
// function fib(n){
//     if(n<=1){
//         return n
//     }
//     return fib(n-1) + fib(n-2)
// }

// console.log(fib(8))

//flatten nested arrays
const arr = [1,2,3,[4,5,[6,7,[8,9]]]]

function flatter(arr){
    return arr.reduce((acc,curr)=>{
        return Array.isArray(curr) ? acc.concat(flatter(curr)) : acc.concat(curr)
    },[])
}

console.log(flatter(arr))
