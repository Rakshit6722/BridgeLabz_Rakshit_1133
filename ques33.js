let numStr = "1, 2,3 ,4,5"

const findSum = (arr) => {
    let numArr = arr.split(/\s*,\s*/).map(Number)
    return numArr.reduce((acc, curr) => acc + curr,0)
}

console.log(findSum(numStr))

