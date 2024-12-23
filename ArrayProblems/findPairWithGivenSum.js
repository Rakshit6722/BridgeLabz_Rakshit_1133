let arr = [1,2,3,4,5]
let target = 5

const findPairWithGivenSum = (arr,target) =>  {
    let map = new Map()

    for(let i=0;i<arr.length;i++){
        let remaining = Math.abs(target-arr[i])

        if(map.has(remaining)){
            return [arr[i],remaining]
        }

        map.set(arr[i],i)
    }

    return "Pair not found"
}

console.log(findPairWithGivenSum(arr,target))