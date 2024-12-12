const findMax = (arr) => {
    let max = Number.MIN_VALUE;
    arr.forEach(element => {
        element.forEach(num => {
            if(num > max){
                max = num;
            }
        });
    });
    return max;
}

console.log(findMax([[1,2,3],[4,6],[7]])) 
