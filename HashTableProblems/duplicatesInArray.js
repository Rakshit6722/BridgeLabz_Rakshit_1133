const arr = [1, 2, 3, 4, 5, 1, 2, 6, 7, 8, 9, 3];
console.log(findDuplicates(arr)); 
function findDuplicatesUsingMap(arr) {
    let duplicates = [];
    let map = new Map();

    for (let i = 0; i < arr.length; i++) {
        if (map.has(arr[i])) {
            map.set(arr[i], map.get(arr[i]) + 1);
        } else {
            map.set(arr[i], 1);
        }
    }

    for (let [key, value] of map) {
        if (value > 1) {
            duplicates.push(key);
        }
    }

    return duplicates;
}

// Example usage:
console.log(findDuplicatesUsingMap(arr)); // Output: [1, 2, 3]