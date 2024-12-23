let arr = [1,2,5,10,6,7]

const largestSumContiguousSubarray = (arr) => {
    let maxSum = arr[0]
    let currentSum = arr[0]

    for(let i=1;i<arr.length;i++){
        currentSum = Math.max(currentSum, currentSum+arr[i])
        maxSum = Math.max(maxSum,currentSum)
    }

    return maxSum
}

let maxSum = largestSumContiguousSubarray(arr)
console.log(maxSum)