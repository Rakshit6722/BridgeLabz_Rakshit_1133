let arr = [12,4,1,7,8,100]

const heapSort = (arr) => {
    let n = arr.length;

    function heapify(i,n){
        let largest = i;
        let left = 2*i+1;
        let right = 2*i+2;

        if(left<n && arr[left]>arr[largest]) largest = left
        if(right<n && arr[right]>arr[largest]) largest = right

        if(largest!==i){
            let temp = arr[i];
            arr[i] = arr[largest];
            arr[largest] = temp;
            heapify(largest,n)
        }
    }

    for(let i=Math.floor(n/2)-1;i>=0;i--){
        heapify(i,n)
    }

    for(let i=n-1;i>=0;i--){
        let temp = arr[0];
        arr[0] = arr[i];
        arr[i] = temp;
        heapify(0,i)
    }
    return arr;
}

console.log(heapSort(arr))

