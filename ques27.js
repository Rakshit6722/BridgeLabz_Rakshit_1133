const arr1 = [1, 1, 2, 2, 3, 4, 4]

const findDistinctElements = (arr) => {
    return [...new Set(arr)]
}

console.log(findDistinctElements(arr1));