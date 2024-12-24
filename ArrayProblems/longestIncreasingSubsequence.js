let arr = [1,5,2,1,4]

const longestIncreasingSubsequence = (arr,index,prev_index) => {
    if(index == arr.length){
        return 0;
    }
    let len = 0;
    len = 0 + longestIncreasingSubsequence(arr,index+1,prev_index)
    if(prev_index==-1 || arr[index]>arr[prev_index]){
        len = Math.max(len,1+longestIncreasingSubsequence(arr,index+1,index))
    }
    return len
}

console.log(longestIncreasingSubsequence(arr,0,-1))