// const set = new Set()
// set.add(1)
// set.add(2)
// set.add(3)
// set.add(2)
// set.add(1)
// console.log(set)
// set.delete(2)
// console.log(set)
// console.log(set.has(1))
// console.log(set.size)
// set.clear()
// console.log(set)

//real implementation of set in projects - removing duplicates from a give data
// const data = [1,1,2,3,4,5,5,6,7,8,9,9,10]
// const uniqueData = removeDuplicates(data)

// function removeDuplicates(data) {
//     return [...new Set(data)]
// }

// console.log(uniqueData)

//weakSet
const weakSet = new WeakSet()
let obj1 = { name: 'John' }
let obj2 = { name: 'Jane' }

weakSet.add(obj1)
weakSet.add(obj2)

console.log(weakSet.has(obj1))
console.log(weakSet.has(obj2))
// console.log((weakSet)) 

