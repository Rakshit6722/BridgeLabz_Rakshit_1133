const positiveArray = (arr) => {
    return arr.filter((num) => num >= 0)
}

console.log(positiveArray([1, 2, 3, -1, -2, -3, 4, 5, 6, -4, -5, -6, 7, 8, 9, 10]))