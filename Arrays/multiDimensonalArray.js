let arr = [
    [1, 2, 3],
    [7, 8, 9],
    [4, 5, 6],

]

console.log(arr[0][0])
console.log(arr[1][1])
console.log(arr[2][2])
console.log(arr[1][0])

//sorting
arr.sort((a, b) => {
    if (a[0] === b[0]) {
        return 0
    } else {
        return a[0] < b[0] ? -1 : 1
    }
})

console.log(arr)

//reverse
// arr.reverse()
// console.log(arr)

//searching
let item = 1;

const linearSearch = (arr, item) => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            if (arr[i][j] === item) {
                return true;
            }
        }
    }
    return false;
}
console.log(linearSearch(arr, item))
