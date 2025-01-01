function intersectionOfArrays(arr1, arr2) {
    let map = new Map();
    let result = [];

    for (let num of arr1) {
        map.set(num, true);
    }

    for (let num of arr2) {
        if (map.has(num)) {
            result.push(num);
            map.delete(num); 
        }
    }

    return result;
}


let array1 = [1, 2, 2, 1];
let array2 = [2, 2];
console.log(intersectionOfArrays(array1, array2)); 