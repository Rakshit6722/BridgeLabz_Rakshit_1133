const secondLargest = (arr) => {
    let firstLargest = Number.MIN_VALUE;
    let secondLargest = Number.MIN_VALUE;

    for(let i=0;i<arr.length;i++){
        if(arr[i]>firstLargest){
            secondLargest = firstLargest
            firstLargest = arr[i]
        }else if(arr[i]>secondLargest && arr[i] !== firstLargest){
            secondLargest = arr[i]
        }
    }

    return secondLargest
}

const secondSmallest = (arr) => {
    let firstSmallest = Number.MAX_VALUE;
    let secondSmallest = Number.MAX_VALUE;

    for(let i=0;i<arr.length;i++){
        if(arr[i]<firstSmallest){
            secondSmallest = firstSmallest
            firstSmallest = arr[i]
        }else if(arr[i]<secondSmallest && arr[i] !== firstSmallest){
            secondSmallest = arr[i]
        }
    }
    return secondSmallest
}

let arr = [1,2,10,5,6,7,8,9]
console.log(secondLargest(arr))
console.log(secondSmallest(arr))