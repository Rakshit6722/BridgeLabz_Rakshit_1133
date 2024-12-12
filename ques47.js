const deepCopy = (jaggedArr) => {
    let ind = 0;
    let newArr = []
    helperFunc(jaggedArr, newArr);

    return newArr
}

const helperFunc = (jaggedArr, newArr) => {
    for (let i = 0; i < jaggedArr.length; i++) {
        if (Array.isArray(jaggedArr[i])) {
            let nestedArr = []
            helperFunc(jaggedArr[i], nestedArr);
            newArr.push(nestedArr);
        } else {
            newArr.push(jaggedArr[i]);
        }
    }
}

const res = deepCopy([[1,2,3],[4,5],[6,7,8,9]]);
console.log(res);