// class CustomArray extends Array{
//     operations(...args){
//         let str = ""
//         let primeSum = 0
//         let trueCount = 0;
//         let falseCount = 0
//         let ans = []

//         for(let value of args){
//             if(typeof value === 'number'){
//                 if(this.isPrime(value)){
//                     primeSum = primeSum + value
//                 }
//             }else if(typeof value === 'string'){
//                 str = str.concat(value)
//             }else if(typeof value === 'boolean'){
//                 if(value){
//                     trueCount++
//                 }else{
//                     falseCount++
//                 }
//             }
//         }
//         ans.push(primeSum,{string:str},{isPalindrome:this.palindrome(str)},{True:trueCount},{False:falseCount})
//         console.log(ans)

//     }

//     isPrime(num){
//         for(let i=2;i<num;i++){
//             if(num%i === 0){
//                 return false
//             }
//         }
//         return num > 1
//     }

//     palindrome(string){
//         return string.toLowerCase() === string.toLowerCase().split('').reverse().join('')
//     }
// }

// let customArray = new CustomArray()
// customArray.operations(4,21,3,2,44,'a','b','bada',true,false)


// const copyArrObject = (arr) => {
//     let newArr = []
//     for(let i=0;i<arr.length;i++){
//         if(i%2 === 0){
//             newArr.push(shallowCopy(arr[i]))
//         }else{
//             newArr.push(deepCopy(arr[i]))
//         }
//     }

//     return newArr
// }

// const shallowCopy = (obj) => {
//     // let newObj = Object.assign({},obj)
//     let newObj = obj
//     return newObj
// }

// const deepCopy = (obj) => {
//     // let newObj = JSON.parse(JSON.stringify(obj))
//     // return newObj
//     if(typeof obj !== 'object' || obj === null){
//         return obj
//     }

//     let newObj = Array.isArray(obj) ? [] : {}
//     let keys = Object.keys(obj)

//     for(let key of keys){
//         newObj[key] = deepCopy(obj[key])
//     }

//     return newObj
// }

// let arr = [{a:1,b:2,e:{f:3}},{c:3,d:4},{e:5,f:6}]
// let arr2 = copyArrObject(arr)

// console.log("Original Array: ",arr)
// console.log("Copied Array: ",arr2) 


// // console.log(arr[1].c)
// // console.log(arr2[1].c)

// // arr2[0].e.f = 10

// // console.log(arr[0].e.f)
// // console.log(arr2[0].e.f)

// arr2[1].c = 10
// // console.log(arr[1].c)
// // console.log(arr2[1].c)
// console.log(arr)
// console.log(arr2)

// // arr2[0].a = 10


// // console.log(arr[0].a)
// // console.log(arr2[0].a)

class Stack {
    #arr
    ans = []
    constructor() {
        this.#arr = []
    }

    getMax() {
        return Math.max(...this.#arr)
    }

    getMin() {
        return Math.min(...this.#arr)
    }

    pushElement(element) {
        this.#arr.push(element)
        return null
    }

    popElement() {
        this.#arr.pop()
        return null
    }

    push(...args) {
        args.forEach(arg =>
            arg.forEach(a => {
                if (a.includes("push")) {
                    let num = parseInt(a.split('(')[1].split(')')[0])
                    this.ans.push(this.pushElement(num))
                } else if (a.includes("getMin")) {
                    this.ans.push(this.getMin())
                } else if (a.includes("pop")) {
                    this.ans.push(this.popElement())
                } else if (a.includes("getMax")) {
                    this.ans.push(this.getMax())
                }
            }
            )
        )
        console.log(this.ans)
    }
}

let st = new Stack()
st.push(["push(2)", "getMin()", "push(5)", "push(1)", "pop()", "getMin()"])
