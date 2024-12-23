let arr = [1,12,2,3,4]
let k = 4

const rotateRightKTimes = (arr,k) => {
    let n = arr.length
    k = k%n

    reverse(arr,0,n-1)
    reverse(arr,0,k-1)
    reverse(arr,k,n-1)
}

const reverse = (arr,start,end) => {
    while(start<end){
        [arr[start],arr[end]] = [arr[end],arr[start]]
        start++;
        end--;
    }
}

rotateRightKTimes(arr,k)
console.log(arr)
