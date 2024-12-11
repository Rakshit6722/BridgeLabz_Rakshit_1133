const arr1 = [1, 2, 3, 4, 5];
const arr2 = [1, 2, 8, 4, 10];

const mergeArrayUniqueValues = (arr1, arr2) => {
    const set1 = new Set(arr1);
    const set2 = new Set(arr2);

    let result = []

    for(let num of set1){
        if(!set2.has(num)){
            result.push(num);
        }
    }

    for(let num of set2){
        if(!set1.has(num)){
            result.push(num);
        }
    }

    return result
}

console.log(mergeArrayUniqueValues(arr1, arr2));