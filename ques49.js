const shuffleArrayOfStrings = (arr) => {
    return arr.sort(() => Math.random() - 0.5)
}

console.log(shuffleArrayOfStrings(["apple", "banana", "mango", "orange", "grapes"]))