//in-built methods
let arr = [1, 2, 10, 5, 6, 7, 8, 9];
console.log(Math.max(...arr));
console.log(Math.min(...arr));

const maxNumber = (arr) => {
    let max = Number.MIN_VALUE
    for(let i=0;i<arr.length;i++){
        if(arr[i]>max){
            max = arr[i]
        }
    }
    return max
}

const minNumber = (arr) => {
    let min = Number.MAX_VALUE
    for(let i=0;i<arr.length;i++){
        if(arr[i]<min){
            min = arr[i]
        }
    }
    return min
}

console.log(maxNumber(arr))
console.log(minNumber(arr))