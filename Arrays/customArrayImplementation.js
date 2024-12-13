//extending built-in Array class
class CustomArray extends Array{
    sum(){
        return this.reduce((acc, curr) => acc + curr,0)
    }

    evenNum(){
        return this.filter((item) => item % 2 === 0)
    }

    oddNum(){
        return this.filter((item) => item % 2 !== 0)
    }

    square(){
        return this.map((item) => item * item)
    }

    max(){
        return Math.max(...this)
    }

    min(){
        return Math.min(...this)
    }

    average(){
        return this.sum()/this.length
    }
}

let customArray = new CustomArray(1,2,3)
customArray.push(1)
customArray.push(2)
customArray.push(3)
console.log(customArray)

//using custom implementation
// class CustomArray{
//     #arr = []

//     constructor(...args){
//         this.#arr.push(...args)
//     }

//     push(...args){
//         this.#arr.push(...args)
//     }

//     pop(){
//         return this.#arr.pop()
//     }

//     shift(){
//         return this.#arr.shift()
//     }

//     unshift(...args){
//         this.#arr.unshift(...args)
//     }

//     length(){
//         return this.#arr.length
//     }

//     print(){
//         console.log(this.#arr)
//     }

//     get(index){
//         return this.#arr[index]
//     }

//     set(index, value){
//         this.#arr[index] = value
//     }

//     splice(index, noOfItems, ...args){
//         if(args !== undefined){
//             this.#arr.splice(index, noOfItems, ...args)
//             return
//         }
//         this.#arr.splice(index, noOfItems)
//     }
// }

// let customArray = new CustomArray(1,2,3)
// customArray.push(1)
// customArray.push(2)
// customArray.push(3)
// customArray.print()
// customArray.pop()
// customArray.print()
// customArray.shift()
// customArray.print()
// customArray.unshift(1)
// customArray.print()
// console.log(customArray.length())
// customArray.set(0, 10)
// customArray.print()
// customArray.splice(0, 1, 1, 2, 3)
// customArray.print()
// console.log(customArray.get(0))