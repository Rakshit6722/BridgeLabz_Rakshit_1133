const extractColumn = (arr, column) => {
    return arr.map(element => element[column])
}

console.log(extractColumn([[1,2,3],[4,5,6],[7,8,9]], 1)) 