const findSum = (arr) => {
    let sum = 0;
    arr.forEach(element => {
        if(Array.isArray(element)){
            element.forEach(num => {
                sum += num;
            });
        }else{
            sum += element;
        }
    });
    return sum
}

console.log(findSum([[1,2,3],[4,6],32,[7]])) 