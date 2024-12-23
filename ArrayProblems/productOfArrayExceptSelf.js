let arr = [1,2,3,4,5]

const productOfArrayExceptSelf = (arr) => {
    let res = []

    for(let i=0;i<arr.length;i++){
        let product = 1;
        let currNum = arr[i];
        for(let j=0;j<arr.length;j++){
            if(arr[j]===currNum){
                continue;
            }
            product *= arr[j]
        }
        res.push(product)
    }

    return res
}

console.log(productOfArrayExceptSelf(arr))