const findSumOfDigits = (num) => {
    return num.toString().split('').map(Number).reduce((acc,curr) => acc+curr,0)
}

console.log(findSumOfDigits(12345))