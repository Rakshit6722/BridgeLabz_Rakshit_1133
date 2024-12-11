let arr =  [1, 2, 3, 4, 5];
let position = 1;

//reverse
const reverse = (arr,i,j) => {
    while(i<j){
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
        i++;
        j--;
    }
}

//right rotate
const rightRotate = (arr,position) => {
    reverse(arr,0,arr.length-1);
    reverse(arr,0,position-1);
    reverse(arr,position,arr.length-1);
    return arr;
}

console.log(rightRotate(arr,position));