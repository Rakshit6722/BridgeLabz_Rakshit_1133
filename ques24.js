let arr1 = [1, 2, 3, 4, 5];
let arr2 = [6, 7, 8, 9, 10];

const mergeArray = (arr1, arr2) => {
    // return arr1.concat(arr2);

    return [...arr1, ...arr2];
}

console.log(mergeArray(arr1, arr2));