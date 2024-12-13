//inbuilt method
// let arr = [1,2,10,5,6,7,8,9];
// arr.sort((a,b)=>a-b);
// console.log(arr);

//bubble sort
// let arr = [1, 2, 10, 5, 6, 7, 8, 9];

// const bubbleSort = (arr) => {
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = 0; j < arr.length - i - 1; j++) {
//             if (arr[j] > arr[j + 1]) {
//                 let temp = arr[j]
//                 arr[j] = arr[j + 1]
//                 arr[j + 1] = temp
//             }
//         }
//     }
//     return arr
// }
// console.log(bubbleSort(arr));

//selection sort
// let arr = [1, 2, 10, 5, 6, 7, 8, 9];

// const selectionSort = (arr) => {
//     for (let i = 0; i < arr.length; i++) {
//         let min = i;
//         for (let j = i + 1; j < arr.length; j++) {
//             if (arr[j] < arr[min]) {
//                 min = j;
//             }
//         }
//         let temp = arr[i];
//         arr[i] = arr[min];

//         arr[min] = temp;
//     }
//     return arr
// }
// console.log(selectionSort(arr));

//merge sort
let arr = [1, 2, 10, 5, 6, 7, 8, 9]

const mergeSort = (arr) => {
    if(arr.length <= 1){
        return arr;
    }

    let mid = Math.floor(arr.length/2);

    let left = mergeSort(arr.slice(0,mid));    
    let right = mergeSort(arr.slice(mid));

    return merge(left,right);
}

const merge = (left,right) => {
    let result = []
    let i=0
    let j=0

    while(i<left.length && j<right.length){
        if(left[i] < right[j]){
            result.push(left[i]);
            i++;
        }else{
            result.push(right[j]);
            j++;
        }
    }

    while(i<left.length){
        result.push(left[i]);
        i++;
    }

    while(j<right.length){
        result.push(right[j]);
        j++;
    }

    return result;
}

console.log(mergeSort(arr));





