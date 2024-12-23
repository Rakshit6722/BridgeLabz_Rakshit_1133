const subarrayWithGivenSum = (arr,targetSum) => {
    let currentSum = 0;
    let start = 0;

    for (let end = 0; end < arr.length; end++) {
        currentSum += arr[end];

        while (currentSum > targetSum && start <= end) {
            currentSum -= arr[start];
            start++;
        }

        if (currentSum === targetSum) {
            return arr.slice(start, end + 1);
        }
    }

    return [];
}

let arr = [1,2,3,4,5]
let targetSum = 9

console.log(subarrayWithGivenSum(arr,targetSum))