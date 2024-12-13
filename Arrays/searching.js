let arr = [20,12,10,30,10]

console.log(arr.includes(10))
console.log(arr.indexOf(10))
console.log(arr.findIndex((item) => item === 10))
console.log(arr.lastIndexOf(10))
console.log(arr.find((item) => item === 10))


//linear search
const linearSearch = (arr, item) => {
    for(let i=0; i<arr.length; i++){
        if(arr[i] === item){
            return i;
        }
    }
    return -1;
}

console.log(linearSearch(arr, 10))

//binary search
const binarySearch = (arr, item) => {
    let start = 0;
    let end = arr.length - 1;

    while(start <= end){
        let mid = Math.floor((start+end)/2)

        if(arr[mid] === item){
            return mid;
        }else if(arr[mid] < item){
            start = mid + 1;
        }else{
            end = mid - 1;
        }
    }
    return -1
}

console.log(binarySearch(arr, 10))