const twoSum = (arr, target) => {
    const map = new Map();
    for (let i = 0; i < arr.length; i++) {
        const remaining = target - arr[i];
        if (map.has(remaining)) {
            return [map.get(remaining), i];
        }
        map.set(arr[i], i);
    }
    return null;
}

const arr = [2, 7, 11, 15];
const target = 9;
const result = twoSum(arr, target);
console.log(result); 