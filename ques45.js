const findSum = (arr) => {
    let sum = 0;
    arr.forEach(element => {
        element.forEach(num => {
            sum += num;
        });
    });
    return sum
}

console.log(findSum([[1,2,3],[4,6],[7]])) 