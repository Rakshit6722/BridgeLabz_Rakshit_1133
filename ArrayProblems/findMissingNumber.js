let arr = [1,2,3,5]
let n = arr.length

const missingNumber = (arr,n) => {
    let sum = 0;
    for(let i=0;i<arr.length;i++){
        sum+=arr[i]
    }

    let actualSum = 0;
    for(let i=0;i<=n+1;i++){
        actualSum+=i
    }

    return actualSum-sum
}

console.log(missingNumber(arr,n))