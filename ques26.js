const arr1 = [1, 2, 3, 4, 5];
const arr2 = [1, 3, 8, 9, 10];

const mergeArray = (arr1, arr2) => {
    let res = []
    const set = new Set(arr2)

    for(let num of arr1){
        if(!set.has(num)){
            res.push(num)
        }
    }

    return res
}

console.log(mergeArray(arr1, arr2));