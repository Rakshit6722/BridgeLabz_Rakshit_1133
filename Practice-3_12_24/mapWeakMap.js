//basic map functionalities
// const map = new Map()
// map.set('name', 'John')
// map.set('age', 30)
// map.set('weight', 70)
// map.set('height', 180)

// console.log(map.get('name'))
// console.log(map.get('age'))
// console.log(map.get('weight'))
// console.log(map.get('height'))

// console.log(map.has('weight'))

// map.delete('weight')

// for (const [key, value] of map) {
//   console.log(key, value)
// }

// console.log(map.size)

// map.clear()

//real-life implementation of map in projects
//caching data of apis

// const cache = new Map()

// const fetchData = async (url) => {
//     if(cache.has(url)) {
//         return cache.get(url)
//     } else {
//         const response = await fetch(url)
//         const data = await response.json()
//         cache.set(url, data)
//         return data
//     }
// }

//weakMap
const weakMap = new WeakMap()
let obj1 = { name: 'John' }
let obj2 = { name: 'Jane' }

weakMap.set(obj1, 1)
weakMap.set(obj2, 2)

console.log(weakMap.get(obj1))
console.log(weakMap.get(obj2))

weakMap.delete(obj1)

console.log(weakMap.has(obj1))
console.log(weakMap.has(obj2))

obj1 = null
console.log(weakMap.get(obj1))//will return undefined as reference of obj1 is lost