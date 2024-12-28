function nextGreaterElement(arr){
    let result = new Array(arr.length).fill(-1);
    let stack = [];

    for (let i = 0; i < arr.length; i++) {
        while (stack.length && arr[stack[stack.length - 1]] < arr[i]) {
            result[stack.pop()] = arr[i];
        }
        stack.push(i);
    }

    return result;
}

let arr = [4, 5, 2, 25];
console.log(nextGreaterElement(arr)); 