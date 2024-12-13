//inbuilt method 
// let arr = [1,2,10,5,6,7,8,9];
// arr.reverse()
// console.log(arr);

const reverse = (arr) => {
    let start = 0;
    let end = arr.length - 1;

    while(start < end){
        let temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
        start++;
        end--;
    }
    return arr;
}

let arr = [1,2,10,5,6,7,8,9];
console.log(reverse(arr))
